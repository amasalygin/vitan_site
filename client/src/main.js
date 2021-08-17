import 'bootstrap/dist/css/bootstrap.css';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import Vue from 'vue';
import VueScrollactive from 'vue-scrollactive';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueScrollactive);

/* eslint-отключение no-new */
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
