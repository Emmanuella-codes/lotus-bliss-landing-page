<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <div
    class="mx-auto max-w-[85%] lg:w-[80%] flex justify-between items-center flex-col-reverse lg:flex-row"
  >
    <div class="lg:w-1/2 w-full" data-aos="fade-right">
      <div class="">
        <h2 class="text-4xl lg:text-5xl font-bold">More on Lotus Bliss...</h2>
      </div>
      <p class="text-lg lg:text-xl py-7">
        Lotus Bliss is a transformative app designed to guide you on a journey of self-discovery,
        balance, and well-being through the ancient practice of yoga. Whether you're a seasoned yogi
        or just starting out, our app provides a sanctuary for you to deepen your practice, nurture
        your body, and cultivate mindfulness.
      </p>
    </div>
    <div class="lg:w-1/2 w-full flex lg:justify-end" data-aos="fade-left">
      <img src="../assets/images/phone-pic.png" alt="app-screenshot" />
    </div>
  </div>
</template>
