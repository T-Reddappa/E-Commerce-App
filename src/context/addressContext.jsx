import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { AuthContext } from "./authContext";
import axios from "axios";
import { toast } from "react-hot-toast";

export const AddressContext = createContext();
const initialUserAddress = {
  _id: "",
  name: "",
  street: "",
  city: "",
  state: "",
  pincode: "",
  country: "",
  phone: "",
};
const guestAddress = {
  _id: 1,
  name: "Reddappa",
  street: "1-1",
  city: "Chittoor",
  state: "Andhra Pradesh",
  pincode: "517127",
  country: "India",
  phone: "9494060111",
};
export const initialAddressState = {
  addresses: [guestAddress],
  showAddressModal: false,
  addressFormData: initialUserAddress,
  addressFormError: {
    pincodeError: false,
    mobileError: false,
  },
  selectedAddressId: null,
};

export const addressReducer = (state, action) => {
  switch (action.type) {
    case "DISPLAY_ADDRESSES":
      return {
        ...state,
        addresses: action.payload,
        selectedAddressId: action.payload ? action.payload[0]?._id : null,
      };
    case "SHOW_ADDRESS_MODAL":
      return { ...state, showAddressModal: action.payload };
    case "SET_ADDRESS_DETAILS":
      return {
        ...state,
        addressFormData: {
          ...state.addressFormData,
          [action.payload.name]: action.payload.value,
        },
      };
    case "EDIT_ADDRESS_DETAILS":
      return { ...state, addressFormData: action.payload };
    case "ADD_NEW_ADDRESS":
      return { ...state, addresses: [...state.addresses, action.payload] };
    case "SET_DUMMY_ADDRESS":
      return { ...state, addressFormData: action.payload };
    case "REMOVE_ADDRESS":
      const addressIdToRemove = action.payload;
      console.log("removeId", action.payload);
      const updatedAddresses = state.addresses.filter(
        (address) => address._id !== addressIdToRemove
      );
      return { ...state, addresses: updatedAddresses };
    case "RESET_ADDRESS_FORM":
      return { ...state, addressFormData: action.payload };
    case "PINCODE_ERROR":
      return {
        ...state,
        addressFormError: {
          ...state.addressFormError,
          pincodeError: action.payload.pinError,
        },
      };
    case "PHONE_ERROR":
      return {
        ...state,
        addressFormError: {
          ...state.addressFormError,
          mobileError: action.payload.mobileError,
        },
      };
    case "SET_SELECTED_ADDRESS_ID":
      return { ...state, selectedAddressId: action.payload };
    default:
      return state;
  }
};

export const AddressProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isEditBtn, setIsEditBtn] = useState(false);
  const { token } = useContext(AuthContext);
  const [addressState, addressDispatch] = useReducer(
    addressReducer,
    initialAddressState
  );

  return (
    <AddressContext.Provider
      value={{
        token,
        addressState,
        addressDispatch,

        isEditBtn,
        initialAddressState,
        setIsEditBtn,
        isLoading,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};
