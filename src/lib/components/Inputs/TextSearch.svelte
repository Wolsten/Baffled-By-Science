<script>

    import { createEventDispatcher } from 'svelte'

    import { mobile } from '$lib/stores.js'

    const dispatch = createEventDispatcher()

    export let placeholder = ''
    export let search = ''


</script>



<div class="holder" class:mobile={$mobile}>

    <input type="text" bind:value={search} {placeholder} 
           on:keyup={()=>dispatch('search')}/>

    <div class="reset" disabled={search==''}
        on:click={()=>{
            search = ''
            dispatch('clear')
        }}
    >
        X
    </div>

</div>



<style>
    
    div.holder {
        position:relative;
    }

    div.holder.mobile {
        flex-basis:100;
        flex-grow:1;
    }

    input {
        padding:var(--size-input-padding);
        border:1px solid var(--colour-input-border);
        border-radius:var(--size-input-border-radius);
        font-size:1rem;
        width:100%;
    }

    div.reset {
        display: flex;
        align-items:center;
        justify-content: center;
        position: absolute;

        width:1.2rem;
        height:1.2rem;
        border:1px solid transparent;
        border-radius:50%;
        color:transparent;

        text-align: center;
        margin: 0;
        top:0.3rem;
        right:0.5rem;
        font-size: 0.8rem !important;
    }

    div.reset:not([disabled=true]){
        color: var(--colour-font);
    }

    div.reset:not([disabled=true]):hover {
        cursor: pointer;
        background-color:var(--colour-toggle-hover);
        color:white;
    }

</style>