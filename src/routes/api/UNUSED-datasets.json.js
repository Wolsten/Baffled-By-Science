// datasets.json.js
import collections from '../../../static/data/collections.json'

// console.log('collections',collections)

export const get = async () => {
	return {
		body:collections
	}
}