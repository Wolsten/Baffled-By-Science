<script>

    import HeaderImage from '$lib/components/HeaderImage.svelte'
    // import MailChimp from '$lib/components/MailChimp.svelte'

</script>

<HeaderImage 
    title='Contact Baffled by Science' 
    image='/images/neonbrand-2c9ffiPlD9Q-unsplash-thumb.jpg'
    imageCredit='Photo by <a href="https://unsplash.com/@neonbrand?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">NeONBRAND</a> on <a href="https://unsplash.com/s/photos/email?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
/>

<div class="page-container">

    <h1>Contact me</h1>
    
    <p>If you would like to be kept up to date with posts on this website or have suggestions for corrections or improvements please email me at: <a href="mailto:steve@baffledbyscience.com">steve@baffledbyscience.com</a>.</p>

    <h2>Follow me on Twitter</h2>

    <p>You can also follow me on Twitter <a href='https://twitter.com/baffledbysci'>@BaffledBySci</a></p>

    <h2>Sign up for email notifications</h2>

    <p>Sign up to our mailing list receive notifications about new content added to this site. I won't send these out more than once a week and you can opt out at any time. Simply click the <strong>Subscribe</strong> link below to send me an email but don't forget to include your full name in the body of the email.</p>
    
    <p><a class="subscribe" href="mailto:steve@brewforukraine.uk?subject=Subscribe&body=%0DPlease%20subscribe%20me%20to%20your%20mailing%20list%0D%0DMy%20full%20name%20is: "><span>&#128516</span> Subscribe to our mailing list</a></p>

    <p>If you want to unsubscribe at any time, simply click the <strong>Unsubscribe</strong> link and send me a blank email ... but of course free free to add any comments if you feel the need to explain why you are leaving!</p>

    <p><a class="subscribe" href="mailto:steve@brewforukraine.uk?subject=Unsubscribe"><span>&#128545 </span>Unsubscribe from our mailing list</a></p>


    <!-- <MailChimp /> -->
    
</div>


<style>
    a.subscribe {
        display:inline-block;
        background-color: var(--colour-menu-active);
        color: white;
        border-radius: 0.5rem;
        padding:0.6rem;
        display:flex;
        align-items: center;
    }

    a.subscribe:hover {
        background-color: var(--colour-menu-hover);
        color: var(--colour-menu-active);
    }

    a span {
        font-size: 2rem;
        margin-right: 0.5rem;
    }
</style>