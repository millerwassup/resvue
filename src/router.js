import Vue from 'vue'
import Router from 'vue-router'
import ExerciseOne from './views/ExerciseOne.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'exercise-one',
      component: ExerciseOne
    },
    {
      path: '/exercise-two',
      name: 'exercise-two',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/ExerciseTwo.vue')
    }
  ]
})
