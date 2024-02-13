import {createSlice} from "@reduxjs/toolkit"

// Each Slice will have its own reducer
const cartSlice = createSlice({ // 1. slice
    // conifg of the slice
    name: 'cart',
    initialState: {
        items: [], // state
    } , 
    reducers: {
        addItem: (state , action) => { // takes in 2 parameters
            // will modify the state based on the action (Mutating the state directly) 
            state.items.push(action.payload);

            // Earlier u cannot mutate the state u have to add and return the state
            // now it does all this internally -- using the immer library
        },
        removeItem: (state , action) => {
            state.items.pop;
        },
        clearCart: (state , action) => {
            // state here will become the local variable  
            state.items.length = 0; // 'here', make the array empty

            // ELse return []; will also work
            // Else return {items : []};
        }
    }
});

// Default Syntax to use
export const {addItem , removeItem , clearCart } = cartSlice.actions; // 2. action

export default cartSlice.reducer; // 3. reducer