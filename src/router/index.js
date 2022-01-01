import Vue from 'vue'
import VueRouter from 'vue-router'
import shipperName from "../components/shipperName";
import shipperAddress from "../components/shipperAddress";

Vue.use(VueRouter)

const routes = [
  {
    path: '/', redirect: '/shipperName'
  },
  {
    path: '/shipperName',
    component: shipperName,
  },
  {
    path: '/shipperAddress',
    component: shipperAddress,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router