<script setup>
import { ref } from 'vue'

const show = ref(false)

const toggle = () => {
  show.value = !show.value
}
</script>

<template>
  <div
    id="about"
    class="mx-auto max-w-[85%] lg:w-[80%] my-14"
    data-aos="fade-up"
    data-aos-delay="200"
  >
    <div class="">
      <h2 class="text-4xl lg:text-5xl font-bold">About</h2>
    </div>
    <div class="my-7">
      <p class="text-xl lg:text-2xl italic pb-1">
        Welcome to Lotus Bliss: Your Gateway to Tranquility!
      </p>
      <p class="text-lg lg:text-xl">
        At Lotus Bliss, we believe in creating a serene digital space that nurtures your well-being
        and brings balance to your daily life. Our app is designed to guide you on a transformative
        journey towards inner peace and harmony. Whether you're seeking to relax, find inspiration,
        or cultivate mindfulness, Lotus Bliss is here to support you every step of the way.
      </p>
      <br />
      <p class="text-lg lg:text-xl" v-if="show">
        What sets Lotus Bliss apart is our dedication to curating content that caters to your unique
        needs. Our team of experts has meticulously handpicked a wide range of features and
        resources, ensuring that you have access to the most beneficial tools for your personal
        growth. From guided meditations to enriching articles, you'll find everything you need to
        foster a sense of calm and fulfillment.
      </p>
      <p class="text-lg lg:text-xl" v-if="show">
        Lotus Bliss is more than just a web app; it's a sanctuary where you can find solace,
        inspiration, and growth. Begin your transformative journey today and unlock the path to
        lasting tranquility.
      </p>
      <button
        @click="toggle"
        class="relative inline-flex items-center justify-center p-0.5 my-3 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-100 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
      >
        <span
          class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
          >{{ show ? 'HIDE' : 'READ MORE' }}</span
        >
      </button>
    </div>
  </div>
</template>
