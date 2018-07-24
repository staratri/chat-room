<template>
   <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent = "onSignIn">
                  <v-text-field prepend-icon="person" name="login" label="Login" type="email" v-model = "email"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password" v-model= "password"></v-text-field>
                  <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" type="submit">Login</v-btn>
              </v-card-actions>
                </v-form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
</template>

<script>
   export default {
     data(){
        return {
           email : '',
           password : '', 
        }
    },
    methods : {
        onSignIn : function (){
            this.$store.dispatch('signInUser', {
                email : this.email,
                password : this.password
            })
        }
    },
    computed : {
        comparePassword : function(){
            return this.password !== this.confirmPassword ? 'Password Do Not Matched' : true
        },
        user(){
            return this.$store.getters.user
        }
    },
    watch :{
        user(value) {
            if(value !==null && value !==undefined){
                this.$router.push('/')
            }
        }
    }
}
</script>