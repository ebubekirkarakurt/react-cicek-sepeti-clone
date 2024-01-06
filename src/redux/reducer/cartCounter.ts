import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface CounterType{
    value: number,
    cartList: Array<object>
}

const initialState: CounterType = {
    value: 0,
    cartList: []
}

export const cartCounter = createSlice({
    name: 'cartCounter',
    initialState,
    reducers: {
        addCart: (state) => {
            state.value += 1
        },
        clearCart: (state) => {
            state.value = 0
        },
        cartList: (state, action: PayloadAction<Array<object>>) => {
            state.cartList.push(action.payload)
        }
    }
})

export const { addCart, clearCart, cartList } = cartCounter.actions

export const selectCount = (state: RootState) => state.cartCounter.value;

export default cartCounter.reducer;