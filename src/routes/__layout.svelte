<!-- __layout.svelte -->
<script context="module">
    export const load = ({ url }) => {
      const currentRoute = url.pathname
      console.log({currentRoute})
  
      return {
        props: {
          currentRoute
        }
      }
    }
</script>


<script>
    import { slide } from 'svelte/transition'
    import Header from '$lib/components/Header.svelte'
    import '$lib/styles/style.css'
    import '$lib/styles/app.css'

    export let currentRoute
</script>
  

<Header />


{#key currentRoute}
  <main transition:slide>

    <slot />
  </main>
{/key}

<footer>Hello, I'm the footer.</footer>