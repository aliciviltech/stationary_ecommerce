import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems:[],
    AllProductsData:[],
    searchKeyword:'',
}
const addItemF = (array, payload) => {
    let itemFound = false;
    array.forEach((item) => {
        if (item.id === payload.id) {
            item.quantity += 1;
            itemFound = true;
        }
    });

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
        removeItem:(state,{payload})=>{state.cartItems = state.cartItems.filter(items=>items.id !== payload)},
        saveAllProducts:(state, {payload})=>{state.AllProductsData = payload},
        searchReducer:(state,{payload})=>{state.searchKeyword = payload}
    }
})

export const  {addItem, removeItem, saveAllProducts, searchReducer} = cartSlice.actions;
export default cartSlice.reducer;