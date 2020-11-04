<template>
    <div>
        <v-container class="loading-top">
            <v-row  class="justify-content-center">
                <v-col cols="4" md="2" class="mx-auto">
                    <v-progress-circular :rotate="180"
                    :size="100"
                    :width="5"
                    :value="value"
                    color="#F44336">
                    {{ value }}
                    </v-progress-circular>
                    <h6 :style="{color:'#F44336'}" class=""><i>Your order's being proccessed...</i></h6>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    name:'Spinal',
    data:() =>({
        value:0,
        interver:{},
        clear:'',
        // id:''
    }),
    beforeDestroy(){
      clearInterval ( this.interver);
    },
    created() {
        // let id = this.$route.params.userid;
      this.interver = setInterval(() => {
        //   let id = this.$route.params.id
            if(this.value == 100){
                // return (this.value = 0);
                this.clear = '';
                localStorage.setItem('SAVECATS',JSON.stringify(this.clear));
                // this.$router.push('/invoicepage/');
                this.$router.push({name:'thank-you'});
                // console.log(id)
            }
                 this.value += 5;
        }, 1000);
    },
    // created() {
        //  let id = this.$route.params.id
        // console.log(id)
    // },

}
</script>
<style lang="css">
    .loading-top{
        margin-top: 180px;
    }
</style>