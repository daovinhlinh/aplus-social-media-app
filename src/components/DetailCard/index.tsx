import { Box, Button, HStack, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, Portal, Spacer, Text } from "@chakra-ui/react";
import React, { ReactChild } from "react";
import Edit from "../../assets/Icons/Edit";
import Pen from "../../assets/Icons/Pen";

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
         <Popover offset={[-60, -10]}>
            <PopoverTrigger>
               <Button bg='transparent' variant='unstyled' _expanded={{ boxShadow: 'none' }} _focus={{ boxShadow: 'none' }}>{rightIcon}</Button>
            </PopoverTrigger>
            <Portal border="none" >
               <PopoverContent border="none" _focus={{ boxShadow: 'none' }} width='fit-content'>
                  <PopoverBody>
                     {/* <Button colorScheme='blue'>{rightIcon}</Button> */}
                     <Button bg='none' _hover={{ bg: 'none' }} leftIcon={<Edit />}>Chỉnh sửa bài viết</Button>
                  </PopoverBody>
               </PopoverContent>
            </Portal>
         </Popover>
      </HStack>
   );
};

export default DetailCard;
