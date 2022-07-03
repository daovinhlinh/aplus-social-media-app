import {
  Box,
  Button,
  HStack,
  Image,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Spacer,
  Text,
  useBoolean,
} from "@chakra-ui/react";
import { ReactChild } from "react";
import { useRecoilValue } from "recoil";
import Edit from "../../assets/Icons/Edit";
import { userDataState } from "../../store/user";
import React from "react";
import { Link } from "react-router-dom";

interface MessengerProps {
  leftImg?: string;
  userId: string;
  label2: string;
  [x: string]: any; //rest props
}
const Messenger = (props: MessengerProps) => {
  const {
    leftImg,
    imgSize,
    userId,
    label2,
    ...buttonStyle
  } = props;


  return (
    <HStack width={"100%"} {...buttonStyle}>
        <Box display="flex">
          <Box>
            <Image
              height={imgSize ?? 35}
              width={imgSize ?? 35}
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
        </Box>
      <Spacer />
      
    </HStack>
  );
};

export default Messenger;
