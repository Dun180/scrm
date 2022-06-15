import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MemberManagement from "@/views/MemberManagement";
import MemberConsumptionFlowEntry from "@/views/MemberConsumptionFlowEntry";
import MemberPointRuleManagement from "@/views/MemberPointRuleManagement";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/member-management',
    name: 'MemberManagement',
    component: MemberManagement
  },
  {
    path: '/member-consumption-flow-entry',
    name: 'MemberConsumptionFlowEntry',
    component: MemberConsumptionFlowEntry
  },
  {
    path: '/member-point-rule-management',
    name: 'MemberPointRuleManagement',
    component: MemberPointRuleManagement
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
