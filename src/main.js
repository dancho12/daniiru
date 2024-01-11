import './assets/main.css'

import i18n from "./i18n"


import Components from './components/Components'

import {
    createApp
} from 'vue'
import App from '@/App.vue'
import router from './router'

const app = createApp(App)

Components.forEach((component) => {
    app.component(component.name, component)
})

app.use(router)
app.use(i18n)

app.mount('#app')