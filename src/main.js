import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Routes from './router/routes';
import store from "./store";
import navBar from './components/navBar';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(navBar)

const router = new VueRouter({
  routes: Routes,
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  store
}).$mount('#app')
