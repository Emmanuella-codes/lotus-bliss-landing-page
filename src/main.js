import { createApp } from 'vue'
import App from './App.vue'
import './assets/base.css'
import './index.css'
import 'flowbite'
import VueSplide from '@splidejs/vue-splide'

createApp(App).use(VueSplide).mount('#app')
