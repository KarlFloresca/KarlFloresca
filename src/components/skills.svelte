<script>
  import Section from "./section.svelte";
  import Listmaker from "./listmaker.svelte";
  let languages = [
    {
      icon: "fa-brands fa-java",
      label: "Java",
    },
    {
      icon: "fa-brands fa-python",
      label: "Python",
    },
    {
      icon: "fa-brands fa-html5",
      label: "HTML",
    },
    {
      icon: "fa-brands fa-css3-alt",
      label: "CSS",
    },
    {
      icon: "fa-brands fa-js",
      label: "JavaScript",
    },
    {
      label: "Typescript",
    },
    {
      label: "Visual Basic",
    },
    {
      label: "SQL",
    },
    {
      label: "C#",
    },
  ];

  let softwareList = [
    {
      label: "VScode and Visual Studio",
    },
    {
      label: "InteliJ",
    },
    {
      label: "Pycharm",
    },
    {
      label: "filmora",
    },
    {
      label: "Adobe Photoshop",
    },
    {
      label: "Figma",
    },
    {
      label: "Canva",
    },
    {
      label: "Krita",
    },
  ];

  let frameworks = [
    {
      label: "React",
    },
    {
      label: "Sveltekit",
    },
    {
      label: "Bootstrap",
    },
    {
      label: "Pygame",
    },
    {
      label: "Tailwind CSS",
    },
    {
      label: "Supabase",
    },
  ];

  let prac = [
    {
      label: "Computer programming",
    },
    {
      label: "web design",
    },
    {
      label: "Front/Backend web development",
    },
    {
      label: "video editing",
    },
    {
      label: "Basic animation",
    },
    {
      label: "Digital Art",
    },
  ];

  let learning = [
    {
      label: "Supabase for data base",
    },
    {
      label: "Pocketbase also for data base",
    },
    {
      label: "Django",
    },
    {
      label: "advance animation",
    },
    {
      label: "C++",
    },
    {
      label: "3d Modelling",
    },
  ];
</script>

<main>
  <h3>
    <span>My</span> current skills Languages and Tools
  </h3>
  <section>
    <div>
      <Section title="Practical Skills"
        ><Listmaker itemList={prac}></Listmaker></Section
      >
    </div>
    <div class="languages">
      <Section
        icon="fa-solid fa-keyboard"
        title="Languages for development"
        id="languages"><Listmaker itemList={languages} /></Section
      >
    </div>
    <div class="softwares">
      <Section
        icon="fa-brands fa-uncharted"
        title="Softwares used"
        id="softwares"><Listmaker itemList={softwareList} /></Section
      >
    </div>
  </section>

  <section class="layer2">
    <div>
      <h2>Frame<span>Works</span> and Libraries</h2>
      <Listmaker itemList={frameworks}></Listmaker>
    </div>

    <div>
      <h2>What I'm <span>learning</span></h2>
      <Listmaker itemList={learning}></Listmaker>
    </div>
  </section>
</main>

<style>
  main {
    background-color: hsl(279, 70%, 96%);
    height: auto;
  }
  section {
    margin-top: 0;
    display: flex;
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
  .layer2 div {
    padding: 10px 10px 15px 15px;
    background-color: rgb(50, 19, 67);
    color: rgb(247, 231, 255);
    border-radius: 10px;
  }
  div {
    width: 40em;
    height: auto;
    margin: 30px;
    margin-top: 2em;
  }
  .layer2 div:hover{
    background-color: black;
    color: white;
    padding: 15px 15px 25px 25px;
    transition: 1s;
    transition-timing-function: ease-in-out;
   
  }
  span {
    color: blueviolet;
  }
</style>
