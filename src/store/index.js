import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state : {
        user : null
    },
    mutations : {
        setUser : (state, payload) =>{
            state.user = payload
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
        }
    },
    getters : {
        user(state){
            return state.user
        }
    }
})