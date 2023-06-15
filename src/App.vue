<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import AppInfo from './components/AppInfo.vue';
</script>

<template>
  <div class="bg-teal-500 py-1">
    <header>
      <NavBar />
    </header>
    <!--hero-->
    <main>
      <HeroSection />
    </main>
  </div>
  <!--about the app-->
  <article>
    <AboutSection />
  </article>
  <!--app info (screenshot & other contents)-->
  <section>
    <AppInfo />
  </section>
  <!--services section-->
  <section>
    
  </section>
</template>

<style scoped>
/*
.logo {
  display: block;
  margin: 0 auto 2rem;
}
*/
</style>
