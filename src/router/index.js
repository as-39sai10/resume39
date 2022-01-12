import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import OutPut from '../components/Out' 
import Profile from '../components/Profile'
import Skills from '../components/Skills'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/Skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/outputs',
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
