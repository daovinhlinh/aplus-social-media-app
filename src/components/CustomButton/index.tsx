import React from "react";
import { Button } from "@chakra-ui/react";

interface ICustomButton {
   width?: string;
   colorScheme?: string;
   color?: string
   text: string;

}

const CustomButton = (props: ICustomButton) => {
   const { width, colorScheme = "red", color = "white", text } = props

   return <Button w={width} colorScheme={colorScheme} borderRadius={5} color={color}>{text}</Button>;
};

export default CustomButton;
