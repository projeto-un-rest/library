import { createApp } from 'vue'
import App from './App.vue'

import { store } from '@/store'
import router from '@/router'

import 'vue-toastification/dist/index.css'
import Toast, { POSITION } from 'vue-toastification'

const options = {
    position: POSITION.TOP_CENTER
}

createApp(App)
    .use(store)
    .use(router)
    .use(Toast, options)
    .mount('#app')
