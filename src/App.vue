<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import AppInfo from './components/AppInfo.vue'
import OurServices from './components/OurServices.vue'
import FaqSection from './components/FaqSection.vue'
import FooterSection from './components/FooterSection.vue'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()
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
    <OurServices />
  </section>
  <!--faq-->
  <section>
    <FaqSection />
  </section>
  <!--testttt-->

  <!--Footer-->
  <footer>
    <FooterSection />
  </footer>
</template>

<style scoped>
/*
.logo {
  display: block;
  margin: 0 auto 2rem;
}
*/
</style>
