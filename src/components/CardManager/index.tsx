import { Box, HStack, Text } from "@chakra-ui/react";
import React, { ReactChild } from "react";
import People from "../../assets/Icons/People";

interface IconCardProps {
   img?: ReactChild;
   rightIcon?: ReactChild;
   label: string;
   label1: string;
   label2: string;
   label3: string;
   onClick: () => void;
   [x: string]: any; //rest props
}

const CardManager = (props: IconCardProps) => {
   const {
      img,
      rightIcon,
      label,
      label1,
      label2,
      label3,
      onClick,
      ...buttonStyle
   } = props;

   return (
      <HStack
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
         bg="#FFFFFF"
         color="#000"
         _hover={{ bg: "rgba(226, 226, 226, 0.66)", boxShadow: "base" }}
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
         <Box width="5%">{img}</Box>
         <Box width="25%">
            <Text
               overflow="hidden"
               textOverflow="ellipsis"
               whiteSpace="nowrap"
               textAlign="left"
            >
               {label}
            </Text>
         </Box>
         <Box width="15%" px={10}>
            <Text
               overflow="hidden"
               textOverflow="ellipsis"
               whiteSpace="nowrap"
               textAlign="left"
            >
               {label1}
            </Text>
         </Box>
         <Box width="15%">
            <Text
               overflow="hidden"
               textOverflow="ellipsis"
               whiteSpace="nowrap"
               textAlign="left"
            >
               {label2}
            </Text>
         </Box>
         <Box width="15%" marginRight={10}>
            <Text
               overflow="hidden"
               textOverflow="ellipsis"
               whiteSpace="nowrap"
               textAlign="left"
            >
               {label3}
            </Text>
         </Box>
         <Box width="10%">{rightIcon}</Box>
      </HStack>
   );
};

export default CardManager;
