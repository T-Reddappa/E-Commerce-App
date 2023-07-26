import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import "./profilePage.css";
import { green } from "@mui/material/colors";

const ProfilePage = () => {
  const location = useLocation();
  const isActiveProfile = location.pathname === "/profile";
  document.title = "User Profile | Vestidos";
  return (
    <div className="user-profile-page-container">
      <section className="user-account-details">
        <h3>My Account</h3>
        <div className="account-wrapper">
          <div className="account-nav-tabs">
            <NavLink
              to="/profile"
              className={isActiveProfile ? "active-tab" : "idle-tab"}
            >
              <span> Profile</span>
            </NavLink>

            <NavLink
              to="/profile/address"
              id="address-link"
              className={({ isActive }) =>
                isActive ? "active-tab" : "idle-tab"
              }
            >
              Addresses
            </NavLink>
            <NavLink
              to="/profile/orders"
              id="orders-link"
              className={({ isActive }) =>
                isActive ? "active-tab" : "idle-tab"
              }
            >
              Orders
            </NavLink>
          </div>
          <div className="account-tab-display">
            <Outlet />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
