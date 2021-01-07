import React from "react";
import genericButtonStyles from "./button.module.css";

type Props = {
  buttonText: string;
  onClick: () => void;
  styles?: {[key: string]: string};
};

const Button = ({
  buttonText = "Button",
  onClick = () => {},
  styles
}: Props) => {
  return (
    <div className={`${genericButtonStyles["button"]} ${styles && styles["button"]}`}onClick={onClick} >
      <h1 className={`${genericButtonStyles["buttonText"]} ${styles && styles["button-text"]}`}>{buttonText}</h1>
    </div>
  );
};

export default Button;