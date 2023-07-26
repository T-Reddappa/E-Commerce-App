import React, { useContext, useState } from "react";
import "./styles.css";
// import { ProductContext } from "../context/productContext";
import { useLocation, useNavigate } from "react-router";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { toast } from "react-toastify";
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
    console.log(userCredentials);
  };

  const handleLogin = () => {
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

  toast.success(`Hi, Reddy!`, {
    icon: "👋",
  });

  return (
    <div>
      <div className="login-cont">
        <div className="login-card">
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
          <button className="card-button active-button" onClick={handleLogin}>
            Login
          </button>
          <button
            className="guest-login-btn active-button"
            onClick={guestLogin}
          >
            Login as Guest
          </button>
          <a className="create-new-account" href="/signup">
            Create New Account
            <ArrowForwardIosIcon
              className="material-symbols-outlined"
              style={{ fontSize: "12px" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
//
// const getData = async () => {
//   try {
//     const email = document.getElementsByClassName("email")[0].value;
//     const password = document.getElementsByClassName("password")[0].value;
//     const creds = {
//       email: email,
//       password: password,
//     };

//     const res = await fetch("/api/auth/login", {
//       method: "POST",
//       body: JSON.stringify(creds),
//     });

//     const data = await res.json();

//     if (data.foundUser) {
//       setIsLoggedIn(true);
//       console.log(location);
//       navigate("/products");
//     } else {
//       console.log("user details not found");
//     }

//     const { encodedToken } = data;

//     console.log(encodedToken);
//     localStorage.setItem("encodedToken", encodedToken);
//   } catch (e) {
//     console.log(e);
//   } finally {
//     console.log("helo");
//   }
// };

// const guestLogin = async () => {
//   try {
//     const email = "reddy@gmail.com";
//     const password = "reddy";
//     const creds = {
//       email: email,
//       password: password,
//     };

//     const res = await fetch("/api/auth/login", {
//       method: "POST",
//       body: JSON.stringify(creds),
//     });

//     const data = await res.json();
//     const { encodedToken } = data;
//     console.log(data);

//     if (data.foundUser) {
//       setIsLoggedIn(true);

//       if (location?.state) {
//         navigate(location?.state?.from?.pathname);
//       } else {
//         navigate("/product");
//       }
//     }

//     console.log(encodedToken);
//     localStorage.setItem("encodedToken", encodedToken);
//   } catch (e) {
//     console.log(e);
//   }
// };
