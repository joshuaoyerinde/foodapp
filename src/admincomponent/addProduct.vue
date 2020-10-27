<template>
    <div>
         <!--for snackbar-->  
        <v-snackbar v-model="snackbar" class="mt-n5" :timeout="timeout">
            <div v-if="resp">{{resp.message}}</div>
            <template v-slot:action="{ attrs }">
                <v-btn :style="{color:'red'}" color="blue" text v-bind="attrs" @click="snackbar = false">
                    Close
                </v-btn>
            </template>
        </v-snackbar>
        <v-container class="mt-3">
            <!-- <h4>vhfguihrguijirhui</h4> -->
            <v-card shaped>
            <v-card-title class="text-center"><div class="ml-2">{{productTitle}}</div></v-card-title>
                <v-card-text>
                   <v-row  class="">
                     <v-col cols="12" md="8">
                        <v-card raised class="" height="260">
                          <v-card-text>
                            <v-form>
                                <v-row>
                                    <v-col cols="12" md="6">
                                        <v-text-field color="#EF5350" label="Food Name" v-model="productname" prepend-icon="mdi-pencil"/>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field color="#EF5350" type="time" v-model="producttime" label="Time" blue prepend-icon="mdi-timetable"/>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field color="#EF5350" prefix="$" label="Price" v-model="productprice" blue prepend-icon="mdi-mail"/>
                                    </v-col>                                    
                                    <v-col cols="12" md="6">
                                        <v-file-input color="#EF5350" label="File input"  name="file" type="file" id='file' @change="productUpload($event)" prepend-icon="mdi-camera"></v-file-input>
                                    </v-col>
                                </v-row>
                                <div class="clear-fix"></div>
                                <div>
                                    <v-btn color="#F44336" class="mt-n2 text-white float-right" @click="addProduct" type="button">Add Food</v-btn>
                                </div>
                            </v-form>
                          
                          </v-card-text>
                        </v-card>
                     </v-col>
                     <v-col cols="12" md="4" sm="4" class="d-none d-lg-block">
                        <v-card height="260">
                            <div class="side-ovelay-image">
                                <div class="side-overlay">
                                    <div class="side-overlay-text text-white">Dish You The Good <br> Side Of the Food</div>
                                </div>
                            </div>
                        </v-card>
                     </v-col>
                   </v-row>
                </v-card-text>
            </v-card>
        </v-container>
    </div>
</template>
<script>
import Axios from 'axios';
// import Axios from 'axios' 
export default {
    name:"AddProduct",
    data:()=>({
       productTitle:"Add Product Form",
       productFile:[],
       productname:'',
       producttime:'',
       productprice:'',
    //    message :'dhuvuvuvisviusdvuivvui',
       text:'File Upload Successfully',
       snackbar: false,
       timeout:5000,
       resp:[]
    }),
    methods:{
        productUpload(event){
            this.productFile = event
            console.log(this.productFile);
        },
        addProduct(){
            //  const message ='dhuvuvuvisviusdvuivvui';
            if(!this.productFile.type) return  alert('not match with the type'); 
            const basepath ="http://localhost/foodApp/foodend/admin/addproduct.php";
            let formDT = new FormData();
            formDT.append('foodname', this.productname);
            formDT.append('availabletime', this.producttime);
            formDT.append('foodprice', this.productprice);
            formDT.append('file', this.productFile);
             Axios.post(basepath,formDT,{
                 headers: {
                        'Content-Type': 'multipart/form-data'
                    }
             }).then(res =>{
                     if (res.data){
                         this.snackbar = true;
                         this.resp = res.data
                        console.log(this.resp) 
                        // this.text = ''
                    }else{
                        // this.text ='not Succesful';
                        //  console.log(res.message);
                    }
             }).catch(err => console.log(err));
        }

    }
}
</script>
<style lang="css">
    .side-overlay{
        background-color: rgba(0, 0, 0, 0.712);
        height: 260px;
        position: relative;
    }
    .side-ovelay-image{
         background-image: url('../assets/food.jpg');
         background-size: cover;
    }
    .side-overlay-text{
        font-weight: 900;
        font-size: 22px;
        position: absolute;
        text-align: center;
        margin-top: 100px;
        font-family: aharoni;
         margin-left: 76px;
    }
</style>