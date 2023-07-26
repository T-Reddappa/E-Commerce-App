import React, { useContext } from "react";
import "./productCard.css";
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { ToastContainer, toast } from "react-toastify";

import { AuthContext } from "../../context/authContext";
import { WishlistContext } from "../../context/wishlistContext";
import { CartContext } from "../../context/cartContext";

const ProductCard = ({ product }) => {
  const { token } = useContext(AuthContext);
  const { getWishlist, addToWishlist, wishlistState, removeFromWishlist } =
    useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);
  const notify = () => token && toast("Item added to cart");

  const wishlistedIds = wishlistState.wishlist.map((product) => product._id);

  const isWishlisted = wishlistedIds.includes(product._id);

  return (
    <div>
      <div className="product-card">
        <Link className="product-link" to={`/products/${product._id}`}>
          <img
            className="productImage"
            src={product.imgurl}
            alt={product.name}
          />
          <div className="product-info">
            <p className="product-brand-name">{product.brand}</p>
            <p className="product-name">{product.name}</p>
            <p className="product-price">Rs. {product.price}</p>
          </div>
        </Link>
        <div className="buttons">
          <span
            title={isWishlisted ? "Click again to Remove from Wishlist" : ""}
            className={isWishlisted ? "wishlisted-btn" : "notwishlisted-btn"}
            onClick={() => {
              if (!isWishlisted) {
                addToWishlist(product, token);
              } else {
                removeFromWishlist(product._id);
              }
            }}
          >
            <FavoriteBorderOutlinedIcon style={{ fontSize: "12px" }} />
            {isWishlisted ? "Wishlisted" : "Wishlist"}
          </span>
          {/* <span
            onClick={() => {
              addToCart(product, token);
              notify();
            }}
          >
            Add To Cart
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
