import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import( '../views/Inicio.vue')
  },
  {
    path: '/equipo',
    name: 'equipo',
    component: () => import( '../views/Equipo.vue')
  },
  {
    path: '/detalletrabajador',
    name: 'detalletrabajador',
    component: () => import( '../components/DetalleTrabajador.vue')
  },
  {
    path: '/circuitos',
    name: 'circuitos',
    component: () => import( '../views/Circuitos.vue')
  },
  {
    path: '/instituciones-circuito',
    name: 'instituciones-circuito',
    component: () => import( '../components/InstitucionesCircuito.vue')
  },
  {
    path: '/instituciones',
    name: 'instituciones',
    component: () => import( '../views/Instituciones.vue')
  },
  {
    path: '/poblacion',
    name: 'poblacion',
    component: () => import( '../views/Poblacion.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
