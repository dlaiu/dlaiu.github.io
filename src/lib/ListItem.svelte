<script>
    export let title = "";
    export let description = "";
    export let img_path = "";
    export let link = "#";
    export let tags = [];

    function tagClass(tag) {
        if (tag === 'Hearst') return 'tag-hearst';
        if (tag === 'BBC') return 'tag-bbc';
        if (tag === 'Mothership') return 'tag-mothership';
        return 'tag-default';
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="list-item" on:click={() => window.open(link, '_blank')}>
    {#if img_path}
        <div class="list-thumb">
            <img src={img_path} alt="thumbnail for {title}" />
        </div>
    {/if}
    <div class="list-content">
        <h3 class="list-title">{title}</h3>
        {#if description}
            <p class="list-description">{description}</p>
        {/if}
        {#if tags.length > 0}
            <div class="list-tags">
                {#each tags as tag}
                    <span class="tag {tagClass(tag)}">{tag}</span>
                {/each}
            </div>
        {/if}
    </div>
</div>

<style lang="less">
    .list-item {
        display: flex;
        flex-direction: row;
        gap: 1.5rem;
        padding: 1.25rem 0;
        border-bottom: 1px solid var(--color-border);
        cursor: pointer;
        align-items: flex-start;
    }

    .list-item:hover .list-title {
        text-decoration: underline;
    }

    .list-thumb {
        flex-shrink: 0;
        width: 180px;
        height: 100px;
        overflow: hidden;
        border: 1px solid var(--color-border);
    }

    .list-thumb img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .list-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
    }

    .list-title {
        font-family: var(--font-serif);
        font-weight: 600;
        font-size: 1.25rem;
        margin: 0;
    }

    .list-description {
        font-family: var(--font-serif);
        font-size: 1rem;
        color: var(--color-muted);
        margin: 0;
        line-height: 1.4;
    }

    .list-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
        margin-top: 0.25rem;
    }

    .tag {
        font-family: var(--font-sans);
        font-weight: 300;
        font-size: 0.7rem;
        padding: 2px 8px;
        border: 1px solid var(--color-border);
    }

    .tag-hearst {
        background-color: var(--color-tag-hearst);
    }

    .tag-bbc {
        background-color: #000;
        color: #fff;
        border-color: #000;
    }

    .tag-mothership {
        background-color: #ed4545;
        color: #fff;
        border-color: #ed4545;
    }

    .tag-default {
        background-color: var(--color-card-bg, #f3f1f1);
    }

    @media (max-width: 600px) {
        .list-thumb {
            width: 120px;
            height: 70px;
            display:none;
        }
    }
</style>
