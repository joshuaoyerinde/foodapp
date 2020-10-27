<template>
    <div>
        <h4></h4>
        <v-app-bar app color="#FAFAFA">
        <v-toolbar-title class="headline ml-5">
            <span>FOOd</span>
            <span class="font-weight-light text-danger">APp</span>
        </v-toolbar-title>
        <div class="row justify-content-center">
            <div class="col-md-4 mx-auto">
            </div>
            <router-link to="/carts" tag="button">
                <v-btn text>
                    Carts
                </v-btn>
            </router-link>
             <router-link to="/SignUp-page" tag="button">
                <v-btn text>
                    SignUp
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
         <v-snackbar v-model="snackbar" top class="mt-n5" :timeout="timeout">
            <div v-if="text">{{text.message}}</div>
            <template v-slot:action="{ attrs }">
                <v-btn :style="{color:'red'}" color="blue" text v-bind="attrs" @click="snackbar = false">
                    Close
                </v-btn>
            </template>
        </v-snackbar>
        <v-container class="padding-loginPage">
            <v-card raised width="510px" height="350px" class="mx-auto">
                <v-card-title class="text-center">
                    <h5 class="mt-4">Login</h5>
                </v-card-title>
                <v-card-text>
                  <v-form>
                    <v-text-field v-model="email" color="#E53935" type="text" prepend-icon="mdi-account-circle"></v-text-field>
                    <v-text-field v-model="password" color="#E53935" 
                    :type="showPass?'text': 'password'" 
                    :append-icon="showPass?'mdi-eye':'mdi-eye-off'"
                    @click:append="showPass = !showPass"
                    class="mt-3" prepend-icon="mdi-lock"></v-text-field>
                    <v-spacer></v-spacer>
                    <router-link to="/SignUp-page" tag="button">
                         <v-btn text class="text-lowercase">Create  account</v-btn>
                    </router-link>
                    <v-btn type="button" @click="loginFunc" color="#E53935" class="float-md-right text-white mt-4">Login</v-btn>
                  </v-form>
                  <v-progress-linear :indeterminate="load" stream absolute bottom color="#E53935" v-show="load"></v-progress-linear>
                </v-card-text>
            </v-card>
        </v-container>
        <v-footer class="mt-5" color="lighten-1" padless>
        <v-row justify="center" :style="{background:'#FAFAFA'}" no-gutters class="justify-content-center">
        
          <v-col class="#F44336 lighten-2 py-4 text-center white--text" :style="{background:'#FFFFFF'}" cols="12">
            {{ new Date().getFullYear() }} —<em><strong><span :style="{fontWeight:'900',letterSpacing:'4px'}">FOOd</span></strong></em><span :style="{fontWeight:'900',color:'#E53935',textShadow:'1px 1px 2px black'}">APp</span>
          </v-col>
      </v-row>
      </v-footer>
    </div>
</template>
<script>
import Axios from 'axios'
export default {
    name:"LoginPage",
    data:() => ({
        email:'',
        password:'',
        snackbar: false,
        text:[],
        timeout:5000,
        showPass: '',
        load:false,
        //  links: ['Home','About Us','Team','Login','Blog','Contact Us',],
    }),
    methods:{
        loginFunc (){
            const url = "http://localhost/foodApp/foodend/users/loginusers.php";
            let formLogin = new FormData();
            formLogin.append('email',this.email);
            formLogin.append('password',this.password);
            Axios.post(url,formLogin).then(res => {
                this.text=res.data;
                if(this.text.success == false){
                    this.load = true;
                    setTimeout(() => {
                        this.load = false;
                        this.snackbar = true
                        this.text = res.data;
                        console.log(this.text);
                    }, 3000);
                }else{
                    this.load = true;
                    setTimeout(() => {
                        this.load = false;
                        console.log(this.text.message);
                        this.$router.push('/details/'+ this.text.message);
                    }, 2000);
                    // let o = this.text.find(m => m.message);
                    // console.log(o);
                }
            }).catch(err => console.log(err))
        }
    }
}
</script>
<style lang="css">
    .padding-loginPage{
        margin-top: 120px;
    }
</style>