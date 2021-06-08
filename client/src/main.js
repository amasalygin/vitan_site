import 'bootstrap/dist/css/bootstrap.css';
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue';
import Vue from 'vue';
import App from './App';
import router from './router';
import VueScrollTo from 'vue-scrollto'
import VueScrollactive from 'vue-scrollactive';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueScrollTo)
Vue.use(VueScrollactive);

/* eslint-отключение no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
