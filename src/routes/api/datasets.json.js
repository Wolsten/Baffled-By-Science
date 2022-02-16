// datasets.json.js

export const get = async () => {

	// Pull back all files recursively from the data folder
	const allDataFiles = import.meta.glob('/data/*.json')
	const iterableDataFiles = Object.entries(allDataFiles)

    console.log('allDataFiles',allDataFiles)
    console.log('iterableDataFiles',iterableDataFiles)

	let allData = await Promise.all(
		iterableDataFiles.map(async ([path]) => { 
			// strip off the last five .json chars to obtain the path
			const stripped = path.slice(2, -5)
			return { path:stripped }
		})
	)

    // @todo Removing credits but perhaps generate this separately?
    allData = allData.filter( item => item.slug.includes('/data/credits/') == false )

	const sortedData = allData.sort((a, b) => {
        if ( a.name > b.name ){
            return -1
        } else if ( b.name > a.name ){
		    return 1
        }
        return 0
	})

	return {
		body: sortedData
	}
}