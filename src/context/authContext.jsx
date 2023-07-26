import axios from "axios";
import React, { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const localStorageToken = JSON.parse(
    localStorage.getItem("userLoginDetails")
  );
  const [token, setToken] = useState(localStorageToken?.token || "");
  const [currentUser, setCurrentUser] = useState(localStorageToken?.user);

  const loginHandler = async (email, password) => {
    try {
      const res = await axios.post("/api/auth/login", {
        email: email,
        password: password,
      });
      const {
        status,
        data: { foundUser, encodedToken },
      } = res;
      if (status === 200 || status === 201) {
        console.log(res.data);
        localStorage.setItem(
          "userLoginDetails",
          JSON.stringify({ user: foundUser, token: encodedToken })
        );
        setToken(encodedToken);
        setCurrentUser(foundUser);
        toast.success(`Hi, ${foundUser.firstName}!, Welcome!`);
        // navigate("/", { replace: true });
        navigate("/");
      }
    } catch (e) {
      console.log(e.response);
    }
  };

  const signupHandler = async (firstName, lastName, email, password) => {
    try {
      const res = await axios.post("/api/auth/signup", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });
      const {
        status,
        data: { createdUser, encodedToken },
      } = res;
      console.log(res.data);
      if (status === 200 || status === 201) {
        localStorage.setItem(
          "userLoginDetails",
          JSON.stringify({ user: createdUser, token: encodedToken })
        );
        setToken(encodedToken);
        setCurrentUser(createdUser);
        console.log(encodedToken);
        toast.success(`Hi, ${createdUser.firstName}!, Welcome!`);
        navigate("/", { replace: true });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("userLoginDetails");
    setToken(null);
    setCurrentUser(null);
    navigate("/logout");
  };

  return (
    <AuthContext.Provider
      value={{ loginHandler, token, currentUser, signupHandler, logoutHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};
