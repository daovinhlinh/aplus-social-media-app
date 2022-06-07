import React from "react";
import { Button } from "@chakra-ui/react";

interface ICustomButton {
   width?: string;
   colorScheme?: string;
   color?: string;
   text: string;
   onClick: (e: any) => void;
}

const CustomButton = (props: ICustomButton) => {
   const { width, colorScheme = "red", color = "white", text, onClick } = props;

   return (
      <Button
         w={width}
         colorScheme={colorScheme}
         borderRadius={5}
         color={color}
         onClick={onClick}
      >
         {text}
      </Button>
   );
};

export default CustomButton;
