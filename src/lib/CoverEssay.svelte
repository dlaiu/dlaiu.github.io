<script>
    import { createEventDispatcher, onMount } from 'svelte';
    import { browser } from '$app/environment';
    import RecordAndCompare from '../components/RecordAndCompare.svelte';

    const dispatch = createEventDispatcher();

    let activeStep = 0;
    let stepsEl;

    onMount(() => {
        const stepEls = Array.from(stepsEl.querySelectorAll('[data-step]'));

        function onScroll() {
            const center = window.innerHeight / 2;
            for (let i = stepEls.length - 1; i >= 0; i--) {
                const top = stepEls[i].getBoundingClientRect().top;
                if (top <= center) {
                    activeStep = i;
                    return;
                }
            }
            activeStep = 0;
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();

        return () => window.removeEventListener('scroll', onScroll);
    });
</script>

<section class="essay">

    <div class="button-container">
        <button class="back-link" on:click={() => dispatch('back')}>← Portfolio</button>
    </div>

    <!-- ── Static section ── -->
    <div class="grid3">

        <div class="col-side"></div>
        <div class="col-center">
            <h2 class="essay-heading">Cover Essay</h2>
            <p>Dear reader,</p>
            <p>If you made it here, hello! If you're a hiring manager, thank you for clicking in!</p>
            <p>Cover letters are often short and limited and a portfolio without context is often limiting. I decided to write this partially as an "about me" but also to describe the history of my work and put some of it in context!</p>
            <p>My name is Darryl and I'm currently the data visualization fellow at the DevHub at Hearst Newspapers.</p>
            <p>If I had to capture the work that I do, and like to do, in a sentence, it would be this: I enjoy telling stories and I enjoy thinking about how to tell them.</p>
            <p>In the past two years as a data and graphics journalist, I've been focused on trying to tell stories through data, and through interactive and visual media.</p>
            <p>One of the projects that I'm most proud of is a story that tries to explain what defines a <a href="https://dlaiu.github.io/tiktok-accent/" target="_blank">"TikTok accent"</a>. For that story, I scraped 300 TikTok videos and taught myself linguistic analysis to show how "uptalk" is a distinct feature in some TikTokers' accents. The analysis for this project earned me an honorable mention for <a href="https://journalism.columbia.edu/news/journalism-day-2025" target="_blank">the Brown/Tow Award for Excellence in Computational Journalism.</a></p>
            <p>Test it out here:</p>
        </div>
        <div class="col-side"></div>

        <!-- Breakout pair spanning all columns -->
        <div class="col-breakout">
            <div class="breakout">
                <!-- <div class="placeholder placeholder-breakout">[ media ]</div> -->
                 {#if browser}
                     <RecordAndCompare anyaSrc="/record-compare/audio/7007951477993966853_trimmed.mp3" />
                 {/if}
            </div>
        </div>

    </div>

    <!-- ── Scrollytelling section ── -->
    <div class="scrolly-grid">

        <!-- Left sticky panel -->
        <div class="sticky-col">
            <div class="sticky-inner">
                {#if activeStep >= 2 && activeStep <= 3}
                    <!-- TODO: step 3 left media -->
                    <!-- <div class="placeholder placeholder-tall">[ step 3 left ]</div> -->
                     <img src="/climate-finance-final.gif" alt="climate finance explainer gif" style="width:100%; border:1px solid var(--color-border)" />
                {:else if activeStep >= 7 && activeStep <= 8}
                    <!-- TODO: step 7 left media -->
                    <!-- <div class="placeholder placeholder-tall">[ step 7 left ]</div> -->
                        <img src="/one-take.gif" alt="one take gif" style="width:75%; border:1px solid var(--color-border)" />
                {/if}
            </div>
        </div>

        <!-- Scrolling steps -->
        <div class="steps" bind:this={stepsEl}>
                <div class="step" data-step="0">
                    <p>Recently, at Hearst Newspapers, I built a dashboard that lets readers and reporters compare how six variables from the American Community Survey have changed over the last 15 years in different neighborhoods.</p>
                    <p>I generally also enjoy pursuing quirky stories.</p>
                </div>

                <div class="step" data-step="1">
                    <p>While pursuing my master's degree at Columbia Journalism School, I built interactive stories on <a href="https://dlaiu.github.io/john-oliver-narrative/" target="_blank"><em>how John Oliver does good journalism while making you laugh</em></a>, and <a href="https://dlaiu.github.io/bigfoot/" target="_blank"><em>what we know about bigfoot.</em></a></p>
                </div>

                <div class="step" data-step="2">
                    <p>Before I was a data journalist, I was a video journalist.</p>
                    <p>My most recent video journalism role was at BBC Studios, where I produced explainers as part of their features team.</p>
                </div>

                <div class="step" data-step="3">
                    <p>Some of my favourite stories were those that let me combine my data reporting and video journalism skills, such as <a href="https://www.bbc.com/reel/video/p0k4y1h6/watch" target="_blank"><em>who should pick up the bill for climate damage</em></a>, and just <a href="https://www.bbc.com/reel/video/p0l7gtft/watch" target="_blank"><em>how dangerous is space debris?</em></a></p>
                </div>

                <div class="step" data-step="4">
                    <p>But my favourite story so far has to be the one about the most New York move in New York. Watch it here:</p>
                </div>

                <div class="step" data-step="5">
                    <video controls>
                        <source src="/snow-nyc-final-compressed.mp4" type="video/mp4" />
                    </video>
                </div>

                <div class="step" data-step="6">
                    <p>I have to attribute these video production skills to my other "alma mater", Mothership.</p>
                    <p>From them, I learned not just technical video production skills, but also how to think outside the constraints of traditional journalism to find the best way to tell stories to reach audiences.</p>
                </div>

                <div class="step" data-step="7">
                    <p>My last role at Mothership was as the head of the explainers team. I helped supervise, at one point, a team of four producers and two interns, to produce video explainers for YouTube, Instagram, and TikTok.</p>
                </div>

                <div class="step" data-step="8">
                    <p>I revamped the entire Mothership Explains series and as a team we experimented creating new series and formats such as <a href="https://www.youtube.com/watch?v=4JXn829xUaU&list=PLaK-ppnKd6Zuyj33fqLYhFXQ57SCajrQG&index=21" target="_blank"><em>Singapore Explained</em></a>, <a href="https://www.youtube.com/watch?v=zKVdTcY9Yxw" target="_blank"><em>What If I Told You</em></a>, and <a href="https://www.instagram.com/reels/CqjtRoKvwQt/" target="_blank"><em>One Take</em></a>.</p>
                </div>

                <div class="step" data-step="9">
                    <p>My first foray into data journalism was here. My co-lead and I co-produced a video on why all malls in Singapore feel the same. For that video, I analysed data gathered from mall directories in Singapore to come up with an index on how "generic" a mall is.</p>
                </div>

                <div class="step" data-step="10">
                    <iframe class="breakout" src="https://www.youtube.com/embed/Sk0CPkw3gLE?si=5ZIRRpYKCVUt_g4J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                <div class="step" data-step="11">
                    <p>And at Hearst, I combined these skills together. I've been thinking about translating interactives to social video more easily. I've built a tool that helps users make screen recordings more quickly. And I've been playing with Remotion as a potential way to turn code into video more quickly.</p>
                    <p>If you've made it this far, thank you for reading! As someone who has moved through different types of journalism and also someone who is interested in a little bit of everything, I often find it difficult to synthesize my work and put it in personal context. I hope that this essay on my little corner of the internet helps to do that.</p>
                    <p>Thank you again for reading!</p>
                </div>
            </div>

        <!-- Right sticky panel -->
        <div class="sticky-col">
            <div class="sticky-inner">
                {#if activeStep >= 2 && activeStep <= 3}
                    <!-- TODO: step 3 right media -->
                    <!-- <div class="placeholder placeholder-tall">[ step 3 right ]</div> -->
                     <img src="/space-junk.gif" alt="space debris explainer gif" style="width:100%; border:1px solid var(--color-border)" />
                {:else if activeStep >= 7 && activeStep <= 8}
                    <!-- TODO: step 7 right media -->
                    <!-- <div class="placeholder placeholder-tall">[ step 7 right ]</div> -->
                        <img src="/WIITY.gif" alt="WIITY explainer gif" style="width:100%; border:1px solid var(--color-border)" />
                {/if}
            </div>
        </div>

    </div>


    <div class="button-container">
        <button class="back-link" on:click={() => dispatch('back')}>← Portfolio</button>
    </div>

</section>

<style lang="less">
    .essay {
        max-width: 1280px;
        margin: 0 auto;
        // padding: 2rem 2rem 6rem;
    }

    .back-link {
        background: none;
        border: none;
        cursor: pointer;
        font-family: var(--font-serif);
        font-size: 1.25rem;
        // color: var(--color-muted);
        padding: 0;
        margin-bottom: 3rem;
        display: block;
        // text-decoration: underline;
        text-underline-offset: 3px;

        &:hover { color: var(--color-text); }
    }

    /* ── Shared 3-column grid ── */
    .grid3 {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 2rem;
        margin-bottom: 2rem;
    }

    .col-side {
        padding: 0.5rem 0;
    }

    .col-center {
        padding: 0.5rem 0;

        p {
            font-family: var(--font-serif);
            font-size: 1.15rem;
            line-height: 1.75;
            color: var(--color-text);
            margin: 0 0 1.25rem 0;
        }
    }

    .essay-heading {
        font-family: var(--font-serif);
        font-size: 2.25rem;
        font-weight: 400;
        margin: 0 0 2rem 0;
    }

    .col-breakout {
        grid-column: 1 / -1;
        padding: 2rem 0;
        display: flex;
        justify-content: center;
    }

    // .breakout-pair {
    //     display: grid;
    //     grid-template-columns: 1fr 1fr;
    //     gap: 2rem;
    // }

    .breakout {
        width: 100%;
        border: 1px solid var(--color-border);

        @media (min-width: 720px) {
            grid-template-columnes: 1fr;
        }
    }

    .placeholder-breakout {
        min-height: 320px;
    }

    /* ── Placeholder ── */
    .placeholder {
        width: 100%;
        min-height: 240px;
        background: var(--color-border);
        opacity: 0.2;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: var(--font-sans);
        font-size: 0.75rem;
        letter-spacing: 0.1em;
        color: var(--color-text);
    }

    .placeholder-tall {
        min-height: 280px;
    }

    /* ── Scrolly ── */
    .scrolly-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 2rem;
        overflow-x: clip;
    }

    .sticky-col {
        /* stretches to full height of .steps so sticky works throughout */
    }

    .sticky-inner {
        position: sticky;
        top: 50%;
        transform: translateY(-50%);
        padding: 0.5rem 0;
    }

    .steps {
        padding: 2rem 0 30vh;
    }

    .step video,
    .step .breakout {
        display: block;
        margin-left: calc(-100% - 2rem);
        margin-right: calc(-100% - 2rem);
        width: calc(300% + 4rem);
        aspect-ratio: 16 / 9;
        border: 1px solid var(--color-border);
    }

    .step {
        padding: 1.5rem 0;
        // border-top: 1px solid var(--color-border);

        p {
            font-family: var(--font-serif);
            font-size: 1.15rem;
            line-height: 1.75;
            color: var(--color-text);
            margin: 0 0 1.25rem 0;

            &:last-child { margin-bottom: 0; }
        }
    }

    /* ── Responsive ── */
    @media (max-width: 720px) {
        .grid3 {
            grid-template-columns: 1fr;

            .col-side { display: none; }
            .col-breakout { padding: 1rem 0; }
        }

        .breakout-pair {
            grid-template-columns: 1fr;
        }

        .scrolly-grid {
            grid-template-columns: 1fr;

            .sticky-col { display: none; }

            .step video {
                margin-left: 0;
                margin-right: 0;
                width: 100%;
            }
        }

        .steps {
            padding: 8vh 0;
        }
    }
</style>
