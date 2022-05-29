import { Box, Text } from "@chakra-ui/react";
import React, { ReactChild } from "react";
import People from "../../assets/Icons/People";

interface IconCardProps {
   leftIcon?: ReactChild;
   rightIcon?: ReactChild;
   label: string;
   onClick: () => void;
   [x: string]: any; //rest props
}

const IconCard = (props: IconCardProps) => {
   const { isActive, leftIcon, rightIcon, label, onClick, ...buttonStyle } =
      props;

   return (
      <Box
         onClick={onClick}
         as="button"
         minHeight="50px"
         lineHeight="1.2"
         transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
         border="none"
         outline="none"
         p="10px"
         borderRadius="10px"
         fontSize="16px"
         fontWeight="semibold"
         bg="none"
         color="#000"
         _hover={{ bg: "white", color: "red.500", boxShadow: "base" }}
         _active={{
            bg: "gray.100",
            color: "red.500",
            boxShadow: "base",
         }}
         display="flex"
         flexDirection="row"
         alignItems="center"
         justifyContent="space-between"
         width="100%"
         {...buttonStyle}
      >
         <Box>{leftIcon}</Box>
         <Box width="70%">
            <Text
               overflow="hidden"
               textOverflow="ellipsis"
               whiteSpace="nowrap"
               textAlign="left"
            >
               {label}
            </Text>
         </Box>
         <Box>{rightIcon}</Box>
      </Box>
   );
};

export default IconCard;
