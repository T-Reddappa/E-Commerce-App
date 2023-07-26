import React from "react";
import { useContext } from "react";

import { v4 as uuid } from "uuid";
import "./addressModal.css";
import { ProductContext } from "../../context/productContext";

import { useState } from "react";
import { AddressContext } from "../../context/addressContext";

const AddressModal = () => {
  const { addressDispatch } = useContext(AddressContext);

  const [addressInputs, setAddressInputs] = useState({
    _id: uuid(),
    name: "",
    houseNumber: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
  });
  const addressFormInputHandler = (e) => {
    const { name, value } = e.target;
    setAddressInputs((prevAddressInputs) => ({
      ...prevAddressInputs,
      [name]: value,
    }));
  };

  const addAddressHandler = (e) => {
    e.preventDefault();
    addressDispatch({
      type: "ADD_NEW_ADDRESS",
      payload: addressInputs,
    });
    addressDispatch({
      type: "SHOW_ADDRESS_MODAL",
      payload: false,
    });
  };

  return (
    <div className="address-modal">
      <h3>Add New Address</h3>
      <form onSubmit={addAddressHandler}>
        <div className="field input-field">
          <input
            type="text"
            placeholder="Name"
            name="name"
            // value={addressFormData.name}
            className="input"
            onChange={addressFormInputHandler}
            required
          />
        </div>
        <div className="field input-field">
          <input
            type="text"
            placeholder="Street"
            name="street"
            // value={addressFormData.street}
            className="input"
            onChange={addressFormInputHandler}
            required
          />
        </div>
        <div className="field input-field">
          <input
            type="text"
            placeholder="City"
            name="city"
            // value={addressFormData.city}
            className="input"
            onChange={addressFormInputHandler}
            required
          />
        </div>
        <div className="field input-field">
          <input
            type="text"
            placeholder="pincode"
            name="pincode"
            // value={addressFormData.pincode}
            className="input"
            onChange={addressFormInputHandler}
            required
          />
        </div>

        <div className="field input-field">
          <input
            type="text"
            placeholder="State"
            name="state"
            // value={addressFormData.state}
            className="input"
            onChange={addressFormInputHandler}
            required
          />
        </div>
        <div className="field input-field">
          <input
            type="input"
            placeholder="Country"
            name="country"
            // value={addressFormData.country}
            className="input"
            onChange={addressFormInputHandler}
            required
          />
        </div>
        <div className="field input-field">
          <input
            type="text"
            placeholder="Mobile No."
            name="mobile"
            // value={addressFormData.mobile}
            className="input"
            onChange={addressFormInputHandler}
            required
          />
        </div>

        <div className="address-form-action-btns">
          <div className="field input-field">
            <button type="submit">Add</button>
          </div>
          <div className="field input-field">
            <button
              className="cancel-btn"
              type="button"
              onClick={() =>
                addressDispatch({ type: "SHOW_ADDRESS_MODAL", payload: false })
              }
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddressModal;
