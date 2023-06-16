<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <div id="faq-section" class="mx-auto max-w-[85%] lg:max-w-5xl my-9">
    <div class="mb-3">
      <h3 class="text-3xl lg:text-4xl font-bold">Frequently Asked Questions</h3>
    </div>
    <div
      id="accordion-flush"
      data-accordion="collapse"
      data-active-classes="bg-grey-900 text-gray-300"
      data-inactive-classes="text-gray-400"
    >
      <h2 id="accordion-flush-heading-1">
        <button
          type="button"
          class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-400 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
          data-accordion-target="#accordion-flush-body-1"
          aria-expanded="true"
          aria-controls="accordion-flush-body-1"
        >
          <span>Q: Is Lotus Bliss suitable for beginners in yoga and meditation?</span>
          <svg
            data-accordion-icon
            class="w-6 h-6 rotate-180 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div id="accordion-flush-body-1" class="hidden" aria-labelledby="accordion-flush-heading-1">
        <div class="py-5 border-b border-gray-200 dark:border-gray-700">
          <p class="mb-2 text-gray-300">
            A: Absolutely! Lotus Bliss is designed to cater to practitioners of all levels,
            including beginners. Our app offers a wide range of classes and guided meditations
            specifically tailored for beginners, providing step-by-step instructions and gentle
            practices to help you ease into your journey. Our instructors are experienced in guiding
            newcomers and will support you in building a solid foundation in yoga and meditation.
          </p>
        </div>
      </div>
      <h2 id="accordion-flush-heading-2">
        <button
          type="button"
          class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-400 border-b border-gray-200 dark:border-gray-700"
          data-accordion-target="#accordion-flush-body-2"
          aria-expanded="false"
          aria-controls="accordion-flush-body-2"
        >
          <span>Q: Can I access Lotus Bliss on multiple devices?</span>
          <svg
            data-accordion-icon
            class="w-6 h-6 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div id="accordion-flush-body-2" class="hidden" aria-labelledby="accordion-flush-heading-2">
        <div class="py-5 border-b border-gray-200 dark:border-gray-700">
          <p class="mb-2 text-gray-300">
            A: Yes, you can access Lotus Bliss on multiple devices. Our web app is responsive and
            can be accessed on desktop computers, laptops, tablets, and smartphones. You can
            seamlessly transition between devices, allowing you to practice yoga, meditate, or
            access resources whenever and wherever you desire. Simply log in to your Lotus Bliss
            account on your preferred device, and your progress and preferences will be synced
            across all devices.
          </p>
        </div>
      </div>
      <h2 id="accordion-flush-heading-3">
        <button
          type="button"
          class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-400 border-b border-gray-200 dark:border-gray-700"
          data-accordion-target="#accordion-flush-body-3"
          aria-expanded="false"
          aria-controls="accordion-flush-body-3"
        >
          <span>Q: What types of yoga and meditation practices are available on Lotus Bliss?</span>
          <svg
            data-accordion-icon
            class="w-6 h-6 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div id="accordion-flush-body-3" class="hidden" aria-labelledby="accordion-flush-heading-3">
        <div class="py-5 border-b border-gray-200 dark:border-gray-700">
          <p class="mb-2 text-gray-300">
            A: Lotus Bliss offers a diverse range of yoga and meditation practices to cater to
            different interests and needs. Our yoga classes cover various styles, including Hatha,
            Vinyasa, Yin, Restorative, and more. You can choose classes based on duration,
            intensity, and focus areas such as flexibility, strength, relaxation, or mindfulness.
            Our meditation sessions include guided meditations, breathwork exercises, and
            mindfulness practices to cultivate inner calm and clarity.
          </p>
        </div>
      </div>
      <h2 id="accordion-flush-heading-4">
        <button
          type="button"
          class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-400 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
          data-accordion-target="#accordion-flush-body-4"
          aria-expanded="true"
          aria-controls="accordion-flush-body-4"
        >
          <span
            >Q: Can I connect with the Lotus Bliss community and interact with fellow
            practitioners?</span
          >
          <svg
            data-accordion-icon
            class="w-6 h-6 rotate-180 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div id="accordion-flush-body-4" class="hidden" aria-labelledby="accordion-flush-heading-4">
        <div class="py-5 border-b border-gray-200 dark:border-gray-700">
          <p class="mb-2 text-gray-300">
            A: No but this and many more features will be available in upcoming updates. You can
            engage in discussions, share your experiences, and seek inspiration from fellow
            practitioners through our community forums and social features. Additionally, we
            organize virtual events, workshops, and challenges where you can participate, learn, and
            grow together with the Lotus Bliss community. Connect, support, and inspire each other
            on your wellness journeys.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
