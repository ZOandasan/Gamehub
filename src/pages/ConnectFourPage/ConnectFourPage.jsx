//This was APP.js before
import React from "react";
import "./ConnectFour.css";
import ConnectFourBoard from "./ConnectFourBoard";

export default function ConnectFour(){
    return (
        <div className="ConnectFourApp">
          <img className="connectFourBannerIMG"
            alt="Connect 4"
            src="https://i2.wp.com/www.baytekent.com/wp-content/uploads/2017/06/connect4logo.png?fit=433%2C129&ssl=1"
          />
          <ConnectFourBoard />
        </div>
    );
}