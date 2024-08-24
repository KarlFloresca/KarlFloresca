<script>
  export let label;
  export let pic = "";
  export let description;
  export let link;
</script>

<main>
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <div class="Image">
    <a href={link}><img src={pic} alt="project Image" /></a>
  </div>
  <div class="label">{label}</div>
  <div class="fill">. . .</div>
  <div class="description">{description}</div>
</main>

<style>
  main {
    background-color: hsl(0, 0%, 15%);
    width: 390px;
    height: auto;
    margin: 5px;
    border-radius: 10px;
    margin: auto auto;
  }
  img {
    width: 390px;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .label {
    font-size: 1.5em;
    font-family: "Open Sans";
    text-align: center;
    padding: 3px;
    margin-bottom: 0;
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
  }
  .description {
    text-indent: 40px;
    visibility: hidden;
    opacity: 0;
    margin-top: 0;
    margin-left: 30px;
    margin-right: 30px;
    text-align: justify;
    font-size: 18px;
    max-height: 0;
    color: whitesmoke;
    transition:
      opacity 0.5s ease,
      max-height 0.5s ease;
  }
  main:hover .description {
    max-height: 600px;
    opacity: 1;
    visibility: visible;
    display: block;
    margin-bottom: 2em;
    margin-top: 2em;
  }

  .fill {
    visibility: 1;
    opacity: 1;
    font-weight: 1000;
    font-size: 3em;
    color: white;
    text-align: center;
    margin-bottom: 10px;
    transition: display 0.5s ease opacity 1s ease font-weight 1s ease;
  }

  main:hover .fill {
    display: none;
    opacity: 0;
    font-weight: 0;
    margin-bottom: 0;
  }
</style>
