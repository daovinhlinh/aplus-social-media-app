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
        <Box width={"100%"} display={""} {...buttonStyle} className="cardleft">
            <Box display="flex">
              <Box>
                <Image
                  height={imgSize ?? 45}
                  width={imgSize ?? 45}
                  borderRadius={100}
                  marginRight={3}
                  src={leftImg}
                  marginTop={4}
                />
              </Box>
              <Box textAlign={"start"}>
                <Text color="gray.500" fontWeight="400" fontSize={"md"} marginLeft={4}>
                  {userId}
                </Text>
                <Text color="gray.700" fontSize={"md"} className="textmess" backgroundColor={"blackAlpha.200"} borderRadius="20px" px={4} py={2}>
                  {label2}
                </Text>
              </Box>
            </Box>
          <Spacer />
        </Box>
  );
};

export default Messenger;
