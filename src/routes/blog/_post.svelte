<script>
    export let title
    export let date
    export let categories
</script>

<h1>{title}</h1>

<p>Published: {date}</p>

<slot />