<!-- SectionWrapper.svelte -->
<script>
    export let title = "";
    export let id = "";
    export let icon = "";
</script>

<section id={id}>
    
    <h2><i class={icon}></i>  {title}</h2>
    <slot></slot>
</section>

<style>
    section {
        padding: 1rem;
        margin-bottom: 0;
        border: 1px solid #ccc;
        border-radius: 8px;
        background-color: #f9f9f9;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        height: 25em;
    }
    h2 {
        margin-bottom: 1rem;
        font-size: 1.5rem;
        color: #370044;
    }
</style>
