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
      colorScheme = "red",
      color = "white",
      children,
      leftIcon,
      onClick,
   } = props;

   return (
      <Button
         w={width}
         colorScheme={colorScheme}
         borderRadius={5}
         color={color}
         onClick={onClick}
         bg="transparent"
         variant="unstyled"
         _expanded={{ boxShadow: "none" }}
         _focus={{ boxShadow: "none" }}
         leftIcon={leftIcon}
      >
         {children}
      </Button>
   );
};

export default CustomButton;
