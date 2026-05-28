<script>
    import { tick } from 'svelte';
    import Card from "../../lib/Card.svelte";
    import Caret from "../../lib/blinkingCaret.svelte";
    import ListItem from "../../lib/ListItem.svelte";
    import CoverEssay from "../../lib/CoverEssay.svelte";

    export let data;
    $: ({ listItems, selectedItems } = data);

    const filters = ["All", "Personal Favs", "Data", "Video", "Writing"];
    let activeFilter = "Personal Favs";

    $: filtered = activeFilter && activeFilter !== "All"
        ? listItems.filter(item => item.categories.includes(activeFilter))
        : listItems;

    let expandedIndex = null;
    let showEssay = false;

    function prevCard() {
        if (expandedIndex > 0) expandedIndex -= 1;
    }
    function nextCard() {
        if (expandedIndex < selectedItems.length - 1) expandedIndex += 1;
    }

    async function toggleEssay() {
        showEssay = !showEssay;
        if (showEssay) {
            await tick();
            document.getElementById('essay-section')?.scrollIntoView({ behavior: 'smooth' });
        }
    }
</script>

<div class="page">

    <!-- ── Hero ── -->
    <section id="hero" class="hero">
    <div class="hero-row">
        <div class="hero-left">
            <div class="hero-title">
                <h1>&gt; Hello World.</h1>
                <Caret />
            </div>
        </div>
        <div class="hero-right">
            <p class="bio">
                My name is <a href="https://www.linkedin.com/in/darryl-laiu/" target="_blank">Darryl Laiu.</a>
                I'm a multimedia journalist.
                I'm currently at the <a href="https://www.sfchronicle.com/projects/about-the-devhub-hearst-newspapers/" target="_blank">DevHub at Hearst Newspapers</a> building graphics and analysing data.
            </p>
            <p class="bio">Read my <button class="essay-link-inline" on:click={toggleEssay}>cover essay here.</button></p>
        </div>
    </div>
    <div class="hero-row contacts-row">
        <div class="contacts">
            <a href="mailto:darryllaiu@gmail.com" aria-label="Email">
                <img src="email.png" alt="Email" />
            </a>
            <span class="divider">|</span>
            <a href="https://www.instagram.com/darryllaiu/" target="_blank" aria-label="Instagram">
                <img src="instagram.png" alt="Instagram" />
            </a>
            <span class="divider">|</span>
            <a href="https://www.linkedin.com/in/darryl-laiu/" target="_blank" aria-label="LinkedIn">
                <img src="linkedin.png" alt="LinkedIn" />
            </a>
            <span class="divider">|</span>
            <a href="https://bsky.app/profile/dlaiu.bsky.social" target="_blank" aria-label="Bluesky">
                <svg width="28" height="28" viewBox="0 0 360 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M180 141.964C163.699 110.262 119.308 51.1817 78.0347 22.044C38.4971 -5.86834 23.414 -1.03207 13.526 3.43594C2.08093 8.60755 0 26.1785 0 36.5164C0 46.8542 5.66748 121.272 9.36416 133.694C21.5786 174.738 65.0603 188.607 105.104 184.156C107.151 183.852 109.227 183.572 111.329 183.312C109.267 183.642 107.19 183.924 105.104 184.156C46.4204 192.847 -5.69621 214.233 62.6582 290.33C137.848 368.18 165.705 273.637 180 225.702C194.295 273.637 210.76 364.771 295.995 290.33C360 225.702 313.58 192.85 254.896 184.158C252.81 183.926 250.733 183.645 248.671 183.315C250.773 183.574 252.849 183.855 254.896 184.158C294.94 188.61 338.421 174.74 350.636 133.697C354.333 121.275 360 46.8568 360 36.519C360 26.1811 357.919 8.61012 346.474 3.43851C336.586 -1.02949 321.503 -5.86576 281.965 22.0466C240.692 51.1843 196.301 110.262 180 141.964Z" fill="black"/>
                </svg>
            </a>
            <span class="divider">|</span>
            <a href="https://github.com/dlaiu" target="_blank" aria-label="GitHub">
                <img src="github.png" alt="GitHub" />
            </a>
        </div>
    </div>
    <div class="hero-row arrow-row">
        <div class="arrow-stack">
            <img src="/arrow-down.svg" alt="Scroll down" width="32" height="32"/>
        </div>
    </div>

    </section>

    <div class="essay-title">
        <button class="essay-link" on:click={() => showEssay = !showEssay}>
            {showEssay ? '' : 'Cover Essay'}
        </button>
    </div>

    {#if showEssay}
        <div id="essay-section">
            <CoverEssay on:back={() => showEssay = false} />
        </div>
    {:else}

    <!-- ── Selected Work ── -->
    <section id="selected-work" class="section">
        <h2 class="section-heading">Selected work</h2>
        <div class="card-grid-wrapper">
        {#if expandedIndex > 0}
            <button class="nav-arrow" on:click={prevCard} aria-label="Previous">
                <img src="/left-arrow.svg" alt="" width="24" height="24" />
            </button>
        {/if}
        <div class="card-grid">
            {#each selectedItems as item, i}
                     <Card
                        bind:expanded={expandedIndex}
                        index={i}
                        title={item.title}
                        img_path={item.img_path}
                        link={item.link}
                        tools={item.tags}
                        description_extended={item.description_extended}
                    >
                        <div slot="summary">
                            {item.description}
                        </div>
                    </Card>
            {/each}

        </div>
        {#if expandedIndex !== null && expandedIndex < selectedItems.length - 1}
            <button class="nav-arrow" on:click={nextCard} aria-label="Next">
                <img src="/right-arrow.svg" alt="" width="24" height="24" />
            </button>
        {/if}
        </div>

            <!-- <Card
                bind:expanded={expandedCard}
                title="Why do TikTokers talk differently?"
                img_path="tiktok-thumb.png"
                link="https://dlaiu.github.io/tiktok-accent/"
                tools={["TikTok Scraping", "Python", "Svelte", "D3.js"]}
            >
                <div slot="summary">
                    I scraped and analysed more than 300 videos from TikTok to characterise what the TikTok accent is.
                </div>
            </Card>
            <Card
                bind:expanded={expandedCard}
                title="How development reshaped Connecticut"
                img_path="ct-landuse.jpg"
                link="https://www.ctinsider.com/projects/2025/connecticut-development-before-after-images/"
                tools={["Hearst", "QGIS", "MapLibre", "Python"]}
            >
                <div slot="summary">
                    I helped to translate the analysis for a story on change in land use to other markets.
                </div>
            </Card>
            <Card
                bind:expanded={expandedCard}
                title="TikTok Wrapped"
                img_path="tiktok-wrapped-thumb.jpg"
                link="https://dlaiu.github.io/tiktok-wrapped/"
                tools={["Python", "Svelte", "Cluster Analysis", "Whisper"]}
            >
                <div slot="summary">
                    I downloaded my TikTok watch data, transcribed it, and ran cluster analyses on the transcripts to find patterns in what I watched.
                </div>
            </Card>
            <Card
                bind:expanded={expandedCard}
                title="Grocery Price Dashboard"
                img_path="grocery-dashboard.png"
                link="https://www.sfchronicle.com/projects/grocery-price-tracker/"
                tools={["Hearst", "React", "d3.js"]}
            >
                <div slot="summary">
                    I helped build a dashboard that tracks grocery prices across time, published across six Hearst markets.
                </div>
            </Card> -->
    </section>

    <!-- ── Everything Else ── -->
    <section id="everything-else" class="section">
        <h2 class="section-heading">Everything else</h2>
        <div class="filter-bar">
            {#each filters as f}
                <button
                    class="filter-pill {activeFilter === f ? 'active' : ''}"
                    on:click={() => activeFilter = activeFilter === f ? null : f}
                >
                    {f}
                </button>
            {/each}
        </div>
        <div class="list">
            {#each filtered as item (item.title)}
                <ListItem
                    title={item.title}
                    description={item.description}
                    img_path={item.img_path}
                    link={item.link}
                    tags={item.tags}
                />
            {/each}
        </div>
    </section>

    {/if}

</div>

<style lang="less">
    .page {
        max-width: 1100px;
        margin: 0 auto;
        padding: 0 2rem 4rem;
    }

    /* ── Hero ── */
    .hero {
        display:flex;
        flex-direction: column;
        gap: 3rem;
        align-items: center;
        justify-content: center;
        padding: 5rem 0 4rem;
        height: 100dvh;
        position:relative;
    }
    
    .hero-row {
        display: flex;
        flex-direction: row;
        gap: 3rem;
        width: 100%;
    }

    .hero-left {
        display: flex;
        align-items: center;
    }

    .contacts {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.75rem;
    }

    .contacts-row {
        justify-content: center;
    }

    .arrow-row {
        justify-content: center;
        position: absolute;
        bottom: 4rem;
    }

    .arrow-stack {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.6rem;
    }

    .essay-title {
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;
    }

    .bio .essay-link-inline{
        background: none;
        border: none;
        cursor: pointer;
        font-family: var(--font-serif);
        font-size: 1.4rem;
        color: var(--color-muted);
        // line-height: 1.6;
        padding: 0;
        text-decoration: underline;
        text-underline-offset: 3px;

        &:hover { color: var(--color-text); }
    }

    .essay-link {
        background: none;
        border: none;
        cursor: pointer;
        font-family: var(--font-serif);
        font-weight:600;
        font-size: 2rem;
        // color: var(--color-muted);
        padding: 0;
        text-decoration: underline;
        text-underline-offset: 3px;

        &:hover { color: var(--color-text); }
    }

    .contacts img {
        width: 28px;
        height: 28px;
        object-fit: contain;
        display: block;
    }

    .contacts svg {
        display: block;
    }

    .hero-title {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.25rem;
    }

    .hero-title h1 {
        font-family: var(--font-serif);
        font-size: 4.5rem;
        font-weight: 400;
        margin: 0;
        white-space: nowrap;
    }

    .bio {
        font-family: var(--font-serif);
        font-size: 1.4rem;
        color: var(--color-muted);
        line-height: 1.6;
        margin: 0 0 1.5rem 0;

        @media (max-width: 720px) {
            font-size: 1.1rem;
        }
    }

    .bio a {
        text-decoration: underline;
        transition: background-color 0.15s ease;
    }

    .bio a:hover {
        background-color: var(--color-tag-hearst);
    }

    .divider {
        color: var(--color-muted);
        font-size: 1.5rem;
        line-height: 1;
    }

    /* ── Sections ── */
    .section {
        padding: 2rem 0 3rem;
    }

    .section-heading {
        font-family: var(--font-serif);
        font-size: 2.25rem;
        font-weight: 400;
        margin: 0 0 1.75rem 0;
    }

    /* ── Card Grid ── */
    .card-grid-wrapper {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .card-grid {
        flex: 1;
        display: grid;
        grid-template-columns: 1fr 1fr;
        // grid-template-rows: 400px 400px;
        gap: 1.5rem;
    }

    .nav-arrow {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
        flex-shrink: 0;
        opacity: 0.7;

        &:hover { opacity: 1; }
        img { display: block; }
    }

    /* ── Filter bar ── */
    .filter-bar {
        display: flex;
        flex-wrap: wrap;
        gap: 0.6rem;
        margin-bottom: 0.5rem;
    }

    .filter-pill {
        font-family: var(--font-sans);
        font-size: 0.9rem;
        padding: 0.35rem 1rem;
        background: var(--color-bg);
        border: 2px solid var(--color-border);
        color: var(--color-text);
        cursor: pointer;
        transition: background-color 0.15s ease, color 0.15s ease;
    }

    .filter-pill:hover {
        background-color: var(--color-card-bg);
    }

    .filter-pill.active {
        background-color: var(--color-border);
        color: var(--color-bg);
    }

    /* ── Responsive ── */
    @media (max-width: 720px) {
        .hero {
            grid-template-columns: 1fr;
            padding: 3rem 0 2rem;
            gap: 1.5rem;
        }

        .hero-right {
            text-align: center;
        }

        .hero-row {
            flex-direction: column;
            gap: 1rem;
            align-items: center;
        }

        .hero-title h1 {
            font-size: 3rem;
        }

        .card-grid {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
        }

        .nav-arrow {
            display: none;
        }
    }
</style>
