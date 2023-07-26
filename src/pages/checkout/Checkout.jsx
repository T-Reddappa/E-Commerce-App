import React from "react";
import "./checkout.css";
import { useContext } from "react";
import { AddressContext } from "../../context/addressContext";
import OrderDetails from "../../components/orderDetails/OrderDetails";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import AddressModal from "../../components/addressModal/AddressModal";

const Checkout = () => {
  const {
    addressState: { addresses, showAddressModal, selectedAddressId },
    addressDispatch,
  } = useContext(AddressContext);
  document.title = "Checkout | Vestidos";

  return (
    <div className="checkout-page-container">
      <h3 className="checkout-header">Checkout</h3>
      <div className="checkout-wrapper">
        <div className="checkout-address">
          <div className="address-head">Select Address</div>

          <div className="address-list">
            {addresses.length ? (
              addresses.map(
                ({
                  _id,
                  street,
                  name,
                  city,
                  pincode,
                  state,
                  country,
                  phone,
                }) => (
                  <div>
                    <label className="address" key={_id}>
                      <input
                        type="radio"
                        name="address"
                        checked={selectedAddressId === _id}
                        onChange={() =>
                          addressDispatch({
                            type: "SET_SELECTED_ADDRESS_ID",
                            payload: _id,
                          })
                        }
                      />
                      <div>
                        <p className="address-name">{name}</p>
                        <p>{street}</p>
                        <p>
                          {city}-{pincode}
                        </p>
                        <p>
                          {state}, {country}
                        </p>
                        <p>{phone}</p>
                      </div>
                    </label>
                  </div>
                )
              )
            ) : (
              <div>
                <p>No Address available</p>
              </div>
            )}
          </div>
          <button
            className="add-address-btn cart-page-add-address-btn"
            onClick={() =>
              addressDispatch({
                type: "SHOW_ADDRESS_MODAL",
                payload: true,
              })
            }
          >
            <AddOutlinedIcon style={{ fontSize: "14px" }} />
            Add a new address
          </button>
        </div>

        {/* price-details */}

        <div className="checkout-price-details-box">
          <OrderDetails />
        </div>
        <div>{showAddressModal && <AddressModal />}</div>
      </div>
    </div>
  );
};

export default Checkout;
