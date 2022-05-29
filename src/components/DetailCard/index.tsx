import { Box, HStack, Spacer, Text } from "@chakra-ui/react";
import React, { ReactChild } from "react";

interface DetailCardProps {
   leftImg?: ReactChild;
   rightIcon?: ReactChild;
   label1: string;
   label2: string;
   onClick: () => void;
   [x: string]: any; //rest props
}

const DetailCard = (props: DetailCardProps) => {
   const { leftImg, rightIcon, label1, label2, onClick, ...buttonStyle } =
      props;
   return (
      <HStack width={"100%"} p="10px" onClick={onClick} {...buttonStyle}>
         <Box>{leftImg}</Box>
         <Box textAlign={"start"}>
            <Text color="black" fontWeight="bold" fontSize={"md"}>
               {label1}
            </Text>
            <Text color="gray.500" fontSize={"sm"}>
               {label2}
            </Text>
         </Box>
         <Spacer />
         <Box>{rightIcon}</Box>
      </HStack>
   );
};

export default DetailCard;
