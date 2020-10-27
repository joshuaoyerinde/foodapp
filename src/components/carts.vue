<template>
    <div>
    <v-app-bar app color="#FAFAFA">
        <v-toolbar-title class="headline ml-5">
            <span>FOOd</span>
            <span class="font-weight-light text-danger">APp</span>
        </v-toolbar-title>
        <div class="row justify-content-center">
            <div class="col-md-4 mx-auto">
            </div>
            <router-link to="/" tag="button">
                <v-btn text>
                    Home
                </v-btn>
            </router-link>
             <router-link to="/" tag="button">
                <v-btn text>
                    Catalog
                </v-btn>
            </router-link>
        </div>
         <v-spacer></v-spacer>
            <v-btn icon>
                <i class="fa fa-user" :style="{fontSize:'20px'}"></i>
            </v-btn>
             <v-btn icon>
                <i class="fa fa-search" :style="{fontSize:'20px'}"></i>
            </v-btn>
    </v-app-bar>
    <v-container class="cart-con">
        <div class="text-center"><h3>Your Cart</h3> </div>
        <v-simple-table fixed-header height="400px" border-collapse="collapse">
            <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left" :style="{fontSize:'15px'}">Product</th>
                    <th class="text-left" :style="{fontSize:'15px'}">Price</th>
                    <th class="text-left" :style="{fontSize:'15px'}"><div> Quantity</div></th>
                    <th class="text-left" :style="{fontSize:'15px'}">Total</th>
                  </tr>
                </thead>
                <tbody>
                    <tr  v-for="orders in getCart" :key="orders.product_id">
                    <td>
                        <v-row justify="center">
                            <v-col cols="12" md="3">
                            <!-- <v-list-item-avatar> -->
                                <v-img :src="require(`../../../foodend/productpic/${orders.productimage}`)" class="image-rounded" aspect-ratio="1.8" alt="kk" width="117px">kniii</v-img>
                            <!-- </v-list-item-avatar>  -->
                            </v-col>
                            <v-col cols="12" md="3">
                                <div>{{orders.product_name}}</div>
                                <v-btn small color="#EF5350" class="mt-3" dark @click="removeCart(orders.product_id)">Remove</v-btn>
                            </v-col>
                        </v-row> 
                    </td>
                    <td>{{orders.product_price}}</td>
                    <td> <div><input min="1" @keypress="updateQuantity" class="quantity-input" type="number" v-model="orders.quantity"/></div></td>
                   <td><div>{{parseInt(orders.product_price) * parseInt(orders.quantity)}}</div></td>
                    <!-- <td><div>{{orders.total}}</div></td> -->
                    <!-- <td></td> -->
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
        <div class="mt-3 float-right">
            <strong>TOTAL: </strong><span :style="{fontSize:'20px',fontWeight:'500'}">${{getTotOrder}}</span>
        </div>
        <div class="mt-2">
              <v-btn dark class="my-5 text-white" @click="checkOut" color="#EF5350">Check Out</v-btn>
            <!--<router-link to="/loginpage" tag="button">
                  <v-btn dark class="my-5 text-white" color="#EF5350">Check Out</v-btn>
            </router-link>-->
        </div>
    </v-container>
    </div>
</template>
<script>
import Axios from 'axios'
// import FoodNav from '../../../foodend/productpic/'
import { mapActions,mapGetters } from 'vuex'
export default {
    name:"Viewcart",
    data() {
        return {
            mes:0,
            getCart: []
        }
    },
    computed:mapGetters(['getTotOrder']),
    methods:{...mapActions(['orderTot']),
        fetchCarts(){
            let carts = localStorage.getItem('SAVECATS')
            this.getCart = JSON.parse(carts)
            // this.getCart = [...this.getCart,this.getTotOrder];
            console.log(this.getCart)
        },
        updateQuantity(){
            // this.orderTot();
            let setagain = localStorage.setItem('SAVECATS',JSON.stringify(this.getCart));
            setagain
        },
        checkOut(){
            Axios.get()
             this.$router.push({name:'login-page'});
        },
        removeCart(id){
            this.getCart = this.getCart.filter(s => s.product_id !== id);
            console.log(this.getCart);
            //  console.log("remove");
            localStorage.setItem('SAVECATS',JSON.stringify(this.getCart));
        }
    },
    created() {
        this.fetchCarts();
    },
    updated() {
        this.updateQuantity();
        this.removeCart();
         this.orderTot();
    },
    destroyed() {
        this.removeCart();
    },
    beforeMount() {
        this.orderTot();
    },
   
    
}
</script>
<style lang="css">
    .mm{
        margin-top: 102px;
    }
    .image-rounded{
        border-radius: 40px 40px 40px 30px;
    }
    .quantity-input{
        width: 70px;
        height: 42px;
        text-align: center;
        font-size: 16px;
        font-family: aharoni;
        outline: none
    }
     .quantity-input:hover{
          outline: 1px solid  #EF5350;
     }
     .cart-con{
         margin-top: 70px
     }
     .cartTotal{
        /* margin-top: -70px;*/
     }
</style>