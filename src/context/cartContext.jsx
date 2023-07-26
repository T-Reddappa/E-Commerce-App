import React, { createContext, useContext, useReducer } from "react";
import { AuthContext } from "./authContext";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "DISPLAY_CART":
      return { ...state, cart: action.payload };
    case "ADD_TO_CART":
      return { ...state, cart: action.payload };
    case "REMOVE_FROM_CART":
      return { ...state, cart: action.payload };
    case "UPDATE_CART_QUANTITY":
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const { token } = useContext(AuthContext);

  const initialCartState = {
    cart: [],
  };

  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);

  const getCart = async () => {
    try {
      const res = await axios.get("/api/user/cart", {
        headers: {
          authorization: token,
        },
      });
      const {
        status,
        data: { cart },
      } = res;
      if (status === 200) {
        cartDispatch({ type: "DISPLAY_CART", payload: cart });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const addToCart = async (product, token) => {
    try {
      const res = await axios.post(
        "/api/user/cart",
        { product },
        { headers: { authorization: token } }
      );

      const {
        status,
        data: { cart },
      } = res;

      if (status === 201) {
        cartDispatch({ type: "ADD_TO_CART", payload: cart });
        toast.success(
          <div style={{ fontSize: "12px" }}>
            Product added to bag successfully!
          </div>
        );
      }
    } catch (e) {
      console.log(e);
    }
  };

  const updateCartQuantity = async (product, actionType) => {
    const { _id, name } = product;
    try {
      const res = await axios.post(
        `/api/user/cart/${_id}`,
        { action: { type: actionType } },
        { headers: { authorization: token } }
      );

      const {
        status,
        data: { cart },
      } = res;
      if (status === 200) {
        cartDispatch({ type: "UPDATE_CART_QUANTITY", payload: cart });

        toast.success(
          <div style={{ fontSize: "12px" }}>
            {actionType === "increment"
              ? `Added one more ${name} to the Bag
            sucessfully!`
              : `Removed one ${name} from Bag successfully!`}
          </div>
        );
      }
    } catch (e) {
      console.log(e);
      toast.error("Unable to update quantity.");
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const res = await axios.delete(`/api/user/cart/${productId}`, {
        headers: { authorization: token },
      });
      const {
        status,
        data: { cart },
      } = res;
      if (status === 200) {
        cartDispatch({ type: "REMOVE_FROM_CART", payload: cart });
        toast.success(<div>Removed product from cart successfully!</div>);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const clearCart = async (productId) => {
    try {
      const res = await axios.delete(`/api/user/cart/${productId}`, {
        headers: { authorization: token },
      });
      const {
        status,
        data: { cart },
      } = res;
      if (status === 200) {
        cartDispatch({ type: "REMOVE_FROM_CART", payload: cart });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const emptyCart = () => {
    cartState.cart.forEach((product) => {
      clearCart(product._id);
    });
  };

  const prices = cartState.cart.map((product) => +product.price * product.qty);
  const totalQuantity = cartState.cart.reduce((acc, cur) => acc + cur.qty, 0);
  const totalPrice = prices.reduce((acc, cur) => acc + cur, 0);
  const discounts = totalQuantity * 50;
  const deliveryCharges = 49;

  const totalAmount = totalPrice - discounts + deliveryCharges;

  return (
    <CartContext.Provider
      value={{
        cartState,
        cartDispatch,
        addToCart,
        getCart,
        token,
        updateCartQuantity,
        removeFromCart,

        emptyCart,
        prices,
        totalQuantity,
        totalPrice,
        discounts,
        deliveryCharges,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
