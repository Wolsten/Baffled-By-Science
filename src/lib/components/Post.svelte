<script>

    export let post

    let image = `/images/${post.meta.image}`.replace('.','-thumb.')
    let date = new Date(post.meta.date)

    console.log('post',post)
    
</script>


<article>
    <a href="{post.path}">
        <img src="{image}" alt="" />
        <header>
            <h2>{post.meta.title}</h2>
            <p>Published {date.toLocaleDateString()}</p>
        </header>
        <div class="body">
            <p>{post.meta.summary}</p>
        </div>
    </a>
</article>


<style>

    article {
        padding:0;
        /* margin-top:1rem; */
        height: var(--size-post-height);
        /* outline: 2px outset transparent;
        outline-offset: 1px; */
        max-width: 400px;
        flex-grow:2;
        /* grid-column-start: span 1;
        grid-column-end: auto; */
        /* Vertical down gradient starting at 10% from top and ending at bottom */
        /* background-image: linear-gradient( 180deg,  rgba(0,0,0,0) 10%,rgba(0,0,0,0.7) 100%); */
        /* Vertical down gradient starting at 60% from top and ending at bottom */
        background-image: linear-gradient( 180deg,  
            rgba(0,0,0,0.7) 0%, 
            rgba(0,0,0,0.2) 20%, 
            rgba(0,0,0,0) 20%, 
            rgba(0,0,0,0.5) 60%
        );
        
    }

    @media (max-width:600px){
        article{
            max-width: 100%;
        }
    }

    article:hover {
        /* background-image: linear-gradient(180deg,rgba(0,0,0,0) 10%,rgba(0,0,0,0.9) 100%); */
        /* background-image: linear-gradient( 180deg,  rgba(0,0,0,0.5) 5%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.9) 100%); */
        background-image: linear-gradient( 180deg,  
            rgba(0,0,0,0.6) 0%, 
            rgba(0,0,0,0.2) 20%, 
            rgba(0,0,0,0) 20%, 
            rgba(0,0,0,0.6) 60%
        );

        /* outline-color: var(--colour-link-hover); */
    }

    header, .body {
        padding:0 1rem;
    }

    header h2 {
        margin: 0.5rem 0 0 0;
    }

    header p {
        margin:0;
        font-size: 0.9rem;
        line-height: 1.2rem;
        color: var(--colour-post-date);
    }

    a {
        position:relative;
        display:flex;
        justify-content: space-between;
        flex-direction: column;
        text-decoration: none;
        height:100%;
        overflow:hidden;
    }

    a img {
        position:absolute;
        z-index:-1;
        object-fit:cover;
        height:100%;
        width:100%;
        transition: all ease-in-out 300ms;
    }

    h2, p {
        color:var(--colour-post);
    }

    article:hover img {
        transform: scale(110%,110%);
    }

    article:hover header h2,
    article:hover header p {
        color:var(--colour-post-date-hover);
    }
</style>