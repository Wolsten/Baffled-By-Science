<script>

    import { page } from '$app/stores'

    export let title = "Baffled by Science"
    export let description = "For anyone frustrated by what we read and hear in the media about science and technology and the way it is translated into policy by government."
    export let image = '/images/jr-korpa-fi5FPDZ6tns-unsplash.jpg'

    // console.log('page', $page)

    let url = $page.url.href
    let origin = $page.url.origin


</script>



<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description}>
    <meta name="author" content="Steve Davison" />
    <meta name="robots" content="follow"/>
    <!-- Favicons https://favicon.io/favicon-converter/-->
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <!-- Open graph meta data. Test with:
         https://developers.facebook.com/tools/debug/ -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={origin+image} />
    <!-- Twitter card data. Validator: 
         https://cards-dev.twitter.com/validator -->
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content={url} />
    <meta name="twitter:title" content={title}  />
    <meta name="twitter:description" content={description}  />
    <meta name="twitter:image" content={origin+image} />
</svelte:head>
