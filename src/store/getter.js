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
    getCommands(state){
        return state.commands;
    },
    // getInvoice(state){
    //     return state.invoice;
    // }
    // gethistory(state){
    //     return state.usershistory;
    // }
};
export default getters