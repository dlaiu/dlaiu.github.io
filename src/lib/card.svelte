<script>
    export let title = "project name"
    export let summary = "summary"
    export let img_path = "endemic-thumb-2.png"
    export let link = "#"
    // export let width = "full"
    export let tools = []; // Array of tools used
</script>

<a href={link} target="_blank" class="card flex-shrink-0 md:w-1/4 bg-white shadow-lg rounded-lg overflow-hidden block hover:bg-gray-100 transition duration-300">
    <img class="w-full max-h-85" src={img_path} alt="thumbnail for project done">
    <div class="p-4">
        <h2 class="text-xl font-semibold mb-2">{title}</h2>
        <p class="text-gray-700 text-sm mb-2">{summary}</p>
         <!-- Tools section -->
         {#if tools.length > 0}
         <div class="flex flex-wrap gap-2 mt-4">
             {#each tools as tool}
                 <span class="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full shadow-sm">
                     {tool}
                 </span>
             {/each}
         </div>
     {/if}
    </div>
</a>

