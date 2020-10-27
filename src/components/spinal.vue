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
        clear:''
    }),
    beforeDestroy(){
      clearInterval ( this.interver);
    },
    mounted() {
        // let id = this.$route.params.userid;
      this.interver = setInterval(() => {
            if(this.value == 100){
                // return (this.value = 0);
                this.clear = localStorage.clear;
                localStorage.setItem('SAVECATS',JSON.stringify(this.clear));
                this.$router.push('/usersAccount');
                // alert(id);
            }
                 this.value += 5;
        }, 1000);
    },

}
</script>
<style lang="css">
    .loading-top{
        margin-top: 180px;
    }
</style>