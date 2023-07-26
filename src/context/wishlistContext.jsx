import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { AuthContext } from "./authContext";
import { ReplyTwoTone } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";

export const WishlistContext = createContext();

const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "DISPLAY_WISHLIST":
      return { ...state, wishlist: action.payload };
    case "ADD_TO_wISHLIST":
      return { ...state, wishlist: action.payload };

    default:
      return state;
  }
};

export const WishlistProvider = ({ children }) => {
  const { token } = useContext(AuthContext);

  const initialWishlistState = {
    wishlist: [],
  };

  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducer,
    initialWishlistState
  );

  const getWishlist = async () => {
    try {
      const res = await axios.get("/api/user/wishlist", {
        headers: { authorization: token },
      });

      const {
        status,
        data: { whislist },
      } = res;
      if (status === 200) {
        wishlistDispatch({ type: "DISPLAY_WISHLIST", payload: whislist });
        console.log("added to wishlist");
        console.log("added to wishlist");
      }
    } catch (e) {
      console.error(e);
    } finally {
      console.log("done");
    }
  };

  const addToWishlist = async (product, token) => {
    try {
      const res = await axios.post(
        "/api/user/wishlist",
        { product },
        { headers: { authorization: token } }
      );
      const {
        status,
        data: { wishlist },
      } = res;
      console.log(res);
      if (status === 201) {
        wishlistDispatch({ type: "ADD_TO_wISHLIST", payload: wishlist });
        toast.success(
          <div style={{ fontSize: "10px" }}>
            Added {product.name} to the wishlist sucessfully!
          </div>
        );
      }
    } catch (e) {
      console.log(e);
    }
  };

  const removeFromWishlist = async (productId) => {
    try {
      const res = await axios.delete(`/api/user/wishlist/${productId}`, {
        headers: { authorization: token },
      });
      const {
        status,
        data: { wishlist },
      } = res;

      if (status === 200) {
        wishlistDispatch({ type: "ADD_TO_wISHLIST", payload: wishlist });
        toast.success(
          <div style={{ fontSize: "10px" }}>
            Removed product from wishlist sucessfully!
          </div>
        );
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <WishlistContext.Provider
      value={{
        wishlistState,
        addToWishlist,
        getWishlist,
        wishlistDispatch,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
