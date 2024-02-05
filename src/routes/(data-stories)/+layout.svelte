<script>

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
    <div class="footer">
        <div class="content">
            <p>For this story, I collated the shop listings from 70 malls in Singapore. You can check out my dataset and my code <a href="https://github.com/dlaiu/generic-malls-singapore">here</a> Check out my other work <a href="https://dlaiu.github.io">here</a>.
        </div>
    </div>
</footer>

<style>
    main, header{
        /* background-color: #FAF9F6; */
        /* background-color:oldlace; */
    }
    .content {
        max-width: 850px;
        margin: auto;
    }

    .footer {
        background: #f4f4f4;
        text-align: center;
        font-size: 0.8em;
        margin-top: 4em;
        padding: 4em 0;
    }
</style>