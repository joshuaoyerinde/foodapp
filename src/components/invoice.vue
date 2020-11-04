<template>
    <div>
        <v-app-bar outlined app color="#FAFAFA">
            <v-toolbar-title class="headline ml-5">
                <span>FOOd</span>
                <span class="font-weight-light text-danger">APp</span>
            </v-toolbar-title>
            <div class="col-md-4 mx-auto">
            </div>
            <v-btn text @click="hh">
                    Hoistory
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn class="mr-5" icon @click="usersProfile">
                <i class="fa fa-user" :style="{fontSize:'20px'}"></i>
            </v-btn>
        </v-app-bar>
        <v-container class="mt-5">
            <router-view></router-view>
        </v-container>
    </div>
</template>
<script>
// import uesersprofileVue from './uesersprofile.vue'
export default {
    name:"Invoice",
    data(){
        return{
            // id:this.$route.params.id
        }
    },
    methods:{
        hh(){
            // let u = this.$route.params.id
            // console.log(u)
            this.$router.push({name:'user-account'})
            //  this.$router.push('');
        },
        aa(){
            this.$router.push({name:'thank-you'})
        },
        usersProfile(){
            this.$router.push({name:'user-account'})
        }
    },
    created(){
        console.log(this.id)
    }
    
}
</script>
<style lang="css" scoped>
    
</style>