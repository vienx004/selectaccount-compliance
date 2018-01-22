import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { routes } from './routes'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueResource);
Vue.use(BootstrapVue);
Vue.use(VueRouter);

//register routes
const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  //register routes
  router,
  render: h => h(App)
})
