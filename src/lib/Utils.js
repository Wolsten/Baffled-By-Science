const SYMBOLS = 7 // Must match number of symbol classes in Symbol.svelte
const MIN_EVENT_WIDTH = 3

// https://materialui.co/colors
// 500 unless otherwise stated
const COLOUR_SET = [
	'var(--material-600-red)',
	'var(--material-400-indigo)',
	'var(--material-500-teal)',
	'var(--material-600-light-green)',
	'var(--material-500-amber)',
	'var(--material-300-brown)',
	'var(--material-500-blue-grey)',
	'var(--material-700-cyan)',
	'var(--material-700-orange)'
]





const colour = function(index,colourIndex,group){
	if ( group ){
		index = colourIndex
	}
	return COLOUR_SET[index % COLOUR_SET.length]
}


const toPrecision = function( num, digits ){
	return parseFloat( num.toPrecision(digits) )
}


const formatNumber = function(number,digits=0){
	let suffix = ''
	if ( number > 1000000 ){
		number = number/1000000
		suffix = 'M'
	}
	if ( digits == 0 ){
		return new Intl.NumberFormat('en-GB').format(number) + suffix
	}
	return new Intl.NumberFormat('en-GB', { maximumSignificantDigits: digits }).format(number) + suffix
}


const formatDate = function(date){
	let formatted = formatYear(date.year)
	if ( date.month > 0 && date.day > 0){
		formatted = `${date.day} ${getMonth(date.month)} ${formatted}`
	}
	return formatted
}


const formatYear = function(year){
	const magnitude = Math.abs(year)
	let millions = magnitude/1000000
	let thousands = millions*1000
	// let formatted = new Intl.NumberFormat().format(Math.round(millions))
	// console.log(year,magnitude,millions,thousands,formatted)

	if ( millions > 1 ){

		// let formatted = new Intl.NumberFormat().format(Math.round(millions))
		let formatted = Number.parseFloat(millions).toPrecision(2)
		formatted = new Intl.NumberFormat().format(formatted)

		if ( year < 0 ){
			return formatted + 'mya'
		}
		return formatted + 'my'

	} else if ( thousands > 10 ){

		// let formatted = Number.parseFloat(millions).toPrecision(1)
		// if ( year < 0 ){
		// 	return formatted + 'mya'
		// }
		// return formatted + 'my'

		// let formatted = Number.parseFloat(thousands).toPrecision(2)
		let formatted = parseInt(thousands / 100) * 100
		if ( year < 0 ){
			return formatted + 'tya'
		}
		return formatted + 'ty'

	} else if ( year < 0 ){
		return Math.abs(year) + 'bc'
	}

	return year
}



const eventDates = function(event){
	// debugger
	let html = ''
	if ( event.start != '-' ){
		html += formatDate(event.startDate)
	}
	if ( event.end ) {
		if ( event.end == '-' ){
			html += ' - '
		} else {
			html += ` - ${formatDate(event.endDate)}`
		}
	}
	html = `(${html})`
	return html
}


const initXAxis = function(start,end,events,series){
    return {
		majorAxis : [],
		majorTicks : [],
		majorLabels : [],
		majorFirst : start,
		majorLast : end,
		majorRange : end - start,
        xUnit : events.length > 0 
            ? 'date' 
            : series.length > 0 ? series[0].xUnit : ''
    }
}


const initSettings = function( userSettings, start, end, subCats ){
    let settings = {}
    // Apply default settings where required
    settings.symbols = userSettings.symbols || false
    settings.readonly = userSettings.readonly || false
    settings.totalise= userSettings.totalise || false
    settings.categorise = userSettings.categorise || false
    settings.logscale= userSettings.logscale || false
    settings.search = userSettings.search || ''
    settings.title = userSettings.title || ''
    settings.sort = userSettings.sort || 'x'
    if ( userSettings.xRange && userSettings.xRange.start && userSettings.xRange.end ){
        settings.xRange = userSettings.xRange
        settings.xRange.range = userSettings.xRange.end - userSettings.xRange.start
    } else {
        settings.xRange = {
            start: start,
            end: end,
            range: end - start
        }
    }
    settings.subCats = userSettings.subCats || subCats
    return settings
}


const initCategories = function (events,series){

	// console.log('creating new group from series', series)
	let groups = []

	// Get two lists of unique sub categories
	let seriesSubCats = new Set
	series.forEach( entry=>{
		seriesSubCats.add(entry.subCategory) 	
	})
	
	let eventsSubCats = new Set
	events.forEach( entry=>{
		eventsSubCats.add(entry.subCategory)	
	})

	seriesSubCats = Array.from(seriesSubCats)
	eventsSubCats = Array.from(eventsSubCats)

	// Sort and add extra full total group for series
	if ( seriesSubCats.length > 1 ){
		seriesSubCats.sort( (a,b) => a - b)
		seriesSubCats.push('total')
	}

	// Generate totalised sub category groups
	if ( series.length > 0 ){

		seriesSubCats.forEach( (cat, index) => {

			let group = {
				id: index + 1,
				max: Number.NEGATIVE_INFINITY,
				min: Number.POSITIVE_INFINITY,
				name: cat,
				points: [],
				subCategory: cat,
				citations: ''
			}

			series.forEach( item => {

				group.xUnit = item.xUnit
				group.citations = item.citations

				if ( cat=='total' || item.subCategory == cat ){

					item.points.forEach( point => {

						// Look for point with same x
						let match = group.points.findIndex( pt => pt.x == point.x )

						// Create new point or add existing to match
						if ( group.points.length == 0 || match == -1 ){
							match = 0
							// *** IMPORTANT *** MUST PUSH A COPY NOT THE ORIGINAL
							group.points.push({...point})
						} else {
							group.points[match].value += point.value
						}

						if ( group.points[match].value > group.max ){
							group.max = group.points[match].value
						}
						if ( group.points[match].value < group.min ){
							group.min = group.points[match].value
						}

					})
				}
			})

			group.points.sort( (a,b) => a.x - b.x )

			groups.push(group)
		})

	}

	//console.error('groups',groups,'subcats',subCats)
	return {groups, eventsSubCats, seriesSubCats}
}


const initSeriesColours = function(series, groups){
    const indices = []
	series.forEach( (entry,index) => {
		let subCatIndex = index
		if ( entry.subCategory != '' ){
			subCatIndex = indices.findIndex( cat => cat==entry.subCategory )
			if ( subCatIndex == -1 ){
				indices.push(entry.subCategory)
				subCatIndex = indices.length - 1
			}
		}
		entry.colourIndex = subCatIndex % COLOUR_SET.length
		entry.symbolIndex = index % SYMBOLS
	})
	groups.forEach( (entry,index) => {
		let subCatIndex = index
		if ( entry.subCategory != '' ){
			subCatIndex = indices.findIndex( cat => cat==entry.subCategory)
			if ( subCatIndex == -1 ){
				indices.push(entry.subCategory)
				subCatIndex = indices.length - 1
			}
		}
		entry.colourIndex = subCatIndex % COLOUR_SET.length
		entry.symbolIndex = index % SYMBOLS
	})

	console.log('series',series)

    return {series, groups}
}


const processDataset = function( data ){
    data.xAxis = initXAxis( data.start, data.end, data.events, data.series )
    const groupsAndSubCats = initCategories( data.events, data.series )
    data.eventsSubCats = groupsAndSubCats.eventsSubCats
    data.seriesSubCats = groupsAndSubCats.seriesSubCats
    const seriesAndGroups = initSeriesColours( data.series, groupsAndSubCats.groups)
    data.series = seriesAndGroups.series
    data.groups = seriesAndGroups.groups
    return data
}


const processEvents = function(events,scale,startValue,endValue,drawingWidth,datasetSubCats,optionsSubCats,search){

	// console.warn('Processing events',events,datasetSubCats,optionsSubCats)

	let filtered = filterEventsBySearchAndCategory( events, search, optionsSubCats )
	// console.log('filtered',[...filtered])

	filtered = filterEventsByXRange( filtered, scale, startValue, endValue, drawingWidth, datasetSubCats )
	// console.log('filtered',[...filtered])

	return sortEventsVertically(filtered,datasetSubCats)
}


const filterEventsBySearchAndCategory = function( events, search, optionsSubCats ){
	const pattern = new RegExp(search,'i')
	let filtered = []
	events.forEach( event => {
		let matched = search=='' || event.name.search(pattern) != -1 
		if ( matched && optionsSubCats.includes( event.subCategory ) ){
			filtered.push(event)
		}
	})
	return filtered
}

const filterEventsByXRange = function( events, scale, startValue, endValue, drawingWidth, datasetSubCats ){
	let filtered = []
	events.forEach( (event,index) => {
		// Update "already started" and "ongoing" sevents to be at the extremes
		// Employ an offset so that the events are not incorrectly filtered
		// when the x ranges are changed.
		if (event.start === '-'){
			// console.log(event.name,'setting start date to',startValue)
			event.startDate = {
				year: startValue - 1,
				month: 0,
				day:0,
				decimal: startValue - 1
			}
		}
		if (event.end === '-'){
			// console.log(event.name,'setting end date to',endValue)
			const year = new Date().getFullYear()
			event.endDate = {
				year: year,
				month: 0,
				day:0,
				decimal: year
			}
		}

		// Range test
		// console.log('checking event',event)
		const endDate = event.endDate ? event.endDate : event.startDate
		const startsIn = event.startDate.year >= startValue &&
						 event.startDate.year <= endValue
		const endsIn = endDate.year >= startValue &&
					   endDate.year <= endValue

		if ( startsIn || endsIn ){

			// console.error(event.name, 'in range')

			event.index = event.id

			event.left = Math.round((event.startDate.decimal - startValue) * scale)
			event.width = 0
			if ( event.endDate ){
				event.width = Math.round((event.endDate.decimal - event.startDate.decimal ) * scale)
				// console.log('reset width',event,scale)
			}
			if ( event.width < MIN_EVENT_WIDTH ){
				event.width = MIN_EVENT_WIDTH
			}

			let subCatIndex = datasetSubCats.findIndex( c => c==event.subCategory )
			if ( subCatIndex == -1 ){
				subCatIndex = 0
			} else {
				subCatIndex = subCatIndex % COLOUR_SET.length	
			}
			event.colour = COLOUR_SET[subCatIndex]

			filtered.push(event)
		}
	})
	return filtered
}


const sortEventsVertically = function( events, datasetSubCats ){
	// console.error('sortEventsVertically events',events)
	// console.log('subcats',datasetSubCats)
	// A sort indices
	// x sorted
	events.sort( (a,b) => a.startDate.decimal - b.startDate.decimal)
	events.forEach( (e,i) => e.xOrder = i )
	// console.error('sorted events series by decimal',[...events])
	// Sub-category sorted
	events.sort( (a,b) => {
		const aIndex = datasetSubCats.findIndex( c=> c==a.subCategory)
		const bIndex = datasetSubCats.findIndex( c=> c==b.subCategory)
		return aIndex - bIndex
	})
	events.forEach( (e,i) => e.cOrder = i )
	// console.warn('sorted events by x-axis value and category',events)
	return [...events]
}



const processSeries = function(set, scale, startValue, endValue){
	
	let filtered = []

	// console.warn('set',set,'scale',scale)

	set.forEach( (series,index) => {

		filtered[index] = {...series}
		filtered[index].data = []

		series.points.forEach( (point, i) => {

			// Range test
			let inRange 
			// debugger
			if ( set.xUnit == 'date' ){
				inRange = point.date.year >= startValue &&
						  point.date.year <= endValue
			} else {
				inRange = point.x >= startValue &&
						  point.x <= endValue
			}

			if ( inRange ){

				const value = set.xUnit == 'date' ? point.date.decimal : point.x
				const x = (value - startValue) * scale

				let xLabel = point.x
				if ( set.xUnit == 'date' ){
					xLabel =  formatDate(point.date) 
				} else if ( set.xUnit == 'year' ){
					xLabel = formatYear(point.x)
				}

				const newPoint = {
					index,
					i,
					value: point.value,
					xLabel,
					x: parseInt(x),
					y: 0 // To be scaled in the component
				}

				filtered[index].data.push(newPoint)
			}
		})

	})

	// console.error('filtered',filtered)
		
	return filtered
}


const labelAxis = function( xAxis, paddingLeft, drawingWidth, range){

	// console.log('labelAxis: range',range)

	let newAxis = { ...xAxis}

	newAxis.majorAxis = []
	newAxis.majorTicks = []
	newAxis.majorLabels = []

	let x = paddingLeft
	let start = range.start

	const intervals = Math.floor(drawingWidth/Utils.MIN_BOX_WIDTH)
	const intervalWidth = parseInt(drawingWidth / intervals)
	const interval = parseInt(range.range / intervals)
		
	for( let i=0; i<intervals+1; i++ ){

		newAxis.majorTicks.push(parseInt(x))
		newAxis.majorAxis.push(start)

		const formatted = xAxis.xUnit=='date' ? formatYear(start) : start
		newAxis.majorLabels.push(formatted)

		x += intervalWidth
		start += interval
	}

	return newAxis
}

/**
 * Smooth out user interaction
 * @param {function} fn a callback function
 * @param {number} delay delay in ms before callback triggered
 * @returns 
 */
 const debounce = function(fn, delay) {
    let timeOutId
    return function(...args) {
        // Clear previous timeout if not expired
        if( timeOutId ) {
            clearTimeout(timeOutId)
        }
        // Set new timeout
        timeOutId = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}


const fetchData = async function ( fetch, dataName ){
	const post = await fetch(`/data/${dataName}.json`)
	const data = await post.json()
	return data
}

const fetchDataset = async function ( fetch, datasetName ){
	const post = await fetch(`/data/${datasetName}.json`)
	const dataset = await post.json()
	return processDataset(dataset)
}


const Utils = {
	fetchData,
	fetchDataset,
    processDataset,
    initSettings,
    processEvents,
    processSeries,
	eventDates,
    labelAxis,
	debounce,
	toPrecision,
	formatNumber,
	formatYear,
	colour,
	COLOUR_INACTIVE: 'rgb(189, 189, 189)', // Material grey 400
	MIN_BOX_WIDTH: 80,
	CANVAS_MIN_HEIGHT: 200,
	CANVAS_PADDING_LEFT: 20,
	CANVAS_PADDING_RIGHT: 20,
	NAV_BREAK: 600
}

export default Utils