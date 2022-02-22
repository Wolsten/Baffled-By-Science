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

<div class="container" on:click={resetMenu} bind:this={container}>

    <header>

        <span class="logo">
            <a href="/" class:clickable="{path != '/'}">
                <img src="/blog-logo-50x50.png" alt="logo"> <span>Baffled By Science</span>
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
        width:100%;
    }

    header {
        display:flex;
        justify-content: space-between;
        align-items: center;
        width:100%;
        min-height:70px;
        padding:1rem;
    }

    span.logo {
        display:inline-block;
        flex-shrink:1;
        flex-grow:1;
        padding:0;
        margin:0;
        max-width: 80%;
        position:relative;
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
        padding-bottom: 4rem;
        width:100%;
    }

</style>


