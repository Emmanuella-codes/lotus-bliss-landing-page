import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import 'flowbite'
import VueSplide from '@splidejs/vue-splide'

createApp(App).use(VueSplide).mount('#app')
