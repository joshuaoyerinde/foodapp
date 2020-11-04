
const mutations = {
    ADD_CARTS(state,itemsPro){
        // let dGet;
        let food = {...itemsPro, quantity: 1};
        console.log(food)
        // localStorage.hasOwnProperty('SAVECATS')
        // if(localStorage.SAVECATS){
            // let index
            // dGet=JSON.parse(localStorage.getItem('SAVECATS'));
            let checkCart = state.cart.find(f =>f.product_id==itemsPro.product_id);
            if(checkCart){
                let index = state.cart.indexOf(checkCart);
                console.log(index);
                state.cart[index].quantity++;
            //    state.cart[index].total =state.cart[index].quantity * state.cart[index].product_price;
                // console.log(state.cart[index].total);
                //    let total = (parseInt (state.cart[index].product_price) * parseInt (state.cart[index].quantity));
                // food = {...itemsPro,totorder:tot};
            } else{
                state.cart = [...state.cart,food]
            }
            // food.totalorder = (parseInt (state.cart[index].product_price) * parseInt (state.cart[index].quantity));
            localStorage.setItem('SAVECATS',JSON.stringify(state.cart))
    },
    toT(state){
       let arr = state.cart.filter(q => q.product_price);
        console.log(arr);
        var qty = new Array();
        for (let i = 0; i < arr.length; i++) {
            qty = [...qty, arr[i].product_price*arr[i].quantity];
        }
        state.totalorder = qty.reduce(function(x,y) {
        return x+y;
        });
       console.log(state.totalorder);
    //    state.cart = [state.cart,state.totalorder]
    //    localStorage.setItem('SAVECATS',JSON.stringify(state.cart));
    },
    // ADD_TOTAL(state){
    //     let checkCart = state.cart.find(f =>f.product_id==itemsPro.product_id);
    //      state.cart.filters(r => r.product_price);
    //     checkCart;
    //         state.cart.forEach(element => {
    //                 element.product_price * element.quantity;
    //         });
    // },
    CLEAR_CARTS(state){
        return state.cart=0;
    },
    FECTH_PRODUCT(state,resApiFromAction){
        state.Products = resApiFromAction;
    },
    // getHistory(state,reshistapi){
    //     state.usershistory = reshistapi;
    // },
    ///.....for  admin  getting registered deatails from the admin
    FETCH_COMMANDS(state,cmm){
        state.commands = cmm;
    }
}
export default mutations