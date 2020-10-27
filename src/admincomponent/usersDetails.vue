<template>
    <v-conatiner>
        <h6>USers-Details</h6>
        <v-card>
            <v-card-title>
                Nutrition
                <v-spacer></v-spacer>
                <v-text-field v-model="search" append-icon="mdi-magnify" 
                label="Search" single-line hide-details>
                </v-text-field>
            </v-card-title>
            <v-data-table fixed-header
            :headers="headers"
            :items="getUsers"
            :search="search">
            </v-data-table>
        </v-card>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut quae eum earum enim nisi rem placeat ipsam distinctio, 
        alias, eaque modi itaque, omnis nobis! Iure commodi atque animi ea. Pariatur?
    </v-conatiner>
</template>
<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Name', value: 'calories' },
          { text: 'Email', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        getUsers: [],
      }
    },
    methods:{
        
    }
  }
</script>
<style lang="css">
    
</style>