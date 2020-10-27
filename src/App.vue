<template>
  <div id="app">
  <router-view></router-view>
       <!-- <FoodNav v-bind:ct="message"/> -->
     <!-- <Carouse />
      <LandingPage/>
      <h3>{{message}}</h3>
      <v-btn @click="count">Count</v-btn> -->
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    <!-- <router-view/> -->
  </div>
</template>
<script>
// import Carouse from './components/carousel'
// import LandingPage from './components/landingPage'
// import FoodNav from './components/foodNav'
export default {
  data: () => ({
     message: 0

  }),
  components:{
    // LandingPage,
    // FoodNav,
    // Carouse 
  }
}
</script>
<style lang="scss">

</style>
