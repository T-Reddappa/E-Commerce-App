import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { WishlistContext } from "../../context/wishlistContext";
import "./wishlistPage.css";
import React, { useContext } from "react";

const WishlistPage = () => {
  const { wishlistState } = useContext(WishlistContext);
  const wishlist = wishlistState.wishlist;
  const navigate = useNavigate();
  document.title = "Wishlist | Vestidos";
  return (
    <div className="wishlist-container">
      <h3
        className="wishlist-header"
        onClick={() => console.log(wishlistState.wishlist)}
      >
        Your Wishlist {wishlist.length > 0 ? `(${wishlist.length})` : ""}
      </h3>

      {wishlist.length > 0 ? (
        <div className="wishlist-items-box">
          {wishlist.map((product) => {
            return <ProductCard product={product} />;
          })}
        </div>
      ) : (
        <div className="empty-wishlist-container">
          <p className="empty-wishlist-banner">
            You have no items in your wishlist
          </p>
          <span
            onClick={(e) => {
              e.preventDefault();
              navigate("/products");
            }}
            className="link-to-home"
          >
            VIEW PRODUCTS
          </span>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
