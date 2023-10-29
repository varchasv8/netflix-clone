import React from "react";
import "./ProfileScreen.css";
import NavBar from "../components/NavBar";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import PlanScreen from "./PlanScreen";
function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <NavBar />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__content">
          <img
            //   onClick={() => history("/profile")}
            className="avatar"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bf6e4a33850498.56ba69ac3064f.png"
            alt=""
          />
            <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>PLANS</h3>
              <PlanScreen />
              <button onClick={() => auth.signOut()} className="profileScreen__SignOut">Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
