<template>
  <div class="overflow-hidden" >
    <v-app-bar
      absolute
      color="#EF5350"
      dark
      shrink-on-scroll
      prominent
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-5"
      scroll-threshold="500"
       src="../assets/bgr.jpg"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(18,2,93,.43)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title class="d-none d-lg-block"><em><strong><span :style="{fontWeight:'700',letterSpacing:'2px'}">FOOd</span></strong></em><span :style="{fontWeight:'600',color:'#F44336',textShadow:'1px 1px 2px #f3f3f3'}">APp</span></v-toolbar-title>
      <!-- <div class="d-block d-lg-none mt-3">
      <em><strong><span :style="{fontWeight:'700',letterSpacing:'2px'}">FOOd</span>
      </strong></em><span :style="{fontWeight:'600',color:'#F44336',textShadow:'1px 1px 2px #f3f3f3'}">APp</span></div></span>-->
      <v-spacer></v-spacer>
       <v-toolbar-title></v-toolbar-title>
      <router-link to="/carts"  tag="button">
       <v-btn icon  class="mt-2 mr-4">
        <v-badge bordered  color="#F44336"  :content="getCart.length"
        :value="getCart.length" overlap offset-x="10" offset-y="10" >
            <v-avatar size="40">
                <v-icon>mdi-basket</v-icon>
            </v-avatar>
        </v-badge>
      </v-btn>
      </router-link>
      <v-btn color="#F44336" class="text-white mt-2 mr-4">
        Login
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
        <v-btn icon v-bind="attrs" v-on="on">
           <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      <!-- <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn> -->
    </v-app-bar>
    
    <v-sheet
      id="scrolling-techniques-5"
      class="overflow-auto"
      max-height="735"
    >
      <v-container :style="{marginTop:'0px',}"><LandingPage /></v-container>
      <hr :style="{width:'80px'}" class="mx-auto my-2" color="#F44336">
      <v-footer class="mt-4" color="lighten-1" padless>
        <v-row justify="center" :style="{background:'white'}" no-gutters class="justify-content-center">
         <!-- <v-btn
            v-for="link in links"
            :key="link"
            color="#F44336"
            text
            rounded
            class="my-2"
          >
            {{ link }}
          </v-btn>-->
          <v-col class="#F44336 lighten-2 py-4 text-center white--text" :style="{background:'#EF5350'}" cols="12">
            {{ new Date().getFullYear() }} —   <em><strong><span :style="{fontWeight:'900',letterSpacing:'4px'}">FOOd</span></strong></em><span :style="{fontWeight:'900',color:'white',textShadow:'1px 1px 2px black'}">APp</span>
          </v-col>
      </v-row>
      </v-footer>
    </v-sheet>
  </div>
</template>

<script>
// import {mapGetters, mapActions} from 'vuex'
import LandingPage from './landingPage'
// import LandingPage from '../'
import {mapGetters} from 'vuex'
export default {
    name:'FoodNav',
    data:()=>({
        image:[
            {src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'},
           
        ],
        links: ['Home','About Us','Team','Login','Blog','Contact Us',],
        data:0,
          items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }),
     computed:mapGetters(['getCart']),
     components:{
       LandingPage
     }
    // methods:{...mapActions(['increase'])}
    // props:['ct'],
}
</script>
<style lang="css">
    .restorance-title{
      font-weight: 700;
      /* background-image: url('../assets/');*/
    }
</style>