import { createAsyncThunk } from "@reduxjs/toolkit";
import { HttpLogin } from "../../utils/Https";
import { Signup } from "../../assets/data/signupInterfaceData";

export interface AddSignupResponse {
  success: boolean;
  data: any;
} 

export const addSignup = createAsyncThunk<
  AddSignupResponse, 
  Signup, 
  { rejectValue: string } >
(
  "auth/addSignup",
  async (inputData: Signup, { rejectWithValue }) => {
    try {
      const response = await HttpLogin.axios().post(
        `/api/user/signup/register`,
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
      console.log("response",response)
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error?.message || "Status Update Failed");
    }
  }
);
