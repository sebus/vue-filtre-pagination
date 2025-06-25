import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import du package
import VueCookies from 'vue-cookies'

const app = createApp(App)

app.use(router)

// Dit à toute l'application d'utiliser le package
app.use(VueCookies)

app.mount('#app')
