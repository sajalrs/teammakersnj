import { totalmem } from "os";
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
      <div className={`${imageCardStyles["image-card-text"]} ${imageCardStyles[textPosition]} `}>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <div className={imageCardStyles["buttons"]}>
          <GreenButton buttonText="LEARN MORE" onClick={() => {}} />
          <TransparentButton buttonText="CONTACT US" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
