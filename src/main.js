import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//vue-toastification imports
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
//vue-toast-notification
import 'vue-toast-notification/dist/theme-bootstrap.css'
import './assets/main.css'
//vue-sweetalert2
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const optionsToast = {
  draggable: false
}

const app = createApp(App)

app.use(router)
app.use(Toast, optionsToast)
app.use(VueSweetalert2)

app.mount('#app')
