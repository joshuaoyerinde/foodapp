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
    //for the admin part
    async fetchUsers({commit},adminRes){
        let baseurl = "http://localhost/foodApp/foodend/admin/getRegisteredUsers.php";
        adminRes = await Axios.get(baseurl).then(adminRes => {
            console.log(adminRes.data)
        }).catch(err => console.log(err));
        commit('FETCH_REGISTERED_USERS',adminRes.data)
    }
}
export default actions;