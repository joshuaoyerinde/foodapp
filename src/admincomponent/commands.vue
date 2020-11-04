<template>
  <v-simple-table fixed-header
    height="500px" border-collapse="collapse">
    <template v-slot:default>
      <thead>
        <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Phone</th>
            <th class="text-left">City</th>
            <th class="text-left">address</th>
            <th class="text-left">status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cmd in getCommands" :key="cmd.id">
          <td>{{ cmd.first_name }} {{ cmd.last_name }}</td>
          <td>{{cmd.phone}}</td>
          <td>{{cmd.city}}</td>
          <td>{{cmd.address}}</td>
          <td>{{cmd.status}}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
import {mapActions,mapGetters} from 'vuex';
  export default {
    data () {
      return {
          commands :[]
      }
    },
    computed:{ ...mapGetters(['getCommands'])},
    
    methods:{...
        mapActions(['fetchCommands']),
            getdetails(){
                console.log(this.getCommands);
            }
    },
    mounted(){
        this.getdetails()
        this.fetchCommands()
    //    console.log(this.getcommads)
    }
  }
</script>