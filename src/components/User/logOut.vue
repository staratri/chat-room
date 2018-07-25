<template>
     <div class="container">
       <div class="card">
          <h1>
            You are successfully Logged Out !
          </h1>
          <router-link @click= "logOut()" to="/login" >
            Login Again
          </router-link>
       </div>
       
     </div>
</template>

<script>
    import firebase from 'firebase'
    export default {
        data(){
            return{
              message : ''
            }
        },
      created(){
        this.$store.dispatch('logOut')
      }
    }
</script>
<style scoped>
  .container{
    margin: 0 auto;
  }
  .container .card {
    background: #eae8e8;
    box-shadow: 1px;
    padding: 10%;
  }
  .container .card h1 {
   margin-bottom: 5px;
  }
  .container .card a {
    padding: 10px;
    background: #3f51b5;
    color: white;
    text-decoration: none;
    font-size: bold;
  }
</style>

