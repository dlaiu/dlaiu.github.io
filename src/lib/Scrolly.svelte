<script>
    import { onMount, onDestroy } from 'svelte';

    export let activeStep = 0;

    let container;
    let observer;

    onMount(() => {
        const steps = container.querySelectorAll('[data-step]');

        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        activeStep = +entry.target.dataset.step;
                    }
                });
            },
            { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
        );

        steps.forEach(step => observer.observe(step));
    });

    onDestroy(() => {
        if (observer) observer.disconnect();
    });
</script>

<div bind:this={container}>
    <slot {activeStep} />
</div>
