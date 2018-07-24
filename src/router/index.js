import Login from '../components/User/login.vue'
import SignUp from '../components/User/signup.vue'

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
    }
  ]

