import Login from '../components/User/login.vue'
import SignUp from '../components/User/signup.vue'
import LogOut from '../components/User/logOut.vue'
import Room from '../components/chat/room.vue'
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
      redirect : '/chatroom'
    },
    {
      path : '/profile',
      name : 'profile',
      beforeEnter: authGuard
    },
    {
      path : '/chatroom',
      name : 'rooms',
      component : Room,
      beforeEnter: authGuard
    },
    {
      path : '/signout',
      name : 'logOut',
      component : LogOut,
    }
  ]

