<template>
  <v-app id="inspire">
    <div v-show="$store.state.loader" class="loader" >
      <v-progress-circular
      indeterminate
      color="amber"
    class="progress"></v-progress-circular>

    </div>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list dense v-for="menu in menuItems" :key = "menu.title">
        <router-link :to="menu.link" exact>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon> {{ menu.icon }} </v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            
            <v-list-tile-title>{{menu.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile></router-link>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Chat Room</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid >
        <router-view></router-view>
        <!-- <login-module></login-module> -->
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2018 QA-INFOTECH</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null
    }),
    
    computed : {
      userIsAuthenticated(){
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      },
      menuItems (){
        let menuItems = [
          {
            title : 'Sign In',
            link : '/login',
            icon : 'account_circle'
          },
          {
            title : 'Sign Up',
            link : '/signup',
            icon : 'person_add'
          }
        ]
        if(this.userIsAuthenticated){
          menuItems = [
            {
              title : 'Chat Room',
              link : '/chatroom',
              icon : 'chat'
            },
            {
              title : 'Your Profile',
              link : '/profile',
              icon : 'person'
            },
            {
              title : 'Sign Out',
              link : '/signout',
              icon : 'exit_to_app'
            }
          ]
        }
        return menuItems
      }
    },
    props: {
      source: String
    }
  }
</script>
<style scoped>
a {
  text-decoration: none;
}
.v-list.v-list--dense:hover{
  background-color: #d0d0d0;
}
.loader  {
  background: #80808075;
  position: fixed;
  width: 100%;
  height: 100% ;
  z-index: 1;
  margin: 0 auto;
}
.loader .progress{
    height: 15%;
    width: 15%;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
}

</style>


