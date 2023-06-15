<script setup lang="ts">
import { Disclosure, DisclosurePanel } from '@headlessui/vue'
</script>

<template>
  <div id="navbar">
    <Disclosure as="nav" class="card">
      <div
        class="fixed top-0 left-0 right-0 z-50 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex my-2 items-center justify-between card-inner"
      >
        <div class="flex flex-shrink-0 items-center">
          <img class="block h-14 w-19 lg:hidden" src="../assets/logo.png" alt="logo" />
          <img class="hidden h-20 w-30 lg:block" src="../assets/logo.png" alt="logo" />
        </div>
        <div class="buttons flex gap-8">
          <button
            class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-200 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
          >
            <span
              class="relative px-4 py-2 transition-all ease-in duration-75 bg-gray-900 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
            >
              LOGIN
            </span>
          </button>
          <button
            type="button"
            class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-4 py-2 text-center mr-2 mb-2"
          >
            SIGNUP
          </button>
        </div>
      </div>

      <DisclosurePanel class="sm:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2">></div>
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>

<style scoped>
.card {
  transition: all 0.2s;
}

.card-inner {
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 8px;
}

</style>
