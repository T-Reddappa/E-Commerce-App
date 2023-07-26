import React from "react";
import "./orderDetails.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { ProductContext } from "../../context/productContext";
import { CartContext } from "../../context/cartContext";
import { AddressContext } from "../../context/addressContext";
import { toast } from "react-hot-toast";
import { v4 as uuid } from "uuid";

const OrderDetails = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const { productDispatch } = useContext(ProductContext);
  const {
    cartState: { cart },

    totalPrice,
    discounts,
    deliveryCharges,
    totalAmount,
    emptyCart,
  } = useContext(CartContext);
  const {
    addressState: { addresses, selectedAddressId },
  } = useContext(AddressContext);

  const selectedAddress = addresses.find(
    (address) => address._id === selectedAddressId
  );

  const handlePaymentSuccess = () => {
    const orderDetails = {
      id: uuid(),
      productList: [...cart],
      addresses: selectedAddress,
      amount: totalAmount,
      date: new Date(),
    };
    productDispatch({ type: "SET_ORDER_LIST", payload: orderDetails });
    emptyCart();
    navigate("/profile/orders");
  };

  const razorpayOptions = {
    key: "rzp_test_00dP2uDP2yHZOB",
    amount: totalAmount * 100,
    name: "VESTIDOs",
    description: "Thank You For Ordering",

    handler: (response) => handlePaymentSuccess(response),
    prefill: {
      name: currentUser?.firstName,
      email: currentUser?.email,
      contact: selectedAddress?.mobile,
    },
    notes: {
      address: selectedAddress,
    },
    theme: {
      color: "#ADD8E6",
    },
  };

  const handlePlaceOrder = () => {
    if (selectedAddress) {
      const razorpayInstance = new window.Razorpay(razorpayOptions);
      razorpayInstance.open();
    } else {
      toast.error("Please select an address to proceed.");
    }
  };

  return (
    <div className="order-details-container">
      <p
        onClick={() => console.log(selectedAddress)}
        className="order-detail-head"
      >
        Order Summary
      </p>
      <hr />
      <div className="colum-name">
        <p>Item</p>
        <p className="colum-qty">Qty</p>
        <p>Price</p>
      </div>
      <div className="order-list-wrapper">
        {cart?.map((product) => (
          <div key={product._id} className="product-details">
            <p className="product-name-detail">{product.name}</p>
            <p>{product.qty}</p>
            <p>Rs. {product.price * product.qty}</p>
          </div>
        ))}
      </div>
      <p className="head">Price-details</p>
      <hr />
      <div className="order-list-wrapper">
        <div className="details">
          <p>Total Price</p>
          <p>₹ {totalPrice}</p>
        </div>
        <div className="details">
          <p>Total Discount</p>
          <p>₹ {discounts}</p>
        </div>
        <div className="details">
          <p>Delivery Charges</p>
          <p>₹ {deliveryCharges}</p>
        </div>
        <div className="details grand-total">
          <p>Grand Total</p>
          <p>₹ {totalAmount}</p>
        </div>
      </div>

      <div className="order-list-wrapper">
        <p className="head">Delivery To</p>
        <hr />
        <div className="delivery-address">
          {selectedAddress ? (
            <p>{selectedAddress.name}</p>
          ) : (
            <p>Add/Select an address to proceed.</p>
          )}
        </div>

        <button className="place-order-btn" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
};

export default OrderDetails;
