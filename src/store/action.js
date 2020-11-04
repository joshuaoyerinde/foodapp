import Axios from 'axios';
const actions = {
    async fetchProduct({commit},res){
        let url = 'http://localhost/foodApp/foodend/users/fetchproduct.php';
        res = await Axios.get(url);
        commit('FECTH_PRODUCT',res.data)
        // console.log(res.data);
    },
    increase({commit},itemsPro){
        // console.log(itemsPro);
        commit('ADD_CARTS',itemsPro)
        // console.log(itemsPro)
    // this.fetchProduct();
    },
    async clearCart({commit}){
        commit('CLEAR_CARTS')
    },
    orderTot({commit}){
        commit('toT');
    },
    cartsTotal({commit}){
        commit('ADD_TOTAL');

    },
    // async fetchHistory({commit}){
    //     let id = this.$route.params.id;
    //     let urlhist = `http://localhost/foodApp/foodend/users/tet.php?id=${id}`;
    //     let fomid = new FormData();
    //     fomid.append('id',id);
    //     let apihistory = await Axios.get(urlhist,fomid).then(r => console.log(r.data)).catch(err=>console.log(err))
    //     // .then(r => console.log(r.data.token)).catch(err=>console.log(err))
    //     // console.log(h);
    //     commit('getHistory',apihistory);
    // },
    //for the admin part
    async fetchCommands({commit},apicommands){
        let baseurl = "http://localhost/foodApp/foodend/admin/fetchCommands.php";
        apicommands = await Axios.get(baseurl)
        commit('FETCH_COMMANDS',apicommands.data)
    }
}
export default actions;