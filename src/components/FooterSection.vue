<script setup></script>

<template>
  <div class="mt-24">
    <div class="shadow m-4">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="flex flex-col items-center justify-between lg:flex-row">
          <div>
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
              <span
                class="self-center text-lg lg:text-xl font-semibold whitespace-nowrap dark:text-white"
                >Lotus Bliss</span
              >
            </a>
          </div>

          <div class="lg:w-full w-full sm:w-1/2 xl:w-[22rem] space-y-4">
            <p class="text-sm text-gray-300 focus:outline-none focus:shadow-outline">
              Sign up to receive exclusive <br class="sm:hidden" />
              announcements and updates
            </p>
            <div class="flex items-center space-x-2">
              <input
                type="text"
                class="lg:w-1/2 px-2 py-4 sm:py-3 rounded-lg sm:rounded-md text-sm focus:outline-none border border-[#AAAAAA] placeholder-gray-300 bg-black"
                placeholder="Enter your email"
              />
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  aria-hidden="true"
                  class="w-6 h-7"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Icon description</span>
              </button>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-400 sm:text-center dark:text-gray-400"
          >© 2023 Lotus Bliss™. All Rights Reserved.</span
        >
        <h4 class="text-center mt-5">
          Built with <span class="text-red-500">❤️</span> by Emmanuella ✨
        </h4>
      </div>
    </div>
  </div>
</template>
