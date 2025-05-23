<script>
    import Card from "../../lib/Card.svelte";
    import Caret from "../../lib/blinkingCaret.svelte";
</script>

<div class="snap-y snap-mandatory">
    <section id="hero" class="container mx-auto flex flex-col justify-center min-h-screen relative">
        <div class="flex flex-col md:flex-row">
            <div class="flex flex-row mx-5 justify-center md:justify-start">
                <h1 class="text-6xl font-medium md:text-8xl lg:whitespace-nowrap">>Hello World.</h1>
                <Caret />
            </div>

    
            <div class="items-center md:text-md mx-14 md:ml-5 mt-3 md:mt-0 xl:text-lg">
                <p>My name is <a href="https://www.linkedin.com/in/darryl-laiu/" target="_blank" class="underline hover:bg-blue-500 cursor-pointer transition duration-300">Darryl Laiu.</a></p>
                <p>I'm a multimedia journalist.</p>
                <p>I graduated from the <a href="https://journalism.columbia.edu/ms-data-journalism" target="_blank" class="underline hover:bg-blue-300 cursor-pointer transition duration-300">Data Journalism Program at Columbia Journalism School.</a></p>
                <p>I currently make videos for <a href="https://bbc.com" target="_blank" class="underline hover:bg-white cursor-pointer transition duration-300">BBC.com.</a></p>
            </div>
        </div>
        <div class="contacts grid grid-flow-col auto-cols-max gap-4 justify-center m-5 md:justify-start md:m-0 md:ml-5">
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
            <h1 class="text-3xl">|</h1>
            <a href="https://bsky.app/profile/dlaiu.bsky.social" target="_blank">
                <svg width="35" height="35" viewBox="0 0 360 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M254.896 184.158C252.81 183.926 250.733 183.645 248.671 183.315C250.773 183.574 252.849 183.855 254.896 184.158Z" fill="none" stroke-width="1.5" stroke="currentColor"/>
                    <path d="M180 141.964C163.699 110.262 119.308 51.1817 78.0347 22.044C38.4971 -5.86834 23.414 -1.03207 13.526 3.43594C2.08093 8.60755 0 26.1785 0 36.5164C0 46.8542 5.66748 121.272 9.36416 133.694C21.5786 174.738 65.0603 188.607 105.104 184.156C107.151 183.852 109.227 183.572 111.329 183.312C109.267 183.642 107.19 183.924 105.104 184.156C46.4204 192.847 -5.69621 214.233 62.6582 290.33C137.848 368.18 165.705 273.637 180 225.702C194.295 273.637 210.76 364.771 295.995 290.33C360 225.702 313.58 192.85 254.896 184.158C252.81 183.926 250.733 183.645 248.671 183.315C250.773 183.574 252.849 183.855 254.896 184.158C294.94 188.61 338.421 174.74 350.636 133.697C354.333 121.275 360 46.8568 360 36.519C360 26.1811 357.919 8.61012 346.474 3.43851C336.586 -1.02949 321.503 -5.86576 281.965 22.0466C240.692 51.1843 196.301 110.262 180 141.964Z" fill="black"/>
                    </svg>
            </a>
            <h1 class="text-3xl">|</h1>
            <a href="https://github.com/dlaiu" target="_blank">
                <img src="github.png" alt="" class="size-9">
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
        <h1 class="text-5xl font-semibold pt-6 mx-8 md:pb-8 md:text-7xl"> >Projects</h1>

        <div class="flex flex-col md:flex-row md:text-md mx-14 md:ml-10 mt-3 md:mt-0 md:mb-10 xl:text-lg">
            <blockquote class="border-l-4 border-orange-400 pl-4 text-lg md:text-xl leading-relaxed">
                <p>
                    <b>Some highlights:</b> I did a crash course in computational linguistics to 
                    <a href="https://dlaiu.github.io/tiktok-accent/" target="_blank" class="underline hover:bg-orange-400 cursor-pointer transition duration-300">analyse the "influencer accent"</a>, 
                    <a href="http://localhost:5173/data-stories/ign-game-reviews" target="_blank" class="underline hover:bg-orange-400 cursor-pointer transition duration-300">scraped 13,000 reviews from IGN</a> to find out if they really give an overwhelming number of 7s, and 
                    <a href="https://github.com/dlaiu/bigfoot" target="_blank" class="underline hover:bg-orange-400 cursor-pointer transition duration-300">manually read and categorised</a> 4,000 reports of Bigfoot sightings to find out what he looks like.
                    In a previous and current life as a video and multimedia journalist, I make visual first video explainers on topics like 
                    <a href="https://www.bbc.com/reel/video/p0k4y1h6/who-should-pick-up-the-bill-for-climate-damage-" target="_blank" class="underline hover:bg-orange-400 cursor-pointer transition duration-300">climate finance</a>, 
                    <a href="https://www.bbc.com/reel/video/p0jyrzsg/the-history-of-swing-states-in-the-us" target="_blank" class="underline hover:bg-orange-400 cursor-pointer transition duration-300">the history of swing states in the US </a>, 
                    and <a href="https://www.youtube.com/watch?v=zKVdTcY9Yxw" target="_blank" class="underline hover:bg-orange-400 cursor-pointer transition duration-300">why TikTok is so addictive.</a>
                </p>
            </blockquote>
        </div>
        
    
        <h2 class="text-3xl my-4 md:my-0 md:mb-4 mx-10 md:mx-12"> ~ Data Stories</h2>
    
        <div class="data-stories flex flex-col md:flex-row md:flex-wrap gap-5 mx-10 md:mx-0 md:pl-20">

            <Card title="Why do TikTokers talk differently?" img_path="tiktok-thumb.png" summary="I scraped and analysed more than 300 videos from TikTok to find the pattern." link="https://dlaiu.github.io/tiktok-accent/" tools={['TikTok Scraping', 'Audio analysis (Praat)', 'Svelte', 'Scrollytelling', 'D3.js', 'Huggingface', 'Pandas']}/>

            <Card width="1/4" title="What does Bigfoot look like?" img_path="bigfoot-banner.webp" summary="I went through more than 4,000 reports of bigfoot sightings to learn more." link="https://dlaiu.github.io/bigfoot/" tools={['scrollytelling', 'Datawrapper', 'Qualitative Analysis']} />

            <Card width="1/4" title="The value of a game review" img_path="banner-photo.png" summary="IGN is famous for giving 7s in their reviews. But is it actually true? I scraped about 13,000 of their reviews to find out." link="data-stories/ign-game-reviews" tools={['BeautifulSoup', 'Pandas', 'ggplot', 'Secret APIs', 'ai2html', 'Illustrator']}/>

            <Card title="How John Oliver does good journalism while making you laugh" img_path="john-oliver-thumb.png" summary="I broke down an episode of Last Week Tonight with John Oliver to argue why he actually is doing good journalism." link="https://dlaiu.github.io/john-oliver-narrative/" tools={['d3.js', 'Svelte', 'ai2html', 'Svelte Slides']}/>

            <Card width="1/4" title="When was the best SNL era, objectively" img_path="snl-cast-thumb.png" summary="People say that SNL hasn't been good since [whenever you grew up]. I came up with a metric to end the debate once and for all." link="https://dlaiu.github.io/snl-dream-team" tools={['Playwright','BeautifulSoup', 'Pandas', 'ggplot']}/>

            <Card width="1/4" title="Why do all malls in Singapore feel the same?" img_path="mall-thumb.png" summary="If you've lived in Singapore, you know how important malls are every day life. But do they all have to feel the same? Why??" link="https://dlaiu.github.io/generic-malls-singapore/" tools={['Playwright', 'BeautifulSoup', 'fuzzywuzzy', 'Pandas', 'Datawrapper']}/>

            <Card title="Here's where every WIFI hotspot is in NYC" img_path="wifi-thumb.png" summary="Visualising every NYC Wifi in the city and counting them in each neighborhood." link="https://dlaiu.github.io/nyc-wifi-neighborhoods/" tools={['Mapbox', 'NYC Open Data', "Javascript", "HTML", "CSS"]}/>

            <Card width="1/4" title="Here's how much your neighbours are selling their flat for" img_path="highest-hdb-price.png" summary="My first project! Public housing is the only thing Singaporeans my age ever talk about. Here's a handy tool to check how much they're being sold for now." link="https://dlaiu.github.io/latest-highest-hdb-resale-price/" tools={['APIs', 'geocoding', 'Mapbox']}/>

            
        </div>
        
        <div class="flex flex-row md:mx-24">
            <h2 class="text-3xl pt-6 pb-4 mx-10 md:mx-0"> ~ Videos</h2>
            <button class="hover:bg-neutral-300 hover:bg-opacity-75 text-black p-3 mt-3 h-auto self-center rounded-full md:ml-5">
                <a href="https://www.youtube.com/watch?v=6KTNXOUnqt4&list=PLpFwA1oP_ZZBPEay4Dybken9Rz6owzhd3" target="_blank">
                    <div class="flex flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                          </svg>
                          See more
                    </div>
                </a>
              </button>
              
        </div>
    
        <div class="videos flex flex-col md:flex-row md:flex-wrap gap-5 mx-10 md:mx-0 md:pl-20">
            <Card title="Who should pick up the bill for climate damage?" img_path="climate-finance-yt-thumb.jpg" summary="Many developing countries argue that the world's biggest polluters, and those that have benefited economically from it, have not paid their fair share of climate finance to date.

But what is even considered fair? " link="https://www.bbc.com/reel/video/p0k4y1h6/who-should-pick-up-the-bill-for-climate-damage-" tools={['For BBC', "Final Cut Pro", "DataWrapper", "Illustrator"]}/>
            <Card width="1/4" title="Why the Russia-Ukraine war isn't ending soon" img_path="ukraine-thumb.png" summary="Is the war even near a conclusion? How do wars even end? We speak to an expert to find out." link="https://www.youtube.com/watch?v=MMdG73HUYpU&list=PLpFwA1oP_ZZBPEay4Dybken9Rz6owzhd3&index=3" tools={['For Mothership', "Premiere Pro", "Photoshop", "Filming", "Scripting"]}/>
            <Card width="1/4" title="Straight to the Point with George Yeo" img_path="george-yeo-thumb.jpg" summary="I sat down with the former Minister for Foreign Affairs to talk about the Singaporean Identity, SAP schools, and his role in CECA." link="https://www.youtube.com/watch?v=UibCFxEfAwQ&list=PLpFwA1oP_ZZBPEay4Dybken9Rz6owzhd3&index=6" tools={['For Mothership', "Presenting"]}/>
            <Card width="1/4" title="Why is TikTok so addictive?" img_path="WIITY1.jpg" summary="STOP. Are you scrolling on social media right now and can't stop? Well, it's not entirely your fault." link="https://www.youtube.com/watch?v=zKVdTcY9Yxw" tools={['For Mothership', "Presenting"]}/>
            <Card width="1/4" title="How does one become the Prime Minister of Singapore?" img_path="PM_thumb.png" summary="We look at how past Prime Ministers were chosen." link="https://www.youtube.com/watch?v=4ii5AILzsEw" tools={['For Mothership', "Scripting", "Filming", "Presenting"]}/>
            <Card width="1/4" title="Is Singapore becoming too expensive to live in?" img_path="inflation-thumb.jpg" summary="You've probably noticed by now that almost everything seems to be getting more expensive lately. Why?" link="https://www.youtube.com/watch?v=4ii5AILzsEw" tools={['For Mothership', "Scripting", "Filming"]}/>
            <Card width="1/4" title="Why do Muslim women choose to wear the tudung?" img_path="muis-tudung-thumb-3.png" summary="We talk to 3 Muslim people about why they choose to wear the headscarf." link="https://www.youtube.com/watch?v=l_MGGk1-ab4" tools={['For Mothership', "Premiere Pro", "Photoshop", "Scripting", "Filming"]}/>
            <Card width="1/4" title="Why Singapore is not ready for an endemic Covid-19" img_path="endemic-thumb-2.png" summary="At the cusp of opening up, Singaporeans were still arguing that we shouldn't. Why?" link="https://www.youtube.com/watch?v=AC709_eYJmM" tools={['For Mothership', "Scripting", "Presenting"]}/>
        </div>
    
        <h2 class="text-3xl pt-6 pb-4 mx-10 md:mx-24"> ~ Writing</h2>
    
        <div class="articles flex flex-col md:flex-row md:flex-wrap gap-5 md:mx-0 md:pl-20">
            <Card title="3 first time S'pore Olympians on why Tokyo Games might also be their last" img_path="olympians-cover.png" summary="Singapore's Olympians, unfiltered." link="https://mothership.sg/2021/08/singapore-first-time-olympians-retiring/"/>
            <Card title="Cancelling & cancel culture: Are they relevant to us in S’pore & why should we care?" img_path="cancel-culture-explained-2.png" summary="Cancelling and cancel culture have been hot topics of conversation recently. We look into their history, criticisms, and why understanding them concerns us." link="https://mothership.sg/2020/08/cancel-culture-explainer/" />
            <Card title="Minimum wage vs Progressive Wage Model: What's the difference?" img_path="minwage-cover.png" summary="Amidst all the debate online, we look at the key differences between the Progressive Wage Model and the minimum wage." link="https://mothership.sg/2020/07/minimum-wage-progressive-wage-model-differences/"/>
            <Card title="Key questions asked by MPs on police access to TraceTogether data for serious offences" img_path="TT-cover.png" summary="Some the questions raised include the longevity of TraceTogether data, and instances where the data have been used." link="https://mothership.sg/2021/01/questions-trace-together-data/" />
        </div>
    
    </section>
    
</div>




<style>

</style>