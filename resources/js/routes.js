import VueRouter from 'vue-router'
import ExampleComponent from './components/ExampleComponent'
import Register from './auth/Register'

const routes = [
  {
    path: '/',
    component: ExampleComponent,
    name: 'home'
  },
  {
    path: '/register',
    component: Register,
    name: 'register'
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router;