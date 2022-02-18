// posts.json.js

export const get = async () => {

	// Pull back all files recursively from the blog folder
	const allPostFiles = import.meta.glob('../blog/**/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)

    // console.log('allPostFiles',allPostFiles)
    // console.log('iterablePostFiles',iterablePostFiles)

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver()

			// console.log('meta',metadata)
			
			// strip off the 1st two dots and the last three .md chars
			// to obtain the path
			const postPath = path.slice(2, -3)

			return {
				meta: metadata,
				path: postPath,
			}
		})
	)

	const sortedPosts = allPosts.sort((a, b) => {
		return new Date(b.meta.date) - new Date(a.meta.date)
	})

	return {
		body: sortedPosts
	}
}