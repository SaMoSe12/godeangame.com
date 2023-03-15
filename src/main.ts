import { createApp } from 'vue';
import App from './App.vue';
import router from './plugins/router';
/* Fontawesome setup */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* icons */
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

library.add(faCode, faChevronRight );


import 'bulma/bulma.sass';
import '@/style.sass';

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')