<script>
    export let title = "project name"
    export let summary = "summary"
    export let img_path = "endemic-thumb-2.png"
    export let link = "#"
    export let tools = [];
    export let expanded = null;
    export let index;
    export let description_extended = '';

    function handleClick(e) {
        expanded = expanded === index ? null : index;
    }

    function tagClass(tool) {
        if (tool === 'Hearst') return 'tag-hearst';
        if (tool === 'BBC') return 'tag-bbc';
        if (tool === 'Mothership') return 'tag-mothership';
        return 'tag-default';
    }

    $: isExpanded = expanded === index;
    $: isHidden = expanded !== null && expanded !== index;
    $: isRightCard  = index === 1 || index === 3;
    $: isBottomCard = index === 2 || index === 3;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="card" class:expanded={isExpanded} class:hidden={isHidden} class:text-first={isExpanded && isBottomCard} on:click={handleClick}>
    <div class:card-row={isExpanded} class:img-right={isExpanded && isRightCard}>
        <div class="card-image">
            <img src={img_path} alt="thumbnail for {title}" />
        </div>
        <div class="card-body">
            <h2 class="card-title" class:expanded={isExpanded}>{title}</h2>
            <div class="summary-compacted" class:hidden={isExpanded}>
                <slot name="summary">
                    <p class="card-summary">{summary}</p>
                </slot>
            </div>
            {#if tools.length > 0}
                <div class="card-tags" class:expanded={isExpanded}>
                    {#each tools as tool}
                        <span class="tag {tagClass(tool)}">{tool}</span>
                    {/each}
                </div>
            {/if}
        </div>
    </div>
    <div class="summary-expanded" class:hidden={!isExpanded}>
        {#if description_extended}
            {@html description_extended}
        {:else}
            <slot name="summary">
                <p class="card-summary">{summary}</p>
            </slot>
        {/if}
    </div>
</div>

<style lang="less">
    .hidden {
        display: none;
    }

    .card-row {
        display: flex;
        flex-direction: row;

        &.img-right {
            flex-direction: row-reverse;

            .card-title {
                text-align: right;
            }
            .card-tags {
                justify-content: flex-end;
            }
        }
    }

    @keyframes card-expand {
        from { transform: scale(0.95); opacity: 0.8; }
        to   { transform: scale(1);    opacity: 1;   }
    }

    .card {
        background-color: var(--color-card-bg);
        border: 3px solid var(--color-border);
        cursor: pointer;
        display: flex;
        flex-direction: column;
        transition: box-shadow 0.2s ease;

        &:hover {
            box-shadow: 4px 4px 0 var(--color-border);
        }

        &.hidden {
            display: none;
        }

        &.text-first {
            flex-direction: column-reverse;
        }

        &.expanded {
            grid-column: 1 / -1;
            grid-row: 1 / -1;
            height: auto;
            z-index: 1;
            animation: card-expand 0.2s ease-out;

            .card-image {
                width: 50%;
                height: 280px;
                padding: 1.5rem;
            }

            .card-body {
                width: 50%;
                justify-content: center;
            }
        }
    }

    .card-image {
        width: 100%;
        height: 220px;
        overflow: hidden;
        padding: 0.5rem;
        border-radius: 2px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            outline: 1px solid var(--color-border);
        }
    }

    .card-body {
        padding: 1rem;
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .card-title {
        font-family: var(--font-serif);
        font-weight: 600;
        font-size: 1.5rem;
        margin: 0 0 0.5rem 0;

        &.expanded {
            font-size: 1.5rem;
        }
    }

    .card-summary {
        font-family: var(--font-serif);
        font-size: 0.9rem;
        color: var(--color-muted);
        margin: 0 0 0.75rem 0;
        flex: 1;
    }

    .summary-compacted {
        &.hidden {
            display: none;
        }
    }

    .summary-expanded {
        margin: 1rem;
    }

    .card-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
        margin-top: auto;
        padding-top: 0.75rem;

        &.expanded {
            margin-top: 0;
            padding-top: 0;
        }

        @media (max-width: 720px) {
         padding-top: 0;
        }
    }

    .tag {
        font-family: var(--font-sans);
        font-weight:300;
        font-size: 0.7rem;
        padding: 2px 8px;
        border: 1px solid var(--color-border);

        &-hearst { background-color: var(--color-tag-hearst); }
        &-bbc { background-color: #000; color: #fff; border-color: #000; }
        &-mothership { background-color: #ed4545; color: #fff; border-color: #ed4545; }
        &-default { background-color: var(--color-card-bg); }
    }

    @media (max-width: 720px) {
        .summary-compacted {
            display: none;
        }

        .card.hidden {
            display: flex;
        }

        .card.expanded {
            grid-column: unset;
            grid-row: unset;

            .card-image {
                width: 100%;
                height: 220px;
                padding: 0.5rem;
            }

            .card-body {
                width: 100%;
                justify-content: flex-start;
            }
        }

        .card-row {
            flex-direction: column;
        }

        .card-row.img-right {
            flex-direction: column;

            .card-title {
                text-align: left;
            }

            .card-tags {
                justify-content: flex-start;
            }
        }

        .card.text-first {
            flex-direction: column;
        }
    }
</style>
