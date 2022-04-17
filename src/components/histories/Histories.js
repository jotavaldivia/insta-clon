import React from "react";
import "./Histories.css";

import IconProfile from "../icon_profile/IconProfile";
import useUser from '../../hooks/useUser.js'
function Histories() {

    const userdata = useUser();
    //console.log(userdata[0].img);
  return (
    <>
      <div className="containerHistories">
        {
          userdata.map((user,index) =>
              <div className="containerHistories_elements" key={user.id}>
                <IconProfile  img={user.img} /><span className="histories_name" >{user.username}</span>
              </div>
          )
        }
      </div>
    </>
  );
}

export default Histories;
