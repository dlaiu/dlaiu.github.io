<script>
    import Ai2html from "../../../lib/Ai2html.svelte";
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Pixelify+Sans:wght@400..700&display=swap');


    .footer {
        background: #f4f4f4;
        text-align: center;
        font-size: 0.8em;
        margin-top: 4em;
        padding: 4em 0;
        color: black;
    }

    body {
        margin: 0;
        font-size: 20px;
        font-family: Inter, 'Times New Roman', Times, serif;
        color: white;   
        text-rendering: optimizeLegibility;
        /* background-image: "/pixels-grey.png"; */
        background-color: #273044;
    }

    .graph-label{
        text-align: center;
        /* padding: 2em 0; */
    }

    .graph-label h3{
        text-align: center;
        /* padding: 2em 0; */
        font-weight: 900;
        margin: 0;
    }

    .graph-label p {
        text-align: center;
        /* padding: 2em 0; */
        margin-top: 5px;
        margin-bottom: 7px;
    }

    .content {
        max-width: 650px;
        margin: auto;
    }

    .header {
        /* padding: 3em 0 1em 0; */
    }

    a {
        color: #f05349;
    }

    h1 {
        font-family: 'Lora', Georgia, serif;
        font-weight: bold;
        font-size: 2.5em;
        line-height: 1.1;
    }

    .subhead {
        /* font-family: Inter, Georgia, italic; */
        font: 800;
    }

    .content p {
        line-height: 1.6;
        margin: 0;
        padding-bottom: 1.2em;
        text-align: justify;
        text-justify: inter-word;
    }

    .row-container {
      display: flex;
      flex-direction: row;
      width: 90vw;
      gap: 2em;
      margin: 20px;
      /* align itself to the centre of the view port */
    margin:auto;
    }
    
    .column-container {
      flex-grow: 1;
    }
    
    @media (max-width: 650px) {
      .row-container {
        flex-direction: column;
      }


    }

    iframe {
        padding-bottom: 1.2em;
    }

    /* code {
        font-family: 'Courier New', monospace;
        background: #fff880;
    } */

    #img2 {
        display: none;
    }

    .banner h1 {
        position: absolute;
        top: 35%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 3em;
        text-align: center;
        font-family: 'Lora', Georgia, serif;
        font-weight: bold;
        font-family: pixelify sans;
        text-shadow: 2px 2px 4px #000000;
    }

    /* margin on mobile */
    @media (max-width: 640px) {
        body {
            font-size: 18px;
        }
        .content {
            padding-left: 0.5em;
            padding-right: 0.5em;
        }

        #img1 {
            display: none;
        }
        /* Show mobile image on mobile devices */
        #img2 {
            display: block;
            max-height: 100vh;
        }

        .banner h1 {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 2.5em;
            text-align: center;
            font-family: 'Lora', Georgia, serif;
            font-weight: bold;
            font-family: pixelify sans;
            text-shadow: 2px 2px 4px #000000;
        }

        .banner img {
            max-width: 100%;
            margin: 0;
            padding: 0;
            /* opacity: 0.8; */
            /* background-image: (rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)); */
        }
        

    }

    .banner img {
        max-width: 100%;
        margin: 0;
        padding: 0;
        /* opacity: 0.8; */
        /* background-image: (rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)); */
    }

    img {
        max-width: 100%;
        height: auto;
    }

    #chart-1-label h3 {
        /* text-align: center; */
        font-weight: 900;
        margin: 0;
    }

    #chart-1-label p {
        /* text-align: center; */
        margin: 0;
        padding-bottom: 3px;
    }
    </style>

<body>
    <div class="banner">
        <img src="/banner-photo-dark.png" id="img1" alt="">
        <img src="/banner-photo-mobile.png" id="img2" alt="">
        <div>
            <h1>The Value of a Game Review</h1>
        </div>
    </div>
    <div class="content">
        <div class="header">
            <!-- <h1>The Value of a Game Review</h1> -->
            <h3 class="subhead" style="margin-top:20px"><em><strong>A closer look at IGN's 7s</strong>.</em></h3>
        </div>
        <div class="byline">
            <strong><p>By <a href="https://dlaiu.github.io">Darryl Laiu</a></p></strong>
        </div>

        <p>By no means do I consider myself a serious gamer. </p>
            
        <p>I start a new game maybe once or twice a year. The only series I make sure to buy when it comes out is Pokemon. And for the past 5 years, I have not played past 50% completion.</p>

        <p>And yet, YouTube still recommends me gaming videos. Particularly from IGN.</p>

        <p>Founded on Sep. 29, 1996, IGN is one of the biggest and most influential gaming content companies in the industry.</p>

        <p>But over the past few years, IGN has developed a reputation for themselves. On Reddit and other gaming forums, it's become a recurring meme that IGN constantly gives 7s to all their game reviews.</p>

        <!-- Insert screenshot -->

        <p>This stereotype was so pertinent that it actually prompted IGN to explain themselves.</p>

        <p>But is it true? Does IGN actually give 7s to most games? I pulled more than 13,000 reviews from their website to check if it was true.</p>

        <p>This was what I found out:</p>

        <div id="chart-1-label">
            <h3>IGN's scores are indeed centred around 7</h3>
            <p><em>Based off more than 13,000 of their reviews</em></p>
        </div>

        <div id='chart-1'>
            <Ai2html name="ignHistogram" description="An example chart to show off the framework"/>
        </div>

        <p>Seems like the rumours were true.</p>

        <p>Sebastián Cataldo, who considers himself a casual gamer, said that the 7s hurt the reputation of IGN, but attributes that more to repeated change of their scoring scale.</p>
            
        <p>"IGN used to be a very respected site 15-20 years ago and today some people consider it to be a joke," said Cataldo. "Different opinions are completely fine, but changing your scale, multiple times, can definitely hurt you in the long run."</p>

        <p>Here's another interesting finding: </p>

        <div>
            <h3>IGN's average scores across the years</h3>
            <!-- <p><em>Based off more than 13,000 of their reviews</em></p> -->
        </div>

        <div id='chart-3'>
            <Ai2html name="ignYearly" description="An example chart to show off the framework"/>
            <!-- <Ai2html name="metacriticYearly" description="An example chart to show off the framework"/> -->
        </div>

        <p>There average score of IGN reviews has been on the rise.</p>

        <p>In an email response, Director of Reviews at IGN Dan Stapleton explained that this trend can be attributed to IGN being more selective about what they are reviewing and focusing on what the audience cares about.</p>

        <p>"[These games] are inherently going to score better, as a group, than things most people aren't interested in," wrote Stapleton.</p>

        <p>Stapleton gives the same reason for the 7s in his defence piece.</p>

        <p> "Simply put: if something doesn’t at least look like it might be great you probably weren’t paying attention to it in the first place," wrote Stapleton. </p>

        <p>"But if it does look great enough to pique your interest, it usually ends up being at least okay. And especially in the case of big-budget games, publishers have to be feeling pretty confident about them being reasonably well received for them to make it to the point of being released at all," added Stapleton."</p>
  
        <p>There might be truth to this because IGN isn't the only gaming website to have this distribution of scores.</p>

    </div>

    <div class="graph-label">
        <h3>Both metascores and user scores from Metacritic centre around "7" too</h3>  
        <p><em>The distributions all skew right</em></p>
    </div>

    <div id="chart-2" class="row-container">
        <div class="column-container">
            <Ai2html name="ignHistogram" description="An example chart to show off the framework"/>
        </div>
        <div class="column-container">
            <Ai2html name="metascoreHistogram" description="An example chart to show off the framework"/>
        </div>
        <div class="column-container">
            <Ai2html name="userscoreHistogram" description="An example chart to show off the framework"/>
        </div>
    </div>

    <div class="content">

        <p>Metacritic is a website that aggregates reviews across different websites and reviewers. They also have a platform to allow users to review games and give a score, and both Metascores and user scores skew right.</p>

        <p>Is it just human nature then to rate things a 7? From the simple poll IGN put on their post, most people view 7 as an average score.</p>

        <!-- Insert ign poll -->
        <img src="/IGN-poll.png" alt="A poll done by IGN about what people consider an 'average' score. 35.6% responded 7, 26.2% responded 6, and 33.4% responded 5.">
        <p style="font-size:x-small">Source: Poll on IGN's website</p>

        <p>But what <em>actually</em> is the purpose of a review? Does the score even matter to users?</p>

        <p>Deepit, who says he plays more than five hours a day, says that he reads and watches gaming reviews to  keep up with the discourse of how people feel about newly released games. </p>

        <p>Vincent J, who considers himself a casual gamer said: "The process of going through the reviews makes me think a bit more deeply at a game, as opposed to "this game looks cool".</p>

        <p>Cataldo says that reviews help him decide how to spend his money. </p>
            
        <p>"Games are more expensive than ever, so when it's something new, I check the scores to see if I should get it, wait until it goes on sale, or pass," said Cataldo.</p>

    </div>

    <footer>
        <div class="footer">
            <div class="content">
                <p>You can check out my dataset and my code <a href="https://github.com/dlaiu/ign-game-reviews-distribution">here</a>. Check out my other work <a href="https://dlaiu.github.io">here</a>.
            </div>
        </div>
    </footer>
    

</body>



