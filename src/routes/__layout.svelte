<script>
    import { page } from '$app/stores'
    import { onMount, afterUpdate } from 'svelte'

    import '$lib/styles/app.css'
    import Navigator from '$lib/components/Navigator.svelte'
    import { windowWidth, mobile, desktop } from '$lib/stores.js'
    import Utils from '$lib/Utils.js'

    let path = ''
    let nav = {}
    let main
    let date = new Date()


    onMount(()=>{
        path = $page.url.pathname
        handleResize()
        processHeadingsAndAnchors()
    })

    afterUpdate(()=>{
        path = $page.url.pathname
        // console.log('afterUpdate path',path)
    })

    function processHeadingsAndAnchors(){
        const headings = document.querySelectorAll('main h1, main h2, main h3')
        headings.forEach( h => {
            const id = h.innerText
                .replaceAll(' ','-')
                .replaceAll("'",'')
                .replaceAll('(','')
                .replaceAll(')','')
                .toLowerCase()
            h.id = id
        })
        const anchors = document.querySelectorAll('main a')
        anchors.forEach( a => {
            // console.log('Found link', a.href)
            // @todo - need to check not an off page link, or to another website
            if ( (a.href.includes('localhost') || a.href.includes(Utils.SITE)) && a.href.includes('#') ){
                a.addEventListener( 'click', handleHashNav)
            } else {
                a.target = "_blank"
            }
        })
    }

    function handleHashNav(event){
        event.preventDefault()
        event.stopPropagation()
        const id = new URL(event.target.href).hash.substring(1)
        const target = document.getElementById(id)
        target.scrollIntoView({behavior: "smooth"})
        target.classList.add('scrolled-into-view')
        setTimeout( () => target.classList.add('show'), 1000)
        console.log(target)
    }

    function handleResize(){
        $windowWidth = main.clientWidth
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

<main on:click={resetMenu} bind:this={main}>
    <slot/>
</main>

<footer>

    <p><a href="/copyright" title="Open copyright statement">&#169; Copyright {date.getFullYear()}</a></p>

    <p><a href="/credits" title="Credits for all sources of information, images and videos">Credits</a></p>

</footer>


<style>

    main {
        position:relative;
        display:flex;
        flex-direction: column;
        align-items: center;
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
        /* padding-bottom: 4rem; */
        width:100%;
        z-index: 1;
    }


    footer {
        width:100%;
        display:flex;
        left:0;
        bottom:0;
        z-index: 2;
        justify-content: space-between;
        padding:0 1.4rem 0 1.4rem;
        background-color: var(--colour-menu-active);
        /* border: 1px solid red; */
    }

    footer a,
    footer a:visited {
        text-decoration: none;
        color:var(--colour-background);
    }

    footer a:hover {
        color:var(--colour-yellow);
    }

    :global( .scrolled-into-view ){
        position:relative;
    }

    :global( .scrolled-into-view:before ){
        content:'\1F449';
        position: absolute;
        left:-10rem;
        opacity:0;
        transition: all ease-in-out 600ms;
    }

    :global(.scrolled-into-view.show:before){
        opacity:1;
        left:-2rem;
    }

</style>


