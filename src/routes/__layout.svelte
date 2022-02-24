<script>
    import { page } from '$app/stores'
    import { onMount, afterUpdate } from 'svelte'

    import '$lib/styles/app.css'
    import Navigator from '$lib/components/Navigator.svelte'
    import { windowWidth, mobile, desktop } from '$lib/stores.js'
    import Utils from '$lib/Utils.js'

    let path = ''
    let nav = {}
    let container
    let date = new Date()


    onMount(()=>{
        path = $page.url.pathname
        handleResize()
    })

    afterUpdate(()=>{
        path = $page.url.pathname
        // console.log('afterUpdate path',path)
    })

    function handleResize(){
        $windowWidth = container.clientWidth
        $mobile = $windowWidth < Utils.NAV_BREAK
        $desktop = !$mobile
        // console.log('$windowWidth',$windowWidth)
        // console.log('$desktop',$desktop)
        // console.log('$mobile',$mobile)
    }

    function resetMenu(){
        // console.log('Resetting menu')
        nav.reset()
    }

</script>

<svelte:window on:resize={handleResize}/>

<!-- <div class="container" on:click={resetMenu} bind:this={container}> -->

<header>

    <span class="logo">
        <a href="/" class:clickable="{path != '/'}">
            <img src="/blog-logo-50x50.png" alt="logo"> <span>Baffled By Science</span>
        </a>
    </span>

    <Navigator {path} {nav}/>

</header>

<main on:click={resetMenu} bind:this={container}>
    <slot/>
</main>

<footer>

    <p>&#169; Copyright {date.getFullYear()}</p>

    <p><a href="/contact">Contact Me / Sign up</a></p>

</footer>


<style>

    main {
    /* .container { */
        position:relative;
        display:flex;
        flex-direction: column;
        align-items: center;
        /* height:100vh; */
        width:100%;
    }

    header {
        position:sticky;
        top:0;
        left:0;
        display:flex;
        justify-content: space-between;
        align-items: center;
        width:100%;
        min-height:70px;
        padding:1rem;
        background-color: var(--colour-background);
        z-index: 2;
    }

    span.logo {
        display:inline-block;
        flex-shrink:1;
        flex-grow:1;
        padding:0;
        margin:0;
        max-width: 80%;
        position:relative;
        z-index: 2;
    }

    span.logo a {
        display:flex;
        font-size:1.6rem;
        font-weight: bold;
        text-transform: uppercase;
        color: var(--colour-meu);
        text-decoration: none;
        cursor:default;
        align-items: center;
    }

    span.logo a.clickable {
        cursor:pointer;
    }

    img {
        margin-right:0.8rem;
        height:50px;
        width:50px;
    }

    main {
        position:relative;
        padding-bottom: 4rem;
        width:100%;
        z-index: 1;
    }


    footer {
        width:100%;
        position:sticky;
        display:flex;
        left:0;
        bottom:0;
        z-index: 2;
        justify-content: space-between;
        padding:1rem;
        background-color: var(--colour-background);
    }

</style>


