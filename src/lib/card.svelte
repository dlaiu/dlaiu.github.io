<script>
    export let title = "project name"
    export let summary = "summary"
    export let img_path = "endemic-thumb-2.png"
    export let link = "#"
    // export let width = "full"
    export let tools = []; // Array of tools used

    function handleClick(e) {
        // Don't navigate if user clicked an inner link
        if (e.target.closest('a')) return;
        window.open(link, '_blank');
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:click={handleClick} class="card flex-shrink-0 md:w-1/4 bg-white shadow-lg rounded-lg overflow-hidden block hover:bg-gray-100 transition duration-300 cursor-pointer">
    <img class="w-full max-h-85" src={img_path} alt="thumbnail for project done">
    <div class="p-4">
        <h2 class="text-xl font-semibold mb-2">{title}</h2>
        <slot name="summary">
            <p class="text-gray-700 text-sm mb-2">{summary}</p>
        </slot>
         <!-- Tools section -->
         {#if tools.length > 0}
         <div class="flex flex-wrap gap-2 mt-4">
             {#each tools as tool}
                 <span class="text-xs {tool === 'Hearst' ? 'bg-[#2d75b9] text-white' : 'bg-gray-200'} text-gray-700 px-2 py-1 rounded-full shadow-sm ">
                     {tool}
                 </span>
             {/each}
         </div>
     {/if}
    </div>
</div>
