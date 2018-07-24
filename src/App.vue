<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense v-for="menu in menuItems">
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>  </v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title @click="$router.push(menu.link)">{{menu.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="logOut" v-if="userIsAuthenticated">
          <v-list-tile-action>
            <v-icon>  </v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title >Sign Out</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="" v-else>
          <v-list-tile-action>
            <v-icon>  </v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title @click="$router.push('/login')">Sign In</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Chat Room</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
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
    methods : {
      logOut(){
        this.$store.dispatch('logOut')
      }
    },
    computed : {
      userIsAuthenticated(){
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      },
      menuItems (){
        let menuItems = [
          {
            title : 'Sign In',
            link : '/login'
          },
          {
            title : 'Sign Up',
            link : '/signup'
          }
        ]
        if(this.userIsAuthenticated){
          menuItems = [
            {
              title : 'Chat Room',
              link : '/chatroom'
            },
            {
              title : 'Your Profile',
              link : '/profile'
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

