<script>
    import "../../app.css";
</script>

<header>
    <!-- <h1 class="font-extrabold">This is a header</h1> -->
    <!-- <nav>
        <a href="#projects" class="text-xl flex justify-end">Projects</a>
    </nav> -->
</header>

<main>
    <slot />
</main>

<footer>
    <div class="p-10"></div>
</footer>

<style>
    main, header, footer {
        /* background-color: #FAF9F6; */
        background-color:oldlace;
    }
</style>