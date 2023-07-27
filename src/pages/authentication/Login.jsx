import React, { useContext, useState } from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
// import { ProductContext } from "../context/productContext";
import { useLocation, useNavigate } from "react-router";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const { loginHandler } = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
    hidePassword: true,
  });
  document.title = "Login | VESTIODs";

  const loginFormInputHandler = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    loginHandler(userCredentials.email, userCredentials.password);
  };

  const guestLogin = () => {
    loginHandler("reddy@gmail.com", "reddy1234");
  };

  const handlePasswordVisibility = () => {
    setUserCredentials({
      ...userCredentials,
      hidePassword: !userCredentials.hidePassword,
    });
  };

  return (
    <div>
      <div className="login-cont">
        <form onSubmit={handleLogin} className="login-card">
          <h3>Login</h3>
          <div className="login-input">
            <label>
              <p>Email Address</p>
            </label>
            <input
              type="email"
              placeholder="reddy@gamil.com"
              className="email"
              name="email"
              value={userCredentials.email}
              onChange={loginFormInputHandler}
              required
            />
          </div>
          <div className="login-input">
            <label>
              <p>Password</p>
            </label>
            <input
              type={userCredentials.hidePassword ? "password" : "text"}
              name="password"
              placeholder="***********"
              className="password"
              required
              value={userCredentials.password}
              onChange={loginFormInputHandler}
            />
          </div>
          <div className="login-forgot-details">
            <div className="remember-me">
              <input type="checkbox" onClick={handlePasswordVisibility} />
              <label className="show-password">Show Password</label>
            </div>
            <div className="forgot-password">Forgot Password</div>
          </div>
          <button className="card-button active-button" type="submit">
            Login
          </button>
          <button
            className="guest-login-btn active-button"
            onClick={guestLogin}
          >
            Login as Guest
          </button>
          <NavLink className="create-new-account" to="/signup">
            Create New Account
            <ArrowForwardIosIcon
              className="material-symbols-outlined"
              style={{ fontSize: "12px" }}
            />
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default Login;
