<template>
  <div class="mx-auto overflow-hidden" fixed>
    <v-app-bar
      color="deep-purple"
      white
      height="70"
      class="bg-white"
    >
      <v-app-bar-nav-icon @click="drawer = true" :style="{color: 'red'}"></v-app-bar-nav-icon>
      <v-toolbar-title class="ml-4" :style="{color: '#E53935', fontWeight:'900',letterSpacing:'4px'}">FOOd <span :style="{color: 'black'}">APp</span> </v-toolbar-title>
    </v-app-bar>
    <!-- for the design -->
        <v-container class="mt-4">
            <router-view></router-view>
        </v-container>
     <!-- for the design -->
        <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        >
        <v-list-item class="px-3 mt-5">
            <v-list-item-avatar>
            <v-img src="../assets/food.jpg"></v-img>
            </v-list-item-avatar>
            <v-list-item-title class="ml-1" :style="{color:'red',fontWeight:'700',letterSpacing:'3px'}"><span :style="{color:'black'}">FOOd</span> APp</v-list-item-title>
        </v-list-item>
        <hr>
        <v-list nav dense class="mt-5">
            <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
            >
            <!-- <router-link to="/AdminDarshboard" tag="button"> -->
            <v-list-item>
                <v-list-item-icon>
                <v-icon>mdi-view-dashboard</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="ml-1" @click="adminDarsh">DARSHBORD </v-list-item-title>
            </v-list-item>
            <!-- </router-link> -->
            <v-list-item>
                <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="ml-1" @click="users">USER-ACCOUNT</v-list-item-title>
            </v-list-item>
            <!-- <router-link to="/addProduct" tag="button"> -->
            <v-list-item>
                <v-list-item-icon>
                    <v-icon>mdi-folder</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="ml-1" @click="addProduct">ADD PRODUCT </v-list-item-title>
            </v-list-item>
            <!-- </router-link> -->
            </v-list-item-group>
        </v-list>
        </v-navigation-drawer>
  </div>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      group:''
    }),
    methods:{
      adminDarsh(){
        this.$router.push('/AdminDarshboard')
      },
      users(){
        this.$router.push({name:'admin-usersdetails'});
      },
      addProduct(){
        this.$router.push('/addProduct')
      }
    }
  }
</script>
<style lang="css" scoped>
    
</style>
