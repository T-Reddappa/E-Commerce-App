import React, { useContext } from "react";
import "./productCard.css";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import { AuthContext } from "../../context/authContext";
import { WishlistContext } from "../../context/wishlistContext";
import { CartContext } from "../../context/cartContext";

const ProductCard = ({ product }) => {
  const { token } = useContext(AuthContext);
  const { addToWishlist, wishlistState, removeFromWishlist } =
    useContext(WishlistContext);

  const wishlistedIds = wishlistState.wishlist.map((product) => product._id);

  const isWishlisted = wishlistedIds.includes(product._id);

  return (
    <div>
      <div className="product-card">
        <Link
          title="
        click to view product details"
          className="product-link"
          to={`/products/${product._id}`}
        >
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
              if (token) {
                if (!isWishlisted) {
                  addToWishlist(product, token);
                } else {
                  removeFromWishlist(product._id);
                }
              } else {
                toast.warn(
                  <div style={{ fontSize: "12px" }}>
                    Please Login to Add items to your Wishlist.
                  </div>
                );
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
