import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import OutPut from '../components/Out' 
import Profile from '../components/Profile'
import Skills from '../components/Skills'

Vue.use(VueRouter)

const routes = [
  {
    path: '/resume39',
    name: 'home',
    component: Home,
    meta: { title: 'resume39' }, 
  },
  {
    path: '/resume39/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/resume39/Skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/resume39/outputs',
    name: 'outputs',
    component: OutPut
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
