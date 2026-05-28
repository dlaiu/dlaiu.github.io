<style>
    @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
    }

    .caret {
        display: inline-block;
        width: 4px;
        height: 4.5rem;
        background-color: #000;
        animation: blink 1s step-end infinite;
        vertical-align: middle;
        margin-left: 4px;
    }
</style>

<span class="caret"></span>
