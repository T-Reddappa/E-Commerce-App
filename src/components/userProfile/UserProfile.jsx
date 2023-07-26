import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./userProfile.css";

const UserProfile = () => {
  const { currentUser: user, logoutHandler } = useContext(AuthContext);

  const fullName = `${user?.firstName} ${user?.lastName}`;
  return (
    <div className="profile-container">
      <div>
        <p>
          User : <span>{fullName}</span>
        </p>
        <p>
          Email: <span>{user.email}</span>{" "}
        </p>
      </div>
      <button onClick={logoutHandler} className="logout-btn">
        Logout
      </button>
    </div>
  );
};

export default UserProfile;
