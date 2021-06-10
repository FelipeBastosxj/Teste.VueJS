import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sobre from '../views/Sobre.vue'
import Dados from '../views/Dados.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Sobre',
    name: 'Sobre',
    component: Sobre
  },
  {
    path: '/Dados',
    name: 'Dados',
    component: Dados
  }
]

const router = new VueRouter({
  mode:"history",
  routes
})

export default router
