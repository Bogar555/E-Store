import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addAddress, AddAddressResponse } from "./thunk";

interface AddAddressState {
  addAddressinput: {
    isLoading: boolean;
    items: AddAddressResponse | null;
    error: string | null;
  };
}

const initialState: AddAddressState = {
  addAddressinput: {
    isLoading: false,
    items: null,
    error: null,
  },
};

const addAddressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    resetAddAddressState(state) {
      state.addAddressinput = initialState.addAddressinput;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addAddress.pending, (state) => {
        state.addAddressinput.isLoading = true;
        state.addAddressinput.items = null;
        state.addAddressinput.error = null;
      })
      .addCase(
        addAddress.fulfilled,
        (state, action) => {
          state.addAddressinput.isLoading = false;
          state.addAddressinput.items = action.payload;
          state.addAddressinput.error = null;
        }
      )
      .addCase(
        addAddress.rejected,
        (state, action: PayloadAction<any>) => {
          state.addAddressinput.isLoading = false;
          state.addAddressinput.items = action.payload;
          state.addAddressinput.error = null;
        }
      )
  },
});

export const { resetAddAddressState } = addAddressSlice.actions;
export default addAddressSlice.reducer;
