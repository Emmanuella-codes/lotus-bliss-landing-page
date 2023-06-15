<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
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
  <section>
    <AboutSection />
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
