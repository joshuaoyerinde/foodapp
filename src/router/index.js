import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import LandingPage from '../components/foodNav.vue';
import adminHome from '../admincomponent/adminhome.vue';
import addProduct from '../admincomponent/addProduct.vue';
import AdminDarshboard from '../admincomponent/adminDarshboard.vue';
import Viewcart from '../components/carts.vue';
import Caro from '../components/carousel.vue';
import LoginPage from '../components/loginpage.vue';
import SignUppage from '../components/registrationPage.vue';
import Details from '../components/details.vue';
import Payment from '../components/payment.vue'
import vext from '../components/text.vue';
import Spinal from '../components/spinal.vue';
import Usershistory from '../components/usersaccount.vue';
import Confirmorders from '../components/order.vue';
import Usersdetails from '../admincomponent/usersDetails.vue';
import Commands from '../admincomponent/commands.vue';
import Invoice from '../components/invoice.vue';
import Thankyou from '../components/thank.vue'
// import AccountNAv from '../components/account.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  // the admin routing part
  { path: '/adminHome', component: adminHome, 
    children:[
      {path:'/AdminDarshboard', component:AdminDarshboard},
      {path:'/addProduct', component:addProduct},
      {path:'/admin-usersdetails', name:'admin-usersdetails', component:Usersdetails},
      {path:'/details-commanda', name:'commands', component: Commands}
    ]
  },
  // users, cart, Login, registration, path 
  { path:'/carts', component:Viewcart},
  { path:'/caro', component: Caro},
  { path:'/loginpage', name:'login-page', component:LoginPage},
  { path:'/SignUp-page', component:SignUppage},
  { path:'/payment-page/:userid?', component:Payment},
  { path:'/details/:id?', name:'details-page', component:Details},
  { path:'/payment-loading/:userid', name:'payment-loading', component:Spinal},
  { path:'/text', component:vext},
  { path: '/confirm-orders/:userid', name:'order', component:Confirmorders},
  { path:'/invoicepage', redirect:{name:'thank-you'},  name:'invoice-page', component:Invoice,
  children:[
          {path: '/thankyou', name:'thank-you', component:Thankyou},
          {path:'/usersaccount', name:'user-account',component:Usershistory},
    ] 
  },
  // { path:'//:id?', name:'user-account', component:UsersAccount }
  // {
    // path: '/about',
    // name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
