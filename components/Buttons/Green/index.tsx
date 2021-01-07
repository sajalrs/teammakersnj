import React from "react";
import Button from "..";
import greenButtonStyles from "./greenButton.module.css";
type Props = {
  buttonText: string;
  onClick: () => void;
};

const GreenButton = ({
  buttonText = "Green Button",
  onClick = () => {},
}: Props) => {
  return (
    <Button
      buttonText={buttonText}
      onClick={onClick}
      styles={greenButtonStyles}
    />
  );
};

export default GreenButton;
