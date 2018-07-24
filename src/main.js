import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import * as firebase from 'firebase'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Routes from './router/index'
import {store} from './store/index'


Vue.use(Vuetify)
Vue.use(VueRouter)


const router = new VueRouter({
  routes : Routes,
  mode : 'history'
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store : store,
  created(){
    firebase.initializeApp({
      apiKey: "AIzaSyDTh6z0babS1yIn2vuMC5IuQ-BsfBZgrhQ",
      authDomain: "chat-room-72c12.firebaseapp.com",
      databaseURL: "https://chat-room-72c12.firebaseio.com",
      projectId: "chat-room-72c12",
      storageBucket: "chat-room-72c12.appspot.com",
    })
  }
})
