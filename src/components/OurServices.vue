<script>
import { defineComponent } from 'vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/css/sea-green'
import '@splidejs/vue-splide/css/core'

export default defineComponent({
  components: {
    Splide,
    SplideSlide
  },

  setup() {
    const options = {
      autoplay: true
    }
    return { options }
  }
})
</script>

<template>
  <div
    class="mx-auto max-w-[85%] lg:w-[75%] flex justify-between items-center flex-col"
    data-aos="fade-up"
  >
    <div class="w-full text-center">
      <h2 class="text-4xl lg:text-5xl font-bold">Our Services</h2>
    </div>
    <!-- Carousel -->
    <div class="w-full lg:w-3/5 my-7 bg-gray-950">
      <!-- Carousel wrapper -->
      <Splide :options="options">
        <SplideSlide>
          <img src="../assets/images/yoga-1.jpg" alt="Slide 1" />
        </SplideSlide>
        <SplideSlide>
          <img src="../assets/images/yoga-2.jpg" alt="Slide 2" />
        </SplideSlide>
        <SplideSlide>
          <img src="../assets/images/yoga-3.jpg" alt="Slide 3" />
        </SplideSlide>
        <SplideSlide>
          <img src="../assets/images/yoga-4.jpg" alt="Slide 4" />
        </SplideSlide>
        <SplideSlide>
          <img src="../assets/images/yoga-5.jpg" alt="Slide 5" />
        </SplideSlide>
        <SplideSlide>
          <img src="../assets/images/yoga-6.jpg" alt="Slide 6" />
        </SplideSlide>
      </Splide>
    </div>
  </div>
</template>
