import React from "react";
import "./orders.css";

import { useContext } from "react";
import { ProductContext } from "../../context/productContext";

const Orders = () => {
  const {
    productState: { orderList },
  } = useContext(ProductContext);
  return (
    <div className="orders-container">
      {/* <p onClick={() => console.log(orderList)}>orders</p> */}
      {orderList?.length ? (
        [...orderList]
          ?.reverse()
          ?.map(({ id, productList, addresses, date, amount }) => (
            <div key={id} className="orders-wrapper">
              <div className="ordered-details">
                <p>
                  {" "}
                  Order placed on:<span>{date.toString()}</span>
                </p>
                <p>
                  Order Id :<span> {id}</span>
                </p>
                <p>
                  Amount Paid: <span>Rs. {amount}</span>{" "}
                </p>
                <p>
                  Delivery To: <span>{addresses.name}</span>
                </p>
              </div>
              <div className="ordered-products-container">
                {productList.map((product) => (
                  <div className="ordered-product">
                    <img
                      className="ordered-product-img"
                      src={product.imgurl}
                      alt={product.name}
                    />
                    <div>
                      <p className="ordered-product-name">{product.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
      ) : (
        <p>No orders placed yet.</p>
      )}
    </div>
  );
};

export default Orders;
