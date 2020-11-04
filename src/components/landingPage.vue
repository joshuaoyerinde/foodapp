<template>
  <div>
  <!--<FoodNav v-bind:ct="getCart.length"/>-->
   <v-container class="landing-top">
   <v-row>
    <v-col cols="12" md="4" sm="6" lg="6">
        <v-text-field solo label="Search-food" v-model="findname" prepend-inner-icon="mdi-magnify"></v-text-field>
    </v-col>
   </v-row>
    <v-row class="justify-content-center mx-auto">
        <v-col cols="6" sm="4" md="3"  xl="4" lg="3"   v-for="product in  filterednames" :key="product.product_id">
            <v-card raised  shaped>
                <v-img :src="require(`../../../foodend/productpic/${product.productimage}`)" alt="food-image" aspect-ratio="2.2">  
                </v-img>
                <div>
                    <div v-if="time > product.available_time" class="ml-2" :style="{fontFamily:'bignoodletitling',
                        fontSize:'14px',letterSpacing:'1px'}">
                         <div>{{product.available_time}}</div>
                        Not available
                    </div>
                     <div v-else :style="{fontFamily:'bignoodletitling',
                        fontSize:'14px',letterSpacing:'1px'}">available
                    </div>
                </div>
                <div class="ml-3" :style="{fontFamily:'mareinda',fontSize:'13px',letterSpacing:'2px',color:'#E53935'}">{{product.product_name}}</div>
                <v-card-text class="mt-n3">
                    <div><span :style="{fontSize:'17px'}"><i class="fa fa-dollar"></i></span>&nbsp;{{product.product_price}}</div>
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                    <v-btn fab dark top small @click="addToCart(product)" class="mt-n5 btn-landing" :style="{background:'#F44336'}" title="add To carts">
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
     <v-btn color="red" class="red--text"  @click="clear">clear</v-btn>
   </v-container>
  </div>
</template>
<script>

// import Axios from 'axios';
import {mapGetters,mapActions} from 'vuex'
// import FoodNav from '../../../foodend/uploads/'
export default {
    name:'LandingPage',
    data: () => ({
       data:[],
        available:'',
       date: new Date(),
       time:'',
       findname:'',
       showtime:''

    }),
    // components:{
        // FoodNav,
        // Viewcart
    // },
    computed:{...mapGetters(['getCart','getProduct']),
        filterednames(){
            let filter = new RegExp (this.findname, 'i');
            return this.getProduct.filter(food => food.product_name.match(filter));
        }
    },
    methods:{
        ...mapActions(['increase','clearCart','fetchProduct']),
        addToCart(product){
            this.increase(product);
            // console.log (this.getTotOrder);
        },
         checkAvailableTime(){
            // console.log(this.getProduct);
            const cc = this.getProduct.filter(res => res.product_price);
            cc;
            let h = this.date.getHours();
            let amp =  h >= 12 ? 'pm' : 'am';
            // h = h % 12;
            // h = h ? h : 12;
            let m = this.date.getMinutes();
            // console.log(h);
            this.time = h + ":" + m + ":" + amp;
            
            // console.log(this.time);
            // cc.forEach(element => {
            //         console.log(element.available_time);
            //     if (element.available_time < this.time) {
            //         console.log('not available');
            //     }else{
            //         console.log('available');
            //     }
            // });
        },
        clear(){
            this.clearCart()     
        }
    },
    // For fectching products
    mounted() {
        // console.log(this.getCart);
        // console.log(this.getTotalPrice)
        this.checkAvailableTime();
        this.fetchProduct();
    },
    created(){
        this.checkAvailableTime();
        this.checkAvailableTime();
    },        
}
</script>
<style lang="css">
    .food-landing-top{
        margin-top: 150px;
    }
    .bt{
        margin-top: 200px;
    }
    .landing-top{
         margin-top: 140px;
    }
    .btn-landing{
        background-color:#F44336;
    }
</style>