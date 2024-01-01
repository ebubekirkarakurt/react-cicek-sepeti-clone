import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface CategoryState {
    value: string
}
  
  
const initialState: CategoryState = {
    value: "Tüm Kategoriler",
}

export const selectCategory = createSlice({
    name:'selectCategory',
    initialState,
    reducers:{
        category: (state, action:  PayloadAction<string>) => {
            state.value = action.payload
        }
    }
})

export const { category } = selectCategory.actions

export const selectCount = (state: RootState) => state.selectCategory.value

export default selectCategory.reducer