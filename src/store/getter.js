const getters ={
    getCart(state){
        return state.cart
    },
    getProduct(state){
        return state.Products
    },
    // getTotalPrice(state){
    //     return state.total.price
    // },
    getTotOrder(state){
        return state.totalorder;
    },
    getUsersToAdmin(state){
        return state.getusers;
    }
};
export default getters