<script>
    export let itemList = []
</script>

<ul>
    {#each itemList as item}
        <li><i class={item.icon}></i> {item.label}</li>
    {/each}
</ul>

<style>
    li{
        list-style: none;
        font-size: 1.5em;
        line-height: 1.5em;
    }
</style>