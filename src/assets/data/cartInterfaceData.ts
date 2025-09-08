export interface CartAddress {
  id: string;
  name: string;
  phoneNumber: string;
  streetNumber: string;
  district: string;
  state: string;
  pincode: string;
  country: any;
}

export const cartAddressData: CartAddress = {
  id: "",
  name: "",
  phoneNumber: "",
  streetNumber: "",
  district: "",
  state: "",
  pincode: "",
  country: "",
};