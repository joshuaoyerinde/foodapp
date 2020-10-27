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
             <router-link to="/loginpage" tag="button">
                <v-btn text>
                    Login
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
    </div>
</template>
<script>
export default {
    name:"NavUsers"
}
</script>
<style lang="css" scoped>
    
</style>