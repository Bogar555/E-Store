import "../../css/cart.css";
import { useState } from "react";
import {
  Autocomplete,
  Box,
  Button,
  DialogContentText,
  MenuItem,
  TextField,
} from "@mui/material";
import { Dialog } from "primereact/dialog";
import { useCart } from "../../Constants/CartContext";
import DynamicButton from "../button/button_component";
import { countries } from "../../Constants/countryDropDown";
import { addAddress } from "../../slice/DeliveryAddress/thunk";
import { useDispatch } from "react-redux";
import { cartAddressData } from "../../assets/data/cartInterfaceData";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const dispatch = useDispatch<any>();
  const { cartItems, removeFromCart } = useCart();
  const [open, setOpen] = useState(false);
  const [address, setAddress] = useState(cartAddressData);
  const navigate = useNavigate();
  
  const handleInputChange = async () => {
    navigate("/buy");
    // try {
    //   const response = await dispatch(addAddress(address)).unwrap();
    //   console.log("Address saved:", response);
    //   setOpen(false); 
      
    // } catch (error: any) {
    //   console.error("Failed to save address:", error);
    // }
  };

  console.log("address", address);
  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    return <div className="cart_empty">No items in cart.</div>;
  }
  return (
    <section className="cart_container">
      <h2>Cart Page</h2>
      {cartItems.map((item, index) => {
        const total =
          Number(item.product.price.replace(/[₹,]/g, "")) * item.quantity;

        return (
          <div key={item.product.id} className="cart-item">
            <img
              src={item.product.image}
              alt={item.product.name}
              className="width_90"
            />
            <div>
              <h3>{item.product.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Total: ₹{total}</p>
              <DynamicButton onClick={() => removeFromCart(item.product.id)}>
                Remove
              </DynamicButton>{" "}
              &nbsp;&nbsp;
              <DynamicButton label="Buy" onClick={() => setOpen(true)} />
              <Dialog
                header="Checkout"
                visible={open}
                modal={true}
                className="dialog_content"
                onHide={() => setOpen(false)}
              >
                {open && (
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>
                      <h4>Delivery Address</h4>
                    </div>
                    <div>
                      <div className="dispflex">
                        <div className="bottom15">
                          <TextField
                            name="name"
                            variant="outlined"
                            label="Name"
                            size="small"
                            fullWidth
                            value={address.name}
                            onChange={(e) =>
                              setAddress({ ...address, name: e.target.value })
                            }
                          />
                        </div>{" "}
                        &nbsp;&nbsp;
                        <div className="bottom15">
                          <TextField
                            name="PhoneNumber"
                            variant="outlined"
                            label="PhoneNumber"
                            placeholder="PhoneNumber"
                            size="small"
                            margin="none"
                            fullWidth
                            value={address.phoneNumber}
                            onChange={(e) =>
                              setAddress({ ...address, phoneNumber: e.target.value })
                            }
                          />
                        </div>
                      </div>

                      <div className="dispflex">
                        <div className="bottom15">
                          <TextField
                            name="StreetNumber"
                            variant="outlined"
                            label="StreetNumber"
                            placeholder="StreetNumber"
                            size="small"
                            margin="none"
                            fullWidth
                            value={address.streetNumber}
                            onChange={(e) =>
                              setAddress({ ...address, streetNumber: e.target.value })
                            }
                          />
                        </div>
                        &nbsp;&nbsp;
                        <div className="bottom15">
                          <TextField
                            name="District"
                            variant="outlined"
                            label="District"
                            placeholder="District"
                            size="small"
                            margin="none"
                            fullWidth
                            value={address.district}
                            onChange={(e) =>
                              setAddress({ ...address, district: e.target.value })
                            }
                          />
                        </div>
                      </div>

                      <div className="dispflex">
                        <div className="bottom15">
                          <TextField
                            name="State"
                            variant="outlined"
                            label="State"
                            placeholder="State"
                            size="small"
                            margin="none"
                            fullWidth
                            value={address.state}
                            onChange={(e) =>
                              setAddress({ ...address, state: e.target.value })
                            }
                          />
                        </div>
                        &nbsp;&nbsp;
                        <div className="bottom15">
                          <TextField
                            name="Pincode"
                            variant="outlined"
                            label="Pincode"
                            placeholder="Pincode"
                            size="small"
                            margin="none"
                            fullWidth
                            value={address.pincode}
                            onChange={(e) =>
                              setAddress({ ...address, pincode: e.target.value })
                            }
                          />
                        </div>
                        <div className="bottom15">
                          {/* <Autocomplete
                            id="country-select-demo"
                            sx={{ width: 210 }}
                            options={countries}
                            autoHighlight
                            value={address.country}
                            getOptionLabel={(option) => option.label}
                            renderOption={(props, option) => {
                              const { key, ...optionProps } = props;
                              return (
                                <Box
                                  key={key}
                                  component="li"
                                  sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                                  {...optionProps}
                                >
                                  <img
                                    loading="lazy"
                                    width="20"
                                    srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                    src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                    alt=""
                                  />
                                  {option.label} ({option.code}) +{option.phone}
                                </Box>
                              );
                            }}
                            renderInput={(params: any) => (
                              <TextField
                                {...params}
                                label="Choose a country"
                                size="small"
                                slotProps={{
                                  htmlInput: {
                                    ...params.inputProps,
                                    autoComplete: "new-password",
                                  },
                                }}
                              />
                            )}
                          /> */}
                        </div>
                      </div>
                      <div className="aligncenter">
                        <DynamicButton
                          label="Save"
                          onClick={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </Dialog>
            </div>
          </div>
        );
      })}
    </section>
  );
}
