<template>
    <div>
        <v-container class="mt-5">
            <h6>#invoice</h6>
            <h1>Thank You</h1>
            <v-simple-table fixed-header height="100px">
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-left">foodName</th>
                            <th class="text-left">price</th>
                            <th class="text-left">quantity</th>
                            <th class="text-left">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Rice</td>
                            <td>$40</td>
                            <td>3</td>
                            <td>120</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-container>
    </div>
</template>
<script>
import Axios from 'axios';
// import kk from '../'
// import {mapActions, mapGetters} from 'vuex';
export default {
    name:'Thankyou',
    data:()=>({
        invoice:''
    }),
    // computed: {...mapGetters(['getInvoice'])
        
    // },
    methods:{
        // ...mapActions(['fetchInvoice']),
        // getInovice(){

        // }
        async fetchInvoice(){
            let id = JSON.parse(localStorage.getItem('id'));
            console.log(id)
            let invoice = `http://localhost/foodApp/foodend/users/tet.php?id=${id}`;
            let invid = new FormData();
            invid.append('id',id);
            await Axios.get(invoice,invid).then(api => {
                this.invoice = api.data;
                console.log(this.invoice)
            }).catch(err => console.log(err))
        },
    },
    mounted() {
        this.fetchInvoice()
        // console.log(this.getInvoice)
    },
}
</script>
<style lang="css">
    
</style>