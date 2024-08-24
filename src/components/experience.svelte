<script>
  import Projectcard from "./projectcard.svelte";

  let projectOBJ = [
    {
      pic: "assets/Journey.png",
      label: "Journey through prelict",
      link: "https://drive.google.com/drive/folders/19acfA0y4TUYuYtoZL4cOgWcUAdetJ05d?usp=sharing",
      description:
        "Made with JAVA, a simple game that fallows an adventurer running in the lands of prelict gathering artifacts that were lost in history",
    },
    {
      pic: "assets/WebProject.png",
      label: "The Coffee Lounge",
      link: "https://drive.google.com/drive/folders/1_O5122ZfKXV0hv72XM2QD_CCrPBgzlup?usp=sharing",
      description:
        "Utilizing vanila HTML, CSS, and Javascript we Created a website as a requirement for our final project developed alongside my groupmates who mainly handled the logistics",
    },
    {
      pic: "assets/orderSystem.png",
      label: "Ordering System",
      description:
        "Created using visual basic, a system that handles orders for convience, this system was made during my first year in college to expand my knowledge",
      link: "https://drive.google.com/drive/folders/1YAzRKfML25BvX4WzVeH4cUp0Ae03Lc3j?usp=sharing",
    },
  ];
</script>

<main>
  <h3>
    <span>My</span> Experiences
  </h3>
  <div>
    <ul>
      <li>
        I’ve work with the owner of a small coffee Shop to develop a website for
        them for the requirement of my final examination during my first year
        semester.
      </li>
      <br />
      <li>
        Developed many projects including games and systems during my time in
        CNSC some example is a university management system and a bingo game.
      </li>
      <br />
      <li>
        Worked with a little animation project as a request of an acquaintance
        in my Highschool days. I've spent a portion of my highschool life doing
        digital art and even now i still retain some knowledge and used it in a
        midterm project called python the musical, it served as an intro for our
        group.
      </li>
      <br />
      <li>I even had partial training and knowledge of visual basic.</li>
      <br />
      <li>
        Outside of school I’ve been working on learning and immersing myself on
        various frameworks and libraries like this website which is made from
        the sveltekit framework.
      </li>
      <li>
        Lastly during my last year of high-school i was deployed for work
        immersion in my local government unit, i was assigned within the
        Municipal treasurer office, i was mainly tasked with arranging and
        sorting of paper works and encoding.
      </li>
    </ul>
  </div>
</main>
<h3>
  Here are some of my <span class="project">Projects</span>
</h3>
<section>
  {#each projectOBJ as obj}
    <Projectcard
      pic={obj.pic}
      label={obj.label}
      description={obj.description}
      link={obj.link}
      
    ></Projectcard>
  {/each}
</section>
<footer>
  FOR REFERENCE HERE IS MY PROJECT FOLDER Which also includes this website:
  <a
    href="https://drive.google.com/drive/folders/1xNh17cJrbGrUVt2EEx1Mi6_AztZXTpj2?usp=drive_line"
    >My Project Folder(Click me)</a
  >
</footer>

<style>
  main {
    margin: 0;
    background-color: hsl(276, 100%, 12%);
    color: white;
    height: 780px;
    font-family: "Open Sans", sans-serif;
  }
  h3 {
    font-size: 3em;
    background-color: rgb(30, 30, 30);
    margin: 0;
    padding: 0.7em;
    color: white;
    font-family: Tahoma;
    text-align: center;
  }
  span {
    color: rgb(214, 154, 255);
    font-family: Tahoma;
  }
  div {
    margin-left: 3em;
    margin-top: 3em;
    width: 1200px;
    text-align: justify;
  }
  li {
    font-size: 1.2em;
    font-weight: 200;
    list-style: decimal;
    line-height: 2em;
  }
  footer {
   margin: auto;
   padding: 30px;
   color: rgb(21, 0, 32);
   background-color: rgb(241, 221, 255);
   font-weight: 1000;
  }
  a {
    color: rgb(0, 17, 170);
    text-decoration: none;
  }
  section {
    display: flex;
    justify-content: center;
    height: auto;
    padding: 3em;
    background-color: rgb(241, 221, 255);
  }

  h3 {
    font-size: 3em;
    background-color: rgb(30, 30, 30);
    margin: 0;
    padding: 0.7em;
    color: white;
    font-family: Tahoma;
    text-align: center;
  }
  .project {
    color: rgb(214, 154, 255);
    font-family: Tahoma;
  }
</style>
