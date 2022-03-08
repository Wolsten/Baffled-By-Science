<script>

    import HeaderImage from '$lib/components/HeaderImage.svelte'
    import MailChimp from '$lib/components/MailChimp.svelte'

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

    <p>Sign up using MailChimp to receive notifications about new content added to this site. I won't send these out more than once a week and you can opt out at any time. When you sign up you will receive an email for you to confirm your email address.</p>

    <MailChimp />
    
</div>
