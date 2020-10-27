<template>
<div>
<v-snackbar v-model="snackbar" top class="mt-5" :timeout="timeout">
    <h6 v-show="text">{{text}}</h6>
     <template v-slot:action="{ attrs }">
        <v-btn :style="{color:'red'}" color="blue" text v-bind="attrs" @click="snackbar = false">
            Close
        </v-btn>
    </template>
</v-snackbar>
  <v-sparkline
    :value="value"
    :gradient="gradient"
    :smooth="radius || false"
    :padding="padding"
    :line-width="width"
    :stroke-linecap="lineCap"
    :gradient-direction="gradientDirection"
    :fill="fill"
    :type="type"
    :auto-line-width="autoLineWidth"
    auto-draw
  ></v-sparkline>
  <!-- <h3>wecome</h3> -->
</div>
</template>
<script>
  const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]

  export default {
    name:"LineThrough",
    data: () => ({
      width: 1,
      radius: 10,
      padding: 8,
      lineCap: 'round',
      gradient: gradients[5],
      value: [1,4,2,0,6,4.5,9,0,6,1,4],
      gradientDirection: 'top',
      gradients,
      fill: false,
      type: 'trend',
      autoLineWidth: false,
      timeout:2000,
      snackbar:false,
      text:'You are welcome'
    }),
    created() {
        if(this.value.length == 11){
            console.log("welcome");
            this.snackbar = true;
        }else{
            console.log('not welcome')
        }
    },
  }
</script>