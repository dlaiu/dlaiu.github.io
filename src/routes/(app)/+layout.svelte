<script>
    import "../../app.css";
</script>

<header></header>

<main>
    <slot />
</main>

<footer></footer>

<style>
    main, header, footer {
        background-color: var(--color-bg);
    }
</style>
