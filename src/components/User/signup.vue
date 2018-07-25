<template>
   <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Sign Up</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent = "onsignUp">
                    <v-text-field prepend-icon="person" name="name" label="Your Name" type="text" v-model="name"></v-text-field>
                    <v-text-field prepend-icon="person" name="email" label="Your Email" type="email" v-model="email"></v-text-field>
                    <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password" v-model="password"></v-text-field>
                    <v-text-field id="confirmPassword" prepend-icon="lock" name="confirmPassword" label="Confirm Password" type="password" v-model="confirmPassword" :rules = "[comparePassword]"></v-text-field>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" type = "submit">Sign Up</v-btn>
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
           name : '',
           email : '',
           password : '', 
           confirmPassword : ''
        }
    },
    methods : {
        onsignUp : function (){
            this.$store.dispatch('signUpUser', {
                email : this.email,
                name : this.name, 
                password : this.password,
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
                this.$router.push('/chatroom')
            }
        }
    }
}

</script>