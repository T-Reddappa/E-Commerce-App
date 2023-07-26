import React, { useContext } from "react";
import "./cart.css";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";

const CartPage = () => {
  const {
    token,
    cartState,
    updateCartQuantity,
    removeFromCart,
    totalQuantity,
    totalPrice,
    discounts,
    totalAmount,
    deliveryCharges,
  } = useContext(CartContext);
  const { cart } = cartState;
  document.title = "Cart | Vestidos";

  const navigate = useNavigate();

  return (
    <div>
      <h3 className="cart-header">Your Bag</h3>
      {cart.length > 0 ? (
        <div className="cart-container">
          <div className="cart-products-dispaly">
            {cart.map((product) => {
              return (
                <div className="products-display">
                  <div className="product-image-box">
                    <img
                      className="product-image"
                      src={product.imgurl}
                      alt=""
                    />
                  </div>
                  <div className="product-info">
                    <p className="product-info-brand">{product.brand}</p>
                    <p>{product.name}</p>
                    <p>Rs.{product.price}</p>

                    <div className="quantity-update-btns">
                      <div
                        className="qty-btn"
                        onClick={(e) => {
                          e.preventDefault();
                          if (product.qty > 1) {
                            updateCartQuantity(product, "decrement");
                          } else {
                            removeFromCart(product._id);
                            console.log("removed");
                          }
                        }}
                      >
                        <RemoveOutlinedIcon style={{ fontSize: "14px" }} />
                      </div>
                      <p> {product.qty}</p>
                      <div
                        className="qty-btn"
                        onClick={(e) => {
                          e.preventDefault();

                          updateCartQuantity(product, "increment");
                        }}
                      >
                        <AddOutlinedIcon style={{ fontSize: "14px" }} />
                      </div>
                    </div>
                    <button
                      className="product-info-remove"
                      onClick={() => removeFromCart(product._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="cart-price-box">
            <h3 className="cart-header">Price Details</h3>
            <hr />
            <div className="cart-price-details">
              <span>Price ({cart.length} items)</span>
              <span> ₹ {totalPrice} </span>
            </div>
            <div className="cart-price-details">
              <span>Discount </span>
              <span> -₹ {discounts}</span>
            </div>
            <div className="cart-price-details">
              <span>Delivery Charges</span>
              <span> ₹ 49 </span>
            </div>

            <hr />
            <div className="cart-total">
              <span>Total Amount</span>
              <span> ₹ {totalAmount}</span>
            </div>
            <hr />
            <NavLink to="/checkout">
              <button className="checkout-btn-cart-page">CHECKOUT</button>
            </NavLink>
          </div>
        </div>
      ) : (
        <div className="empty-cart-container">
          <p>Hey, it feels so light!</p>
          <p>There is nothing in your bag.Let's add some items.</p>
          <span className="link-to-home" onClick={() => navigate("/")}>
            GO TO HOME
          </span>
        </div>
      )}
    </div>
  );
};

export default CartPage;
