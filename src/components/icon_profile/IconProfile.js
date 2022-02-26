import React from "react";
import "./IconProfile.css";
import ImgProfile from "../../assets/images/profile.jpg";
function IconProfile() {
  return (
    <>
      <div className="containerHistories__elements">
        <div className="histories_circule"></div>
        <img src={ImgProfile} className="histories_img"/>
      </div>
    </>
  );
}

export default IconProfile;
