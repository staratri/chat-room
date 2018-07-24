import Login from '../components/User/login.vue'
import SignUp from '../components/User/signup.vue'
import authGuard from './authGuard';

export default [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path : '/signup',
      name : 'signup',
      component : SignUp
    },
    {
      path : '/',
      name : 'root',
      beforeEnter: authGuard
    }
  ]

