import React, { useContext, useEffect } from "react";
import "./singleProductPage.css";
import { useParams } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import { ProductContext } from "../../context/productContext";
import { WishlistContext } from "../../context/wishlistContext";
import { CartContext } from "../../context/cartContext";
import { AuthContext } from "../../context/authContext";
import { toast } from "react-toastify";
import Loading from "../../components/loading/Loading";

const SingleProduct = () => {
  const { productId } = useParams();
  const {
    productState,
    productDispatch,
    getProductById,
    isLoading,
    setIsLoading,
  } = useContext(ProductContext);
  const { token } = useContext(AuthContext);
  const { getWishlist, addToWishlist, wishlistState, removeFromWishlist } =
    useContext(WishlistContext);
  const { addToCart, cartState } = useContext(CartContext);

  const currentProductToDisplay = productState.productDetails;
  let name, price, imgurl, brand, rating, size, color;

  if (currentProductToDisplay) {
    ({ name, price, imgurl, brand, rating, size, color } =
      currentProductToDisplay);
  }

  const wishlistedIds = wishlistState.wishlist.map((product) => product._id);

  const isWishlisted = wishlistedIds.includes(productId);

  const baggedIds = cartState.cart?.map((product) => product._id);
  const isBagged = baggedIds.includes(productId);

  useEffect(() => {
    getProductById(productId);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 400);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="single-product-details-container">
          <div className="img-container">
            <img className="product-image" src={imgurl} alt={name} />
          </div>
          <div className="product-details-dp">
            <div>
              <p className="brand-name-dp">{brand}</p>
              <p className="product-name-dp">{name}</p>
              <p className="product-rating-dp">
                Rating {rating}
                <StarOutlineOutlinedIcon style={{ fontSize: "14px" }} />
              </p>
              <hr style={{ width: "15rem", margin: "0.3rem 0" }} />
              <p onClick={() => console.log(size)} className="price-dp">
                Rs. {price}
              </p>
            </div>
            <div className="product-sizes-dp">
              <span> Size</span>
              {size?.map((size) => {
                return (
                  <div className="size">
                    <span>{size}</span>
                  </div>
                );
              })}
            </div>
            {color && (
              <div className="product-color">
                Color
                <div
                  style={{
                    width: "1rem",
                    height: "1rem",
                    backgroundColor: `${color}`,
                    border: "1px solid lightblue",
                    borderRadius: "50%",
                  }}
                ></div>
              </div>
            )}

            <div className="action-buttons">
              <div
                className={
                  isWishlisted
                    ? "wishlisted-btn-dp action-button"
                    : "action-button wishlist-btn"
                }
                onClick={() => {
                  if (token) {
                    if (!isWishlisted) {
                      addToWishlist(currentProductToDisplay, token);
                    } else {
                      console.log("product is already in wishlist");
                    }
                  } else {
                    toast.warn(
                      <div style={{ fontSize: "12px" }}>
                        Please Login to add products to your bag.
                      </div>
                    );
                  }
                }}
              >
                <FavoriteBorderOutlinedIcon style={{ fontSize: "16px" }} />
                <span>{isWishlisted ? "Wishlisted" : "Wishlist"}</span>
              </div>

              <div
                className="action-button bag-btn"
                onClick={() => {
                  if (token) {
                    if (!isBagged) {
                      addToCart(currentProductToDisplay, token);
                    } else {
                      toast.info(
                        <div style={{ fontSize: "12px" }}>
                          Product already in Bag
                        </div>
                      );
                    }
                  } else {
                    toast.warn(
                      <div style={{ fontSize: "12px" }}>
                        Please Login to add products to your bag.
                      </div>
                    );
                  }
                }}
              >
                <ShoppingBagOutlinedIcon style={{ fontSize: "16px" }} />

                <span>{isBagged ? "ADDED TO BAG" : "ADD TO BAG"}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
