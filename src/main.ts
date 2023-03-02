import { createApp } from 'vue';
import App from './App.vue';
import router from './plugins/router';
import 'bulma/bulma.sass';
import '@/style.sass';

createApp(App)
    .use(router)
    .mount('#app')