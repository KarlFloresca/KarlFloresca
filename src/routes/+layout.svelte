<script>
  import Navbar from "../components/navbar.svelte";
  import Profile from "../components/profile.svelte";
  import Experience from "../components/experience.svelte";
  import Skills from "../components/skills.svelte";
  import Footer from "../components/footer.svelte";
  import "@fortawesome/fontawesome-free/css/all.min.css";
</script>
  <main>
    
    <Navbar />
    <div class="About" id="About">
      <Profile />
    </div>
    <div class="experiences" id="experiences">
      <Experience />
    </div>
    <div class="skills" id="skills">
      <Skills />
    </div>
    <div id="contact"><Footer /></div>
  </main>



<style>
  .About {
    background-color: hsl(279, 70%, 96%);
    height: 42em;
  }
  .experiences {
    background-color: hsl(276, 100%, 12%);
    margin: 0;
  }
</style>
