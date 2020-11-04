<template>
    <div class="mt-5">
    <h5>Your history so far</h5>
    <v-container class="mt-3">
         <v-img src="../assets/u.png" class="mx-auto" aspect-ratio="1.2" width="100px"></v-img>
         <div class="clear-fix"></div>
            <v-card shaped>
                 <v-card-text>
                    <v-simple-table  fixed-header height="100px"  width="100px">
                        <template v-slot:default>
                            <thead>
                                <tr>
                                <th class="text-left">Name</th>
                                <th class="text-left">Price</th>
                                <th class="text-left">Quantity</th>
                                <th class="text-left">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in usersHistory" :key="item.carts_id"  class="tr-profile card-body shadow-sm">
                                <td class="mt-5" :style="{letterSpacing:'3px'}">{{ item.product_name }}</td>
                                <td>{{ item.price }}</td>
                                <td>{{ item.quantity}}</td>
                                <td>{{ item.price *  item.quantity}}</td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                    <div class="total-size mt-5">
                        <h6 :style="{fontSize:'20px'}">Total:${{overall}}</h6>
                    </div>
                </v-card-text>
            </v-card>
        <v-btn @click="logOut">Log Out</v-btn>
    </v-container>
    </div>
</template>
<script>
import Axios from 'axios';
// import {mapActions,mapGetters} from 'vuex';
export default {
    name:"UsersAccount",
    data() {
        return {
            usersHistory:[],
            overall:''
        }
    },
    // computed:{...
    //     mapGetters(['gethistory'])
    // },
    methods:{ 
            async fetchHistory(){
                let id = JSON.parse(localStorage.getItem('id'))
                console.log(id)
                let urlhist = `http://localhost/foodApp/foodend/users/tet.php?id=${id}`;
                let fomid = new FormData();
                fomid.append('id',id);
                await Axios.get(urlhist,fomid).then(r =>{
                    this.usersHistory = r.data 
                    let total = this.usersHistory.filter(t => t.price);
                    let arrtotal = new Array()
                    for (let index = 0; index < total.length; index++) {
                        arrtotal = [...arrtotal,total[index].price];
                        // console.log(arrtotal);
                    }
                    this.overall = arrtotal.reduce((x,y)=>{
                        return x+y
                    });
                    console.log(this.overall);
                    // console.log(this.usersHistory);
                    }).catch(err=>console.log(err))
            // .then(r => console.log(r.data)).catch(err=>console.log(err))
            // console.log(h);
            // commit('getHistory',apihistory);
        },
        logOut(){
            //  this.$router.push({name:'invoice-page'});
            localStorage.removeItem('id');
             this.$router.push('/')
        }
    },
    mounted(){
        this.fetchHistory();
        // console.log(this.usersHistory)
        // this.historyFucn()
    },
    created() {
         this.fetchHistory();
    },
}
</script>
<style lang="css" scoped>
    .tr-profile{
        font-family: bignoodletitling;
        letter-spacing: 1px;
        font-weight: 600;
        font-size: 40px;
    }
</style>