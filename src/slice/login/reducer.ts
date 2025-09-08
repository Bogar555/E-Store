import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addSignup, AddSignupResponse } from "./thunk";

interface AddSignupState {
  addUserSignup: {
    isLoading: boolean | any;
    items: AddSignupResponse | null;
    error: string | null;
  };
}


const initialState: AddSignupState = {
  addUserSignup: {
    isLoading: false,
    items: null,
    error: null,
  },
};

const addSignupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    resetSignupState(state) {
      state.addUserSignup = initialState.addUserSignup;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addSignup.pending, (state) => {
        state.addUserSignup.isLoading = true;
        state.addUserSignup.items = null;
        state.addUserSignup.error = null;
      })
      .addCase(
        addSignup.fulfilled,
        (state, action) => {
          state.addUserSignup.isLoading = false;
          state.addUserSignup.items = action.payload;
          state.addUserSignup.error = null;
        }
      )
      .addCase(
        addSignup.rejected,
        (state, action: PayloadAction<any>) => {
          state.addUserSignup.isLoading = false;
          state.addUserSignup.items = action.payload;
          state.addUserSignup.error = null;
        }
      )
  },
});

export const { resetSignupState } = addSignupSlice.actions;
export default addSignupSlice.reducer;
