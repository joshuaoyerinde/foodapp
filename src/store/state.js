const state = {
    cart:[],
    Products: [],
    totalorder: 0,
    commands:[],
    // invoice:[]
    // usershistory:[]
    // quantity:0
};
let carts = JSON.parse(localStorage.getItem('SAVECATS')); 
state.cart= carts?carts:[]
export default state