<script>
  // Define an array of navigation items
  const navItems = [
      { href: '#About', label: 'About Me' },
      { href: '#experiences', label: 'Experiences' },
      { href: '#skills', label: 'Skills' },
      { href: '#contact', label: 'Contact Information' }
  ];

  
  let activeLink = 'About';

  function setActive(link) {
      activeLink = link;
  }
</script>

<main>
<div>
  <nav>
    <h1>My <span>Website</span></h1>
    <ul>
      {#each navItems as item}
        <li class:active={activeLink === item.href}>
          <a 
            href={item.href}
            
            on:click={() => setActive(item.href)}
          >
            {item.label}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</div>
</main>

<style>
  main{
    position: fixed;
    width: 100%;
  }
  span {
    color: hsl(275, 40%, 54%);
    font-family: sans-serif;
    font-weight: 800;
  }
  div {
    margin: 0;
  }
  nav {
    display: flex;
    margin: 0;
    background-color: hsl(0, 0%, 9%);
    color: white;
  }
  h1 {
    font-weight: 800;
    font-family: "Times New Roman", Times, serif;
    font-size: 1.2em;
    margin-left: 2em;
  }
  ul {
    display: flex;
    margin-left: auto;
    margin-right: 2em;
    list-style: none;
  }
  li {
    margin-left: 2em;
    font-size: 1.3em;
  }
  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    color: blueviolet;
    transition: 0.5s;
  }

  .active{
    font-weight: 500;
    background-color: rgb(113, 0, 206);
    border-radius: 5px;
    line-height: 1px;
    padding-top: 3px;
  }
</style>
