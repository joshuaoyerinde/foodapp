import Vue from 'vue';
import Vuex from 'vuex';
import myModules from './modules'
Vue.use(Vuex);

const myVuex = new Vuex.Store({
    modules:{
        myModules
    }
})
export default myVuex;