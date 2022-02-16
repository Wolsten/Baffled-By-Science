<script context="module">

    import Utils from '$lib/Utils.js';

    export const load = async ({ fetch, params }) => {
        return {
            props: {
                data: await Utils.fetchDataset( fetch, params.explore)
            }
        }
    }

</script>


<script>

    import Timeline from '$lib/components/Timeline.svelte'
    import HeaderImage from '$lib/components/HeaderImage.svelte'

    export let data

    const userSettings = {
        subCats: [...data.seriesSubCats, ...data.eventsSubCats ]
    }

    const settings = Utils.initSettings(userSettings, data.start,data.end,[])

    // console.log('data',data)

</script>



<HeaderImage title="Exploring {data.name}" description=""
			 overlayTitle={true}
			 image='/images/nicholas-cappello-Wb63zqJ5gnE-unsplash.jpg'
			 imageCredit='Photo by <a href="https://unsplash.com/@bash__profile?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nicholas Cappello</a> on <a href="https://unsplash.com/s/photos/charts?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'/>


<Timeline {data} {settings}/>