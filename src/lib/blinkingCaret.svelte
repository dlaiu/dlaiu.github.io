<script>
    let blink = true;
</script>

<style>
    @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
    }

    .animate-blink {
        animation: blink 1s step-end infinite;
    }
</style>

<span class="bg-black w-1 h-auto md:h-24 {blink ? 'animate-blink' : ''}"></span>

