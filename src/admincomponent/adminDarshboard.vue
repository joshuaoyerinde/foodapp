<template>
    <div>
        <v-container>
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis similique totam temporibus placeat inventore perferendis nam, soluta, rerum reprehenderit eius expedita amet exercitationem deleniti nostrum, id dolor pariatur natus adipisci?
            <v-row>
                <v-col cols="12" sm="4">
                    <v-card shaped>
                        <v-btn large icon class="ml-3 mt-2" color="#E53935">
                            <v-icon>mdi-account</v-icon>
                        </v-btn>
                        <v-card-title v-if="total">Total:{{(total.users)}}</v-card-title>
                        <v-card-text>
                            <v-sparkline class="mt-n5"
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
                                auto-draw>
                            </v-sparkline>
                           <h6 :style="{color:'#E53935'}">Users</h6> 
                        </v-card-text>
                    </v-card>
                </v-col>
                 <v-col cols="12" sm="4">
                    <v-card shaped>
                    <v-btn large icon class="ml-3 mt-2" color="#E53935">
                        <v-icon large>mdi-basket</v-icon>
                    </v-btn>
                        <v-card-title v-if="totalcommands">Total:
                        {{(totalcommands.commands)}}</v-card-title>
                        <v-card-text>
                            <v-sparkline class="mt-n5"
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
                            auto-draw>
                            </v-sparkline>
                            <h6  :style="{color:'#E53935'}">Commads</h6> 
                        </v-card-text>
                    </v-card>
                </v-col>
                 <v-col cols="12" sm="4">
                    <v-card shaped>
                    <v-btn large icon class="ml-3 mt-2" color="#E53935">
                        <v-icon x-large>mdi-food</v-icon>
                    </v-btn>
                        <v-card-title v-if="totalfoods">Total:{{(totalfoods.foods)}}</v-card-title>
                        <v-card-text>
                             <v-sparkline class="mt-n5"
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
                            auto-draw>
                            </v-sparkline>
                            <h6  :style="{color:'#E53935'}">Foods</h6> 
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="8">
                    <v-card outlined>
                    <v-card-title>sparkline Goods</v-card-title>
                       <v-card-text>
                            <LineThrough/>
                       </v-card-text> 
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import LineThrough from './line';
import Axios from 'axios';
const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
]

export default {
    name:"AdminDarshboard",
    
    data() {
        return {
            total:'',
            totalcommands:'',
            totalfoods:'',
            width: 1.0,
            radius: 8,
            padding: 1,
            lineCap: 'round',
            gradient: gradients[5],
            value:  [ 1, 3, 5, 0, 0, 1, 5, 2, 9, 0],
            gradientDirection: 'top',
            gradients,
            fill: false,
            type: 'trend',
            autoLineWidth: false,
            // f:''
        }
    },
    components:{
        LineThrough
    },
    created(){
        // this.total.forEach(element => {
        //    console.log(element.numcommads)
        // });
        let url = "http://localhost/foodApp/foodend/admin/totalnumber.php";
        Axios.get(url).then(api => {
            this.total = api.data[0];
        }).catch(err => console.log(err));

        let urldetails = "http://localhost/foodApp/foodend/admin/totalcommands.php";
        Axios.get(urldetails).then(apicommands => {
            this.totalcommands = apicommands.data[0];
        }).catch(err => console.log(err));

        let urlfoods = "http://localhost/foodApp/foodend/admin/totalfood.php";
        Axios.get(urlfoods).then(apifoods => {
            this.totalfoods = apifoods.data[0];
        }).catch(err => console.log(err));
    }

}
</script>
<style lang="css">
    
</style>
