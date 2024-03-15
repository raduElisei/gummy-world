import './assets/main.css';
import 'primeflex/primeflex.css'
import 'primevue/resources/themes/lara-dark-blue/theme.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import Ripple from 'primevue/ripple';
import FloatLabel from 'primevue/floatlabel';
import InputNumber from 'primevue/inputnumber';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(PrimeVue, {
  ripple: true,
  locale: {
    reject: 'respinge',
    cancel: 'anulează'
  }
});
app.use(router);
app.directive('ripple', Ripple);
app.component('FloatLabel', FloatLabel);
app.component('InputNumber', InputNumber);

app.mount('#app');
