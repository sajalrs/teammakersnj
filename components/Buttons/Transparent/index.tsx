import React from "react";
import Button from "..";
import transparentButtonStyles from "./transparentButton.module.css";
type Props = {
  buttonText: string;
  onClick: () => void;
};

const TransparentButton = ({
  buttonText = "Transparent Button",
  onClick = () => {},
}: Props) => {
  return (
    <Button
      buttonText={buttonText}
      onClick={onClick}
      styles={transparentButtonStyles}
    />
  );
};

export default TransparentButton;
