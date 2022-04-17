import React from "react";
import "./IconProfile.css";
//import ImgProfile from "../../assets/images/profile.jpg";
function IconProfile(porps) {
  return (
    <>
      <div className="containerHistories__elements">
        <div className="histories_circule"></div>
        <img src={porps.img} width="61px" height="61px" className="histories_img"/>
      </div>
    </>
  );
}

export default IconProfile;
