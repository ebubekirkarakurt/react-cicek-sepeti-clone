import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

interface VisibilityType {
  visibility: boolean;
}

const initialState: VisibilityType = {
  visibility: true,
};

export const sideBarVisibility = createSlice({
  name: 'sideBarVisibility',
  initialState,
  reducers: {
    setVisibility: (state, action: PayloadAction<boolean>) => {
      state.visibility = action.payload;
    },
  },
});

export const { setVisibility } = sideBarVisibility.actions;

export const selectVisibility = (state: RootState) => state.sideBarVisibility;

export default sideBarVisibility.reducer;
