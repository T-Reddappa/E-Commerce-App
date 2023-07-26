import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./navbar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { WishlistContext } from "../../context/wishlistContext";
import { AuthContext } from "../../context/authContext";
import { CartContext } from "../../context/cartContext";
import { ProductContext } from "../../context/productContext";

const Navbar = () => {
  const {
    wishlistState,
    wishlistState: { wishlist },
  } = useContext(WishlistContext);
  const { productDispatch, productState } = useContext(ProductContext);
  const { token, currentUser, logoutHandler } = useContext(AuthContext);
  const {
    cartState: { cart },
  } = useContext(CartContext);

  const navigate = useNavigate();

  function handleLogin() {
    if (token) {
      logoutHandler();
      navigate("/logout");
    } else {
      navigate("/login");
    }
  }

  return (
    <nav className="navbar">
      <div>
        <NavLink to="/" className="nav-text">
          <span className="logo"> VESTIDOs</span>
        </NavLink>
      </div>

      <div className="navbar-search">
        <SearchOutlinedIcon style={{ fontSize: "18px", color: "gray" }} />
        <input
          onChange={(e) => {
            productDispatch({
              type: "FILTER_BY_SEARCH",
              payload: e.target.value,
            });
            navigate("/products");
          }}
          type="search"
          value={productState.searchInput}
          placeholder="Search for products, brands"
        />
      </div>

      <div className="navbar-actions">
        {/* <div>{!token && <button onClick={handleLogin}>Login</button>}</div> */}

        <NavLink
          to="/wishlist"
          activeClassName="active"
          className="nav-button nav-text"
        >
          <FavoriteBorderOutlinedIcon
            className="nav-icons"
            style={{ fontSize: "18px", color: "gray" }}
          />
          {token && wishlist.length > 0 && (
            <div className="items-length-display">
              <span>{wishlist.length}</span>
            </div>
          )}
          <span className="nav-icon-title">Wishlist</span>
        </NavLink>

        <NavLink
          to="/cart"
          activeClassName="active"
          className="nav-button nav-text"
        >
          <ShoppingBagOutlinedIcon
            className="nav-icons"
            style={{ fontSize: "18px", color: "gray" }}
          />

          {token && cart.length > 0 && (
            <span className="items-length-display">{cart.length}</span>
          )}
          <span>Bag</span>
        </NavLink>

        <NavLink to="/profile" className="nav-button  nav-text">
          <PersonOutlineOutlinedIcon
            className="nav-icons"
            style={{ fontSize: "18px", color: "gray" }}
          />
          <span>{token ? `${currentUser?.firstName}` : "Profile"}</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
