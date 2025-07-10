import { createMemoryHistory, createRouter } from 'vue-router'
import About from '@/views/About/About.vue'


const routes = [
    {
      path: '/',
      name: 'About',
      component: About
    },
   
  ]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })
export default router