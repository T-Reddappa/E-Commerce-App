import React from "react";
import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <div className="logout-container">
      <div>You have successfully logged out!</div>
      <Link to="/" className="link">
        <span className="link-to-home">Back to Home</span>
      </Link>
      <div></div>
    </div>
  );
};

export default Logout;
