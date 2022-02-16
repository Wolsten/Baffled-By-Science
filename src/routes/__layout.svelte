<script>
    import { page } from '$app/stores'
    import { onMount, afterUpdate } from 'svelte'

    import '$lib/styles/app.css'
    import Navigator from '$lib/components/Navigator.svelte'
    import { windowWidth, mobile, desktop } from '$lib/stores.js'
    import Utils from '$lib/Utils.js'

    let path = ''
    let nav = {}

    $: $desktop = $windowWidth >= Utils.NAV_BREAK
    $: $mobile = !$desktop

    onMount(()=>{
        path = $page.url.pathname
        $windowWidth = window.innerWidth
        // console.log('onMount path',path)
    })

    afterUpdate(()=>{
        path = $page.url.pathname
        // console.log('afterUpdate path',path)
    })

    function handleResize(){
        // console.log(window.innerWidth)
        $windowWidth = window.innerWidth
    }

    function resetMenu(){
        // console.log('Resetting menu')
        nav.reset()
    }

</script>

<svelte:window on:resize={handleResize}/>

<div class="container" on:click={resetMenu}>

    <header>

        <span class="logo">
            <a href="/" class:clickable="{path != '/'}">
                <img src="/blog-logo-small.png" alt="logo"> <span>Baffled By Science</span>
            </a>
        </span>

        <Navigator {path} {nav}/>

    </header>

    <main >
        <slot/>
    </main>

</div>


<style>

    .container {
        position:relative;
        display:flex;
        flex-direction: column;
        align-items: center;
        height:100vh;
    }

    header {
        display:flex;
        justify-content: space-between;
        align-items: center;
        width:100%;
        padding:1rem;
    }

    span.logo {
        flex-shrink:3;
        flex-grow:1;
        padding:0;
        margin:0;
        max-width: 80%;
        position:relative;
    }

    span.logo a {
        font-size:1.6rem;
        font-weight: bold;
        text-transform: uppercase;
        color: var(--colour-font-titles);
        text-decoration: none;
        cursor:default;
    }

    span.logo a {
        display:flex;
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
        padding-bottom: 4rem;
        width:100%;
    }

</style>


