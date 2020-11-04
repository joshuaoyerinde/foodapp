<template>
    <v-container>
        <h6>USers-Details</h6>
        <v-card>
            <v-card-title>
                Nutrition
                <v-spacer></v-spacer>
                <v-text-field v-model="search" append-icon="mdi-magnify" 
                label="Search" single-line hide-details>
                </v-text-field>
            </v-card-title>
            <v-data-table fixed-header border-collapse="collapse"
            :headers="headers"
            :items="getUsersToAdmin"
            :search="search">
            </v-data-table>
        </v-card>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut quae eum earum enim nisi rem placeat ipsam distinctio, 
        alias, eaque modi itaque, omnis nobis! Iure commodi atque animi ea. Pariatur?
    </v-container>
</template>
<script>
import Axios from 'axios';
// import {mapActions, mapGetters} from 'vuex';
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Name',
            align: 'start',
            sortable: false,
            value:'name'
          },
         { text: 'Email', value:'users_email'},
        ],
        getUsersToAdmin: [
            {
                name:'',
                users_email:''
            }
        ],
      }
    },
    // computed: mapGetters(['getUsersToAdmin']),
    methods:{
        async fetchUsers(){
        let baseurl = "http://localhost/foodApp/foodend/admin/getRegisteredUsers.php";
         await Axios.get(baseurl).then(resapi => {
            this.getUsersToAdmin = resapi.data;
        }).catch(err => console.log(err))
    }
        // registered(){
        //    console.log(this.getUsersToAdmin);
        // }
    },
    mounted(){
        this.fetchUsers();
        // this.registered();
    }

  }
</script>
<style lang="css">
    
</style>