
// Add unique symbol and colour id to each series
// const COLOURS = 6 // Must match number of series colours in app.css
const SYMBOLS = 7 // Must match number of symbol classes in Symbol.svelte

const DAYS_IN_MONTH = [
    31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
]


const MONTHS_IN_YEAR = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]


// function monthString(oneBasedMonth) {
//     return MONTHS_IN_YEAR[oneBasedMonth - 1]
// }


// function compareDates(a,b){

// 	if ( a == undefined ){
// 		// console.error('a undefined')
// 		return 0
// 	}
// 	if (b == undefined ){
// 		// console.error('b undefined')
// 		return 0
// 	}

// 	// Sort a before if year earlier
// 	if ( a.year < b.year ) {
// 		return -1
// 	// Sort a after if year after
// 	} else if ( a.year > b.year ) {
// 		return 1
// 	// Check month if year same
// 	} else if ( a.month < b.month ){
// 		return -1
// 	} else if (a.month > b.month){
// 		return 1
// 	// Check day if day same
// 	} else if ( a.day < b.day ){
// 		return -1
// 	} else if (a.day > b.day){
// 		return 1
// 	}
// 	return 0
// }


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

const formatDate = function(date){
	let formatted = formatYear(date.year)
	if ( date.month > 0 && date.day > 0){
		formatted = `${date.day} ${getMonth(date.month)} ${formatted}`
	}
	return formatted
}


const initAxis = function( dataset ){

	// Initialise the xAxis
	let xAxis = {
		majorAxis : [],
		majorTicks : [],
		majorLabels : [],
		majorFirst : dataset.start,
		majorLast : dataset.end,
		majorRange : dataset.end - dataset.start
	}

	// xAxis.minorIntervals = interval > 2 ? 10 : 12
	// const monthlyIntervals = xAxis.minorIntervals == 12 // && xAxis.majorRange < 4
	// for (let minor = 1; minor <= xAxis.minorIntervals; minor++) {
	// 	// Only label monthly intervals if have 1 or 2 years to display
	// 	const tick = monthlyIntervals ? monthString(minor) : '&nbsp;'
	// 	xAxis.minorAxis.push(tick);
	// }
	// console.log('xAxis',xAxis)

	return xAxis
}


const labelAxis = function( xAxis, paddingLeft, drawingWidth, range){

	// console.log('labelAxis: range',range)

	let newAxis = { ...xAxis}

	newAxis.majorAxis = []
	newAxis.majorTicks = []
	newAxis.majorLabels = []

	let x = paddingLeft
	let start = range.start

	const intervals = Math.floor(drawingWidth/Graph.MIN_BOX_WIDTH)
	const intervalWidth = parseInt(drawingWidth / intervals)
	const interval = parseInt(range.range / intervals)
		
	for( let i=0; i<intervals+1; i++ ){

		newAxis.majorTicks.push(parseInt(x))
		newAxis.majorAxis.push(start)

		const formatted = xAxis.xUnit=='date' ? Graph.formatYear(start) : start
		newAxis.majorLabels.push(formatted)

		x += intervalWidth
		start += interval
	}

	return newAxis
}


// const colourSet = [
// 	'rgb(83,183,148)',
// 	'rgb(249,120,80)',
// 	'rgb(123,141,191)',
// 	'rgb(223,114,182)',
// 	'rgb(151,211,67)',
// 	'rgb(245,195,10)',
// 	'rgb(222,184,129)',
// 	'rgb(150,164,200)',
// 	// 'rgb(164,164,164)',
// ]

// https://materialui.co/colors
// 500 unless otherwise stated
const colourSet = [
	// Red 200
	'rgb(239, 154, 154)', 
	// Deep purple 200
	'rgb(179, 157, 219)',
	// Blue 200
	'rgb(144, 202, 249)',
	// Green 200
	'rgb(165, 214, 167)',
	// Lime 600
	'rgb(192, 202, 51)',
	// Amber 500
	'rgb(255, 193, 7)',
	// Brown 200
	'rgb(188, 170, 164)',
	// Blue grey 500
	'rgb(96, 125, 139)',
	// Cyan 700
	'rgb(0, 151, 167)',
	// Indigo 300
	'rgb(121, 134, 203)'
]

const colour = function(index,colourIndex,group){
	if ( group ){
		index = colourIndex
	}
	return colourSet[index % colourSet.length]
}

const MIN_EVENT_WIDTH = 3



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
				subCatIndex = subCatIndex % colourSet.length	
			}
			event.colour = colourSet[subCatIndex]

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


const getMonth = function(id){
	return MONTHS_IN_YEAR[id-1]
}

// const convertHyperlinks = function(text){
// 	// https://www.kodingmadesimple.com/2017/11/convert-url-text-to-clickable-link-javascript.html
// 	// Look for https|ftp|file's
// 	const pattern1 = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig
// 	const str1 = text.replace(pattern1, '<a target="_blank" href="$1">$1</a>')
// 	// Look for www's
// 	const pattern2 =/(^|[^\/])(www\.[\S]+(\b|$))/gim
// 	const str2 = str1.replace(pattern2, '$1<a target="_blank" href="http://$2">$2</a>')
// 	return str2
// }


const categorise = function (series,events){

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
	return {groups, seriesSubCats, eventsSubCats}
}

const processDataset = function(dataset){

	// collate events and series
	let events = [...dataset.events]
	let series = [...dataset.series]
	let xAxis = initAxis(dataset)

	let xUnit = ''
	if ( events.length > 0 ){
		// Any events - always date
		xUnit = 'date'
	} else if ( series.length > 0 ){
		// Choose any one - all have to be same
		xUnit = series[0].xUnit
	}
	xAxis.xUnit = xUnit

	const {groups, seriesSubCats, eventsSubCats} = categorise(series, events)
	// console.warn('seriesSubCats',seriesSubCats)
	// console.warn('eventsSubCats',eventsSubCats)

	let catIndices = []
	series.forEach( (entry,index) => {
		let subCatIndex = index
		if ( entry.subCategory != '' ){
			subCatIndex = catIndices.findIndex( cat => cat==entry.subCategory )
			if ( subCatIndex == -1 ){
				catIndices.push(entry.subCategory)
				subCatIndex = catIndices.length - 1
			}
		}
		entry.colourIndex = subCatIndex % colourSet.length // COLOURS
		entry.symbolIndex = index % SYMBOLS
	})

	groups.forEach( (entry,index) => {
		let subCatIndex = index
		if ( entry.subCategory != '' ){
			subCatIndex = catIndices.findIndex( cat => cat==entry.subCategory)
			if ( subCatIndex == -1 ){
				catIndices.push(entry.subCategory)
				subCatIndex = catIndices.length - 1
			}
		}
		entry.colourIndex = subCatIndex % colourSet.length // COLOURS
		entry.symbolIndex = index % SYMBOLS
	})
	// console.warn('series and groups',series,groups)

	// @todo Not sure this is going to be used?
	const range = {start:dataset.start, end:dataset.end, min:dataset.min, max:dataset.max}

	return {name:dataset.name, xAxis, events, series, groups, seriesSubCats, range, eventsSubCats}
}

const eventDates = function(event){
	// debugger
	let html = ''
	if ( event.start != '-' ){
		html += Graph.formatDate(event.startDate)
	}
	if ( event.end ) {
		if ( event.end == '-' ){
			html += ' - '
		} else {
			html += ` - ${Graph.formatDate(event.endDate)}`
		}
	}
	html = `(${html})`
	return html
}


const getBooleanFromString = function( str ){
	if ( str === undefined ){
		return false
	}
	return str === 'true'
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

const isTouchSupported = function() {
    const msTouchEnabled = window.navigator.msMaxTouchPoints
    const generalTouchEnabled = "ontouchstart" in document.createElement("div")
 
    if (msTouchEnabled || generalTouchEnabled) {
        return true
    }
    return false
}


const excelToDate = function( excelDate ){
	
	let date = excelDate.replace(/(\d+?) (.+?) (.{2,4}), (\d{1,2}):(\d{2}?)/gmi, (match, dd, mmm, yyyy, hh, mm)=>{

		// Thsi should be how to create a new Date object but cannot find something that works on Chrome and Safari
		// https://stackoverflow.com/questions/4310953/invalid-date-in-safari
		const dateString = `${mmm} ${dd}, ${yyyy} ${hh}:${mm}`
		// console.log('dateString',dateString)
		// const newDate = new Date(dateString)
		// console.log('new date',newDate)
		return dateString
	})
	return date

	// let date = excelDate.replace(/(\d+?) (.+?) (.{2,4}), (\d{1,2}):(\d{2}?)/gmi,'$2 $3, $1 $4:$5:00')
	// console.log('modified date',date)
	// return new Date(date)
}

const toPrecision = function( num, digits ){
	return parseFloat( num.toPrecision(digits) )
}

const Graph = {
	processDataset,
	getMonth,
	formatNumber,
	formatYear,
	formatDate,
	eventDates,
	processEvents,
	processSeries,
	labelAxis,
	getBooleanFromString,
	debounce,
	isTouchSupported,
	excelToDate,
	toPrecision,
	colour,
	COLOUR_INACTIVE: 'rgb(189, 189, 189)', // Material grey 400
	MIN_BOX_WIDTH: 80,
	CANVAS_PADDING_LEFT: 20,
	CANVAS_PADDING_RIGHT: 20,
	NAV_BREAK: 600
}


export default Graph