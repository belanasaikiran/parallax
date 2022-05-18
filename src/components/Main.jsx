import React from "react";
// importing the image from images folder
import Profile from "../images/profile.png";

import { ParallaxLayer } from "@react-spring/parallax";

function Main() {
  return (
      <ParallaxLayer offset={0} speed={0.5}>
        <div className="main-content">
          <div className="main-content-left">
            <img src={Profile} alt="profile" className="profile-image" />
          </div>

          {/* vertical line seperator */}
          <div className="vertical-line"></div>

          <div className="main-content-text">
            <h1>
              {" "}
              Hi, I'm <span className="">Saikiran Belana</span>{" "}
            </h1>
            <h2> Full Stack Web Developer </h2>
          </div>
        </div>
      </ParallaxLayer>
  );
}

export default Main;
