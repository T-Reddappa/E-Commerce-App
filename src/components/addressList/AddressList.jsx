import React, { useContext } from "react";
import AddressModal from "../addressModal/AddressModal";
import { AuthContext } from "../../context/authContext";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { ProductContext } from "../../context/productContext";
import { useState } from "react";
import { AddressContext } from "../../context/addressContext";
import "./addressList.css";

const AddressList = () => {
  const { currentUser, token } = useContext(AuthContext);
  const { productState } = useContext(ProductContext);

  const { addressState, addressDispatch } = useContext(AddressContext);
  // const [showAddressModal, setShowAddressModal] = useState(false);
  return (
    <div className="addresses-container">
      <button
        className="add-address-btn"
        onClick={() =>
          addressDispatch({ type: "SHOW_ADDRESS_MODAL", payload: true })
        }
      >
        <AddOutlinedIcon style={{ fontSize: "14px" }} />
        Add a new address
      </button>
      <div>
        {addressState.addresses.map(
          ({ _id, name, street, city, state, pincode, mobile }) => (
            <div key={_id} className="address-box">
              <p>{name}</p>
              <p>{street}</p>
              <p>{city}</p>
              <p>{state}</p>
              <p>{pincode}</p>
              <p>Phone : {mobile}</p>

              <button
                onClick={() =>
                  addressDispatch({
                    type: "REMOVE_ADDRESS",
                    payload: _id,
                  })
                }
              >
                Delete
              </button>
            </div>
          )
        )}
      </div>

      {addressState.showAddressModal && <AddressModal />}
    </div>
  );
};

export default AddressList;
