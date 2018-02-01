import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { routes } from './routes'
import VueSVGIcon from 'vue-svgicon'
import vSelect from 'vue-select'
import firebase from 'firebase'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

  var config = {
    apiKey: "AIzaSyC2mkhCHSeMhqwvJpunerJ1NnkIGJq-KzQ",
    authDomain: "selectaccount-compliance.firebaseapp.com",
    databaseURL: "https://selectaccount-compliance.firebaseio.com",
    projectId: "selectaccount-compliance",
    storageBucket: "selectaccount-compliance.appspot.com",
    messagingSenderId: "314118970341"
  };
  firebase.initializeApp(config);

Vue.use(VueResource);
Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(VueSVGIcon)
Vue.component('v-select', vSelect)

//register routes
const router = new VueRouter({
  routes,
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if(requiresAuth && !currentUser) next()
  else next()
})

app = new Vue({
  el: '#app',
  //register routes
  router,
  firebase,
  render: h => h(App)
})
