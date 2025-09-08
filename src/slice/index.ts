import { combineReducers } from "@reduxjs/toolkit";
import DeliveryAddressReducer from "./DeliveryAddress/reducer";
import SignupReducer from "./login/reducer";

const rootReducer = combineReducers({
    DeliveryAddress: DeliveryAddressReducer,
    Signup: SignupReducer

});

export default rootReducer;