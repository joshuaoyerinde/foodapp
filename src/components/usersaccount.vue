<template>
    <div class="mt-5">
    <v-container class="mt-5">
         <v-img src="../assets/u.png" aspect-ratio="1.2" width="100px"></v-img>
        <v-simple-table  fixed-header height="300px" width="100px">
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
                    <td class="mt-5" >{{ item.product_name }}</td>
                    <td>{{ item.price }}</td>
                    <td>{{ item.quantity}}</td>
                    <td>{{ item.price *  item.quantity}}</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
        <v-btn @click="hh">Moved To</v-btn>
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
        }
    },
    // computed:{...
    //     mapGetters(['gethistory'])
    // },
    methods:{ //...mapActions(['fetchHistory']),
        // historyFucn(){
        //    this.usersHistory = this.gethistory
        //    console.log(this.usersHistory)
        // }
            async fetchHistory(){
                let id = JSON.parse(localStorage.getItem('id'))
                console.log(id)
                let urlhist = `http://localhost/foodApp/foodend/users/tet.php?id=${id}`;
                let fomid = new FormData();
                fomid.append('id',id);
                await Axios.get(urlhist,fomid).then(r =>{
                    this.usersHistory = r.data 
                    console.log(this.usersHistory);
                    } ).catch(err=>console.log(err))
            // .then(r => console.log(r.data)).catch(err=>console.log(err))
            // console.log(h);
            // commit('getHistory',apihistory);
        },
        hh(){
            //  this.$router.push({name:'invoice-page'});
             this.$router.push('/invoicepage')
        }
    },
    mounted(){
        this.fetchHistory();
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