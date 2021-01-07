import React from "react";
import GreenButton from "../Buttons/Green"
import TransparentButton from "../Buttons/Transparent"

const ImageCard = () => {
  return <div>
      <img src="/TEAM-MAKERS-PHOTO-2-1.jpg"/>
      <div>
          <h1>CAMP ADVENTURES</h1>
          <h2>Bring Teamwork to you Camp</h2>
          <div>

          </div>
          <div>
            <GreenButton buttonText="LEARN MORE" onClick={()=>{}}/>
            <TransparentButton buttonText="CONTACT US" onClick={()=>{}}/>
          </div>
      </div>
  </div>;
};

export default ImageCard;
