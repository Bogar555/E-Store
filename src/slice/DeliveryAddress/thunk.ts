import { createAsyncThunk } from "@reduxjs/toolkit";
import { HttpLogin } from "../../utils/Https";
import { CartAddress } from "../../assets/data/cartInterfaceData";

export interface AddAddressResponse {
  success: boolean;
  data: any;
}

export const addAddress = createAsyncThunk<
  AddAddressResponse, // returned type
  CartAddress, // argument type
  { rejectValue: string }
>("address/addAddress", async (inputData: CartAddress, { rejectWithValue }) => {
  try {
    const response = await HttpLogin.axios().post(
      `/api/address/register`,
      inputData,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "*",
          "Access-Control-Allow-Headers": "*",
        },
      }
    );
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error?.message || "Status Update Failed");
  }
});
