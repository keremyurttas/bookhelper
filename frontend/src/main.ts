import { createApp } from 'vue'
import { createPinia } from 'pinia'
// @ts-ignore - Vue SFC type declarations may be provided elsewhere
import App from './App.vue'
import vuetify from './plugins/vuetify'
import "@mdi/font/css/materialdesignicons.css";
const app = createApp(App)

app.use(createPinia())
app.use(vuetify)
app.mount('#app')
