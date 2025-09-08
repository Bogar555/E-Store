import axios, { AxiosInstance } from "axios";
import * as Constants from "../Constants/ConstantValues";
const ipAddress = Constants.IpAddress;

export class HttpLogin {
    public static axios(): AxiosInstance {
        return axios.create({
            baseURL: ipAddress
        });
    }
}