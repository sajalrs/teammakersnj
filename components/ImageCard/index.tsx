import React from "react";
import GreenButton from "../Buttons/Green";
import TransparentButton from "../Buttons/Transparent";
import imageCardStyles from "../ImageCard/ImageCard.module.css";

export enum TextPosition {
    TopLeft = "top-left",
    TopCenter = "top-center",
    TopRight = "top-right",
    MiddleLeft = "middle-left",
    MiddleCenter = "middle-center",
    MiddleRight = "middle-right",
    BottomLeft = "bottom-left",
    BottomCenter = "bottom-center",
    BottomRight = "bottom-right"
}

type Props = {
    textPosition: TextPosition,
    imgSrc: string,
    title: string,
    subtitle: string
}


const ImageCard = ({textPosition, imgSrc, title, subtitle}: Props) => {
  return (
    <div className={imageCardStyles["image-card"]}>
      <img
        id={imageCardStyles["image-card-image"]}
        src={imgSrc}
      />
      <div className={`${imageCardStyles["text-screen"]}`}>
          
      <div className={`${imageCardStyles["image-card-text"]} ${imageCardStyles[textPosition]}`}>
        <h1 className={imageCardStyles["title"]}>{title}</h1>
        <h2 className={imageCardStyles["subtitle"]}>{subtitle}</h2>
        <div className={imageCardStyles["buttons"]}>
          <TransparentButton buttonText="LEARN MORE" onClick={() => {}} />
          <GreenButton buttonText="CONTACT US" onClick={() => {}} />
        </div>

      </div>
      </div>
    </div>
  );
};

export default ImageCard;
