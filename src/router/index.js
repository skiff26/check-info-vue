import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
		meta: { title: 'Навигация'},
      component: HomePage
    },
    {
      path: '/weather',
      name: 'weather',
		meta: { title: 'Weather - Погода', icon: 'src/assets/weather.svg'},
      component: () => import('../views/WeatherPage.vue')
    },
    {
      path: '/location',
      name: 'location',
		meta: { title: 'Locator - Пробив по IP', icon: 'src/assets/locator.svg'},
      component: () => import('../views/LocationPage.vue')
    },
    {
      path: '/domain',
      name: 'domain',
		meta: { title: 'Domain - Пробив по домену', icon: 'src/assets/domain.svg'},
      component: () => import('../views/DomainPage.vue')
    },
    {
      path: '/bodymassindex',
      name: 'bodyMassIndex',
		meta: { title: 'Расчитать индекс массы тела', icon: 'src/assets/bodymassindex.svg'},
      component: () => import('../views/BodyMassIndexPage.vue')
    },
  ]
})

router.afterEach((to, from) => {
	document.title = to.meta.title
})
router.beforeEach((to, from, next) => {
	const link = document.querySelector('link[rel="icon"]')
	link.href = to.meta.icon
	next()
})

export default router
