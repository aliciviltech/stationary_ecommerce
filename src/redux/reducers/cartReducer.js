import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems:[]
}
const addItemF = (array, payload) => {
    // let itemFound = false;
    // const updatedArray = array.map((item) => { 
    //     if (item.id === payload.id) {
    //         itemFound = true;
    //         return {...item, quantity:item.quantity+1 };
    //     }
    //     return item;
    // })
    // if(itemFound === false){
    //     return [...array, payload, 'this array'];
    // }
    // return updatedArray;



    let itemFound = false;

    // Update the array in-place if the item is found
    
    array.forEach((item) => {
        if (item.id === payload.id) {
            item.quantity += 1;
            itemFound = true;
        }
    });

    // If the item was not found, add the new item
    if (!itemFound) {
        array.push(payload);
    }

    return [...array];
}
const cartSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers:{
        // addItem:(state,{payload})=>{state.cartItems = [...state.cartItems, payload]},
        addItem: (state,{payload})=>{state.cartItems = addItemF(state.cartItems,payload)},
        removeItem:(state,{payload})=>{state.cartItems = state.cartItems.filter(items=>items.id !== payload)}
    }
})

export const  {addItem, removeItem} = cartSlice.actions;
export default cartSlice.reducer;