<template>
    <div>
        <v-container class="mt-5">
        <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                <div class="modal-header">
                    <h6 class="modal-title">Thanks for choosing us</h6>
                    <v-btn icon data-dismiss="modal"><i class="fa fa-close"></i></v-btn> 
                </div>
                    <div class="modal-body">
                        <v-row>
                            <v-col cols="12" md="6">
                                <v-text-field color="#E53935" 
                                prepend-inner-icon="mdi-phone" v-model="gg.phone" label="contact"></v-text-field>
                            </v-col>
                             <v-col cols="12" md="6">
                                <v-text-field color="#E53935"  v-model="gg.address" prepend-inner-icon="mdi-map-marker" label="address"></v-text-field>
                            </v-col>
                        </v-row>
                    </div>
                    <div class="modal-footer">
                     <v-btn type="button" class="text-white" data-dismiss="modal" @click="saveEdit(gg)" color="#E53935">Save</v-btn>
                    </div>
                </div>
            </div>
        </div>
            <v-row>
                <v-col cols="12" md="7" sm="7" lg="7" xl="7">
                    <v-card  outlined>
                        <v-card-text>
                            <v-row>
                                <v-col cols="12" md="12" v-for="details in  getCommads" :key="details.id">
                                <div>
                                    <h6>Contact: <span class="ml-5" :style="{fontFamily:'bignoodletitling',letterSpacing:'3px'}">{{details.phone}}</span></h6>
                                </div>
                                <hr :style="{width:'100%'}" class="mt-4"/>
                                <div>
                                    <h6 >Address:<span class="ml-5" :style="{fontFamily:'bignoodletitling',letterSpacing:'3px'}">{{details.address}}</span></h6>
                                    <!-- <v-spacer></v-spacer> -->
                                    <v-btn text data-toggle="modal" data-target="#myModal"  color="#E53935" @click="editAdrress(details)" class="float-right mt-n4">
                                        Edit
                                    </v-btn>
                                </div>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="7" sm="7" lg="7" xl="7">
                    <v-card  outlined>
                        <v-card-text>
                            <h6 :style="{fontFamily:'bignoodletitling',letterSpacing: '6px'}">Thanks for choosing us</h6> 
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>

            <v-btn class="" outlined color="#E53935" text large @click="saveCarts">Pay Now</v-btn>
            <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, autem nihil. Sit laboriosam ex suscipit nihil laborum obcaecati praesentium libero! Quo voluptates molestias neque aliquid ad fugiat iure minima perspiciatis? --> 
        </v-container>
    </div>
</template>
<script>
import Axios from 'axios';
export default {
    name:"Details",
    data:() =>({
        getCommads:[],
        info:'',
        gg: {},
    }),
    methods:{
        saveCarts(){
            let id = this.$route.params.userid;
            let url = "http://localhost/foodApp/foodend/users/savecarts.php"
            let food =localStorage.getItem('SAVECATS');
            let formDat = new FormData()
            formDat.append('foods', food)
            formDat.append('userid',id)
            console.log(food);
            Axios.post(url,formDat).then(res=>
            {
               this.info = res.data
               console.log(this.info);
            if(this.info.message){
            //    this.$router.push('/payment-loading/' + id)
               this.$router.push({name:'payment-loading',params:{id}});
            }
            }).catch(err => console.log(err));
        },
        editAdrress(a){
            let {id,address,phone} = a;
             this.gg = {id,address, phone}
            console.log(this.gg)
        },
        saveEdit(x){
           let update = {
               'id': x.id,
               'phone': x.phone,
               'address': x.address
           }
           console.log(update);
        let updurl ="http://localhost/foodApp/foodend/users/updatecommads.php";
           Axios.post(updurl,update).then(re =>console.log(re.data)).catch(err => console.log(err));
        }
    },
    mounted(){
        // this.carts();
        let userid = this.$route.params.userid;
        let baseurl = `http://localhost/foodApp/foodend/users/fetchcommads.php?id=${userid}`;
        Axios.get(baseurl).then(r => {
           this.getCommads = r.data;
           console.log(this.getCommads);
        })

    }
}
</script>
<style lang="css">
    .border-left{
       border-left: 4px;
       width: 30px;
       height: 50vh;
    }
</style>