<template>
    <div>
    <NavUsers/>
        <v-container class="registerpage-top">
            <v-card width="630px" class="mx-auto"  raised shaped>
                 <v-card-title>
                    <v-progress-linear :indeterminate="load" stream absolute top color="#E53935" v-show="load"></v-progress-linear>
                </v-card-title> 
                <h6 class="text-center" :style="{fontSize:'18px'}">Register</h6>
                <v-card-text>
                    <v-form>
                        <v-row>
                            <v-col cols="12" md="6">
                                <v-text-field :style="{fontSize:'18px'}" color="#E53935" v-model="firstname"
                                required 
                                :error-messages=" fstErrors"
                                @blur="$v.firstname.$touch()" 
                                @input="$v.firstname.$touch()" label="First name" type="text" prepend-icon="mdi-account-circle"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field :style="{fontSize:'18px'}" color="#E53935" v-model="lastname" 
                                :error-messages="lastNameErrors"
                                @blur="$v.lastname.$touch()" 
                                @input="$v.lastname.$touch()"
                                label="Last name" type="text" prepend-icon="mdi-account-circle"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field :style="{fontSize:'18px'}" color="#E53935" v-model="email" 
                                :error-messages="emailErrors"
                                @blur="$v.email.$touch()"
                                @input="$v.email.$touch()" label="Email" type="text" prepend-icon="mdi-email" />
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field :style="{fontSize:'18px'}" color="#E53935" v-model="password"
                                :type="showpass?'text':'password'"
                                :append-icon="showpass?'mdi-eye':'mdi-eye-off'"
                                :error-messages="passErrors"
                                @blur="$v.password.$touch()"
                                @input="$v.password.$touch()"
                                @click:append="showpass = !showpass"
                                 label="password" prepend-icon="mdi-lock" />
                            </v-col>
                        </v-row>
                        <v-spacer></v-spacer>
                    <v-btn @click.prevent="register()" color="#E53935"  class="register-btn ml-4 text-white mb-5 mt-3" type="button">Sign Up</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-container>
        
    </div>
</template>
<script>
import Axios from 'axios';
import NavUsers from './usersnav';
// import validationMixin from 'vuelidate';
import { required,maxLength,email } from 'vuelidate/lib/validators'
export default {
    name:"SignUp-page",
    //  mixins:[validationMixin],
    data:()=>({
        showpass:'',
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        load:false,
    }),
    components:{
        NavUsers
    },
    validations:{
        firstname:{required},
        lastname:{required},
        email:{required,email},
        password:{required,maxLength:maxLength(7)}
    },
    computed:{
        fstErrors () {
            const errors = [];
            if(!this.$v.firstname.$dirty) return errors;
            !this.$v.firstname.required && errors.push("please your first name is required");
            return errors;
        },
         lastNameErrors () {
            const errors = [];
            if(!this.$v.lastname.$dirty) return errors;
            !this.$v.lastname.required && errors.push("please your last name is required");
            return errors;
        },
         emailErrors () {
            const errors = [];
            if (!this.$v.email.$dirty) return errors
            !this.$v.email.email&& errors.push('Must be valid e-mail')
            !this.$v.email.required && errors.push('email is required.')
            return errors
        },
         passErrors () {
            const errors = [];
            if(!this.$v.password.$dirty) return errors;
            !this.$v.password.maxLength && errors.push('pass must be at least 7 characters long');
            !this.$v.password.required && errors.push('password is required');
            return errors;
        },
    },
    methods:{
        register(){
            if (this.firstname.length == 0 || this.lastname.length == 0 || !this.$v.email.email || !this.$v.password.maxLength){
                 this.$v.$touch();
                //  alert("mkdfmkbmlfk")
            }
             else{
                 this.load = true;
                 setTimeout(() => {
                     this.load = false;
                     let basepath="http://localhost/foodApp/foodend/users/registration.php";
                     let formUser = new FormData();
                      formUser.append('firstname',this.firstname);
                      formUser.append('lastname',this.lastname);
                      formUser.append('email',this.email);
                      formUser.append('password',this.password);
                     Axios.post(basepath,formUser).then(res=> res.data).catch(err => console.log(err));
                     this.$v.$reset();
                     this.$router.push('/');
                 }, 4000);
             }
        }
    }
}
</script>
<style lang="css">
    .registerpage-top{
        margin-top: 120px;
    }
    .register-btn{
        justify-self: right;
    }
</style>