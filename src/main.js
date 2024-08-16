import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/js/bootstrap.js';
import router from '@/router';
import objPlugins from './plugins/obj';
import funcPlugins from './plugins/func';
import person from './plugins/person';

const app = createApp(App);
app.use(objPlugins, { name: '안민현' });
app.use(funcPlugins);
app.use(person, { name: '민코딩' });
app.use(router);
app.mount('#app');
