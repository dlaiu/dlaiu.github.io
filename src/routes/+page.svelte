<script>
    import Card from "../lib/card.svelte";
    import Caret from "../lib/blinkingCaret.svelte";
</script>

<div class="snap-y snap-mandatory">
    <section id="hero" class="container mx-auto flex flex-col justify-center min-h-screen snap-always snap-center relative">
        <div class="flex flex-row">
            <h1 class="text-7xl md:text-9xl"> >Hello World.</h1>
    
            <Caret class="p-4"/>
    
            <div class="text-lg p-6 ml-5">
                <p>My name is <a href="https://www.linkedin.com/in/darryl-laiu/" target="_blank" class="underline hover:bg-blue-500 cursor-pointer transition duration-300">Darryl Laiu.</a></p>
                <p>I'm a multimedia journalist.</p>
                <p>I'm currently studying <a href="https://journalism.columbia.edu/ms-data-journalism" target="_blank" class="underline hover:bg-blue-300 cursor-pointer transition duration-300">Data Journalism at Columbia Journalism School.</a></p>
                <p>I used to make videos for <a href="https://mothership.sg" target="_blank" class="underline hover:bg-orange-400 cursor-pointer transition duration-300">Mothership.sg.</a></p>
            </div>
        </div>
        <div class="contacts grid grid-flow-col auto-cols-max gap-4">
            <a href="mailto:darryllaiu@gmail.com">
                <img src="email.png" alt="" class="size-9">
            </a>
            <h1 class="text-3xl">|</h1>
            <a href="https://www.instagram.com/darryllaiu/" target="_blank">
                <img src="instagram.png" alt="" class="size-8">
            </a>
            <h1 class="text-3xl">|</h1>
            <a href="https://www.linkedin.com/in/darryl-laiu/" target="_blank">
                <img src="linkedin.png" alt="" class="size-7">
            </a> 
        </div>
        
        <div id="navigation-arrow" class="self-center absolute bottom-0 mb-12 animate-bounce">
            <a href="#projects">
                <svg class="w-14 h-14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </a>
        </div>
          
    
    </section>
    
    
    <section id="projects" class="container mx-auto flex flex-col min-h-screen snap-always snap-center">
        <h1 class="text-7xl pt-6 pb-8 md:text-9xl"> >Projects</h1>
    
        <h2 class="text-3xl font-semibold py-4 mx-24"> ~ Data Stories</h2>
    
        <div class="data-stories flex flex-nowrap gap-5 mx-24 overflow-x-scroll">
            <Card width="1/4" title="Here's how much your neighbours are selling their flat for" img_path="highest-hdb-price.png" summary="An interactive summary of where some of the most expensive HDBs are in Singapore." link="https://dlaiu.github.io/latest-highest-hdb-resale-price/" />
        </div>
    
        <h2 class="text-3xl font-semibold pt-6 pb-4 mx-24"> ~ Videos</h2>
    
        <div class="videos flex flex-nowrap gap-5 mx-24 overflow-x-scroll">
            <Card width="1/4" title="Why the Russia-Ukraine war isn't ending soon" img_path="ukraine-thumb.png" summary="Is the war even near a conclusion? How do wars even end? We speak to an expert to find out." link="https://www.youtube.com/watch?v=MMdG73HUYpU&list=PLpFwA1oP_ZZBPEay4Dybken9Rz6owzhd3&index=3"/>
            <Card width="1/4" title="Straight to the Point with George Yeo" img_path="george-yeo-thumb.jpg" summary="I sat down with the former Minister for Foreign Affairs to talk about the Singaporean Identity, SAP schools, and his role in CECA." link="https://www.youtube.com/watch?v=UibCFxEfAwQ&list=PLpFwA1oP_ZZBPEay4Dybken9Rz6owzhd3&index=6"/>
            <Card width="1/4" title="Why is TikTok so addictive?" img_path="WIITY1.jpg" summary="STOP. Are you scrolling on social media right now and can't stop? Well, it's not entirely your fault." link="https://www.youtube.com/watch?v=zKVdTcY9Yxw"/>
            <Card width="1/4" title="How does one become the Prime Minister of Singapore?" img_path="PM_thumb.png" summary="We look at how past Prime Ministers were chosen." link="https://www.youtube.com/watch?v=4ii5AILzsEw"/>
            <Card width="1/4" title="Is Singapore becoming too expensive to live in?" img_path="inflation-thumb.jpg" summary="You've probably noticed by now that almost everything seems to be getting more expensive lately. Why?" link="https://www.youtube.com/watch?v=4ii5AILzsEw"/>
            <Card width="1/4" title="Why do Muslim women choose to wear the tudung?" img_path="muis-tudung-thumb-3.png" summary="We talk to 3 Muslim people about why they choose to wear the headscarf." link="https://www.youtube.com/watch?v=l_MGGk1-ab4"/>
            <Card width="1/4" title="Why Singapore is not ready for an endemic Covid-19" img_path="endemic-thumb-2.png" summary="At the cusp of opening up, Singaporeans were still arguing that we shouldn't. Why?" link="https://www.youtube.com/watch?v=AC709_eYJmM" />
        </div>
    
        <h2 class="text-3xl font-semibold pt-6 pb-4 mx-24"> ~ Articles</h2>
    
        <div class="articles grid grid-cols-4 gap-5 mx-24">
            <Card title="3 first time S'pore Olympians on why Tokyo Games might also be their last" img_path="olympians-cover.png" summary="Singapore's Olympians, unfiltered." link="https://mothership.sg/2021/08/singapore-first-time-olympians-retiring/"/>
            <Card title="Cancelling & cancel culture: Are they relevant to us in S’pore & why should we care?" img_path="cancel-culture-explained-2.png" summary="Cancelling and cancel culture have been hot topics of conversation recently. We look into their history, criticisms, and why understanding them concerns us." link="https://mothership.sg/2020/08/cancel-culture-explainer/" />
            <Card title="Minimum wage vs Progressive Wage Model: What's the difference?" img_path="minwage-cover.png" summary="Amidst all the debate online, we look at the key differences between the Progressive Wage Model and the minimum wage." link="https://mothership.sg/2020/07/minimum-wage-progressive-wage-model-differences/"/>
            <Card title="Key questions asked by MPs on police access to TraceTogether data for serious offences" img_path="TT-cover.png" summary="Some the questions raised include the longevity of TraceTogether data, and instances where the data have been used." link="https://mothership.sg/2021/01/questions-trace-together-data/" />
        </div>
    
    </section>
</div>




<style>

</style>