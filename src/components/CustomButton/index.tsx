import React, { ReactElement } from "react";
import { Button } from "@chakra-ui/react";

interface ICustomButton {
  width?: string;
  colorScheme?: string;
  color?: string;
  children: ReactElement;
  leftIcon?: ReactElement;
  onClick: (e: any) => void;
}

const CustomButton = (props: ICustomButton) => {
  const {
    width,
    colorScheme,
    color = "white",
    children,
    leftIcon,
    onClick,
  } = props;

  return (
    <Button
      w={width}
      colorScheme={colorScheme}
      borderRadius={7}
      paddingX="10px"
      color={color}
      onClick={onClick}
      bg={!colorScheme ? "transparent" : colorScheme}
      // variant="unstyled"
      _expanded={{ boxShadow: "none" }}
      _focus={{ boxShadow: "none" }}
      leftIcon={leftIcon}
      display="flex"
    >
      {children}
    </Button>
  );
};

export default CustomButton;
