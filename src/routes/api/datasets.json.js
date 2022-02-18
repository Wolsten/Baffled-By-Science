// datasets.json.js

export const get = async () => {

	// Pull back all files recursively from the data folder
	const allDataFiles = import.meta.glob('../../../static/data/*.json')
	const iterableDataFiles = Object.entries(allDataFiles)

    console.log('allDataFiles',allDataFiles)
    console.log('iterableDataFiles',iterableDataFiles)

	let allData = await Promise.all(
		iterableDataFiles.map(async ([path]) => { 
			// strip off the last five .json chars to obtain the path
			const stripped = path.slice(21, -5)
			return { path:stripped }
		})
	)

    // Remove credits and collections
	// @todo stop generating collections
    allData = allData.filter( item => item.path!='collections' && item.path!='credits' )

	console.log('allData',allData)

	const sortedData = allData.sort((a, b) => {
        if ( a.path > b.path ){
            return -1
        } else if ( b.path > a.path ){
		    return 1
        }
        return 0
	})

	return {
		body: sortedData
	}
}