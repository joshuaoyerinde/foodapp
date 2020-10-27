<template>
    <div>
         <v-card-title>
                    <v-progress-linear :indeterminate="load" stream absolute top color="#E53935" v-show="load"></v-progress-linear>
        </v-card-title> 
        <v-snackbar v-model="snackbar" top  :timeout="timeout">
            <div v-if="notify">{{notify}}</div>
            <template v-slot:action="{ attrs }">
                <v-btn :style="{color:'red'}" color="blue" text v-bind="attrs" @click="snackbar = false">
                    Close
                </v-btn>
            </template>
        </v-snackbar>
        <v-container class="mt-5">
            <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, autem nihil. Sit laboriosam ex suscipit nihil laborum obcaecati praesentium libero! Quo voluptates molestias neque aliquid ad fugiat iure minima perspiciatis? -->
            <h5 class="mt-3">Contact information</h5>
            <v-list-item class="px-3">
            <v-list-item-avatar>
            <v-img src="../assets/food.jpg"></v-img>
            </v-list-item-avatar>
            <v-list-item-title v-for="n in usersinfo" :key="n.usersid" class="ml-1" :style="{color:'#EF5350',fontWeight:'700',letterSpacing:'2px'}">
                 {{n.first_name +' ' + ' ' + n.last_name}} ({{n.users_email}}) 
            </v-list-item-title>
            </v-list-item>
            <div class="mt-3">
                Billing Address            
            </div>
            <v-row class="mt-3">
            <v-col cols="12" md="4" lg="9">
                <v-form v-if="usersinfo">
                 <v-row>
                    <v-col cols="12" md="5" lg="5">
                        <v-text-field  class="mt-n4" :rules="[rules.required]"
                        v-model="fstname" color="#E53935" label="First Name" filled>
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" md="5" lg="5" class="mt-n4">
                        <v-text-field  color="#E53935" :rules="[rules.required]" v-model="lastname" label="last Name" filled></v-text-field>
                    </v-col>
                     <v-col cols="12" md="5" lg="5" class="mt-n4">
                        <v-text-field  color="#E53935" :rules="[rules.required]" v-model="phone" label="phone Number" filled></v-text-field>
                    </v-col>
                    <v-col cols="12" md="5" class="mt-n4">
                        <v-text-field  color="#E53935" :rules="[rules.required]" v-model="city" label="city" filled></v-text-field>
                    </v-col>
                    <v-col cols="12" md="10" class="mt-n4">
                        <v-text-field  color="#E53935" :rules="[rules.required]" v-model="address" label="Address" filled></v-text-field>
                    </v-col>
                </v-row>
                     <v-btn class="ml-1 text-white" @click.prevent="detailsCommand" color="#EF5350" large>Continue to payment</v-btn>
                </v-form>
            </v-col>
            <v-col cols="12" md="3" class="border-left d-none d-lg-block">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae ipsa delectus laboriosam nulla accusantium. Ipsum sunt, ipsam dolorum quae totam temporibus praesentium, fugiat accusamus ut, corrupti possimus quisquam incidunt beatae.
            </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import Axios from 'axios'
// import Axios from 'axios';
export default {
    name:"Details",
    data:() =>({
        usersinfo:[],
        fstname:'', lastname:'', phone:'', city:'', address:'',
        snackbar: false,
        timeout:3000,
        notify:'',
        rules:{
             required: value => !!value || 'Required.'
        },
        load:false,
    }),

    methods:{
        detailsCommand(){
            if(this.fstname.length == 0 || this.lastname.length == 0 || this.phone.length == 0|| this.city.length == 0){
                this.notify = 'input required';
                this.snackbar = true;
            }else{
                 this.load = true;
                setTimeout(() => {
                    this.load = false;
                    let usersid = this.$route.params.id;
                    let basepath = "http://localhost/foodApp/foodend/users/usersaddress.php";
                    let formdetails = new FormData();
                    formdetails.append('firstname',this.fstname);
                    formdetails.append('lastname',this.lastname);
                    formdetails.append('phone',this.phone);
                    formdetails.append('city',this.city);
                    formdetails.append('address',this.address);
                    formdetails.append('userid',usersid);
                    Axios.post(basepath,formdetails).then(reply => console.log(reply.data))
                    console.log('nice one', usersid);
                    this.fstname ='';
                    this.lastname = '';
                    this.phone ='';
                    this.city= '';
                    this.address= '';
                    this.$router.push('/payment-page/'+ usersid);
                }, 3000);
            }
                    
        }
    },
    created(){
        let id =  this.$route.params.id;
        console.log(id) 
        let url = `http://localhost/foodApp/foodend/users/details.php?id=${id}`;
        // let url = "http://localhost/foodApp/foodend/users/loginusers.php";
        Axios.get(url).then(res =>{
            this.usersinfo = res.data;
          console.log(this.usersinfo); 
        }).catch(err => console.log(err));
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