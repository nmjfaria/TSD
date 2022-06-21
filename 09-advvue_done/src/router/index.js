import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Tasks from '../views/Tasks.vue'
import Details from '../views/Details.vue'
import Main from '../views/Main.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: Tasks,
    children: [
      {
        path: 'main',
        name: 'Main',
        component: Main,
      },
      {
        path: 'details/:id',
        name: 'Details',
        component: Details
      },
    ]
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
