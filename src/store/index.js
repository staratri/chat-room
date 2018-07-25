import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state : {
        user : null,
        loader: false
    },
    mutations : {
        setUser : (state, payload) =>{
            state.loader = false
            state.user = payload
        },
        unSetUser : (state)=>{
            state.loader = false
            state.user = null
        }
    },
    actions : {
        signUpUser : ({commit}, payload) => {
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then(
                response => {
                    const newUser = {
                        id : response.user.uid,
                        name : ''
                    }
                    commit('setUser',  newUser)
                }
            )
            .catch(
                error =>{
                    console.log(error)
                }
            )
        },
        signInUser : ({commit}, payload) =>{
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then(
                response => {
                    const newUser = {
                        id : response.user.uid,
                        name : ''
                    }
                    commit('setUser',  newUser)
                    
                }
            ).catch(error =>{
                console.log(error)
            })
        },
        autoSignIn : ({commit}, payload ) =>{
            commit('setUser', { id : payload.uid})
        },
        logOut : ({commit})=>{
            firebase.auth().signOut().then(()=>{
                commit('unSetUser')
            }).catch(error => {
                console.log(error)
            })
        }
    },
    getters : {
        user(state){
            return state.user
        }
    }
})