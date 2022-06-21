import {
   Box,
   Button,
   HStack,
   Image,
   Popover,
   PopoverArrow,
   PopoverBody,
   PopoverContent,
   PopoverTrigger,
   Portal,
   Spacer,
   Text,
} from "@chakra-ui/react";
import React, { ReactChild } from "react";
import { useRecoilValue } from "recoil";
import Edit from "../../assets/Icons/Edit";
import Pen from "../../assets/Icons/Pen";
import { userDataState } from "../../store/user";

interface DetailCardProps {
   leftImg?: string;
   rightIcon?: ReactChild;
   userId: string;
   label2: string;
   onClick: () => void;
   [x: string]: any; //rest props
}

const DetailCard = (props: DetailCardProps) => {
   const { leftImg, rightIcon, userId, label2, onClick, ...buttonStyle } =
      props;
   const userData = useRecoilValue(userDataState);

   return (
      <HStack width={"100%"} onClick={onClick} {...buttonStyle}>
         <Box>
            <Image
               height={50}
               width={50}
               borderRadius={100}
               marginRight={3}
               src={leftImg}
            />
         </Box>
         <Box textAlign={"start"}>
            <Text color="black" fontWeight="bold" fontSize={"md"}>
               {userId}
            </Text>
            <Text color="gray.500" fontSize={"sm"}>
               {label2}
            </Text>
         </Box>
         <Spacer />
         <Popover offset={[-60, -10]}>
            <PopoverTrigger>
               <Button
                  bg="transparent"
                  variant="unstyled"
                  _expanded={{ boxShadow: "none" }}
                  _focus={{ boxShadow: "none" }}
               >
                  {rightIcon}
               </Button>
            </PopoverTrigger>
            <Portal>
               <PopoverContent
                  border="none"
                  _focus={{ boxShadow: "#ccc" }}
                  width="fit-content"
               >
                  <PopoverBody
                     display="flex"
                     flexDirection="column"
                     alignItems="flex-start"
                  >
                     {/* <Button colorScheme='blue'>{rightIcon}</Button> */}
                     <Button
                        bg="none"
                        _hover={{ bg: "none" }}
                        leftIcon={<Edit />}
                     >
                        Chỉnh sửa bài viết
                     </Button>
                     {userData._id === userId && (
                        <Button
                           bg="none"
                           _hover={{ bg: "none" }}
                           leftIcon={<Edit />}
                        >
                           Xóa
                        </Button>
                     )}
                  </PopoverBody>
               </PopoverContent>
            </Portal>
         </Popover>
      </HStack>
   );
};

export default DetailCard;
