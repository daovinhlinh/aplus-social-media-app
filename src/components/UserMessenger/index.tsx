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
  label2: string;
  [x: string]: any; //rest props
}
const UserMessenger = (props: MessengerProps) => {
  const {
    leftImg,
    imgSize,
    label2,
    ...buttonStyle
  } = props;


  return (
        <Box width={"100%"} display={"block"} {...buttonStyle} className="cardright" float={"right"} >
            <Box display="flex" float={"right"}>
              <Box textAlign={"start"} float={"right"}>
                <Text color="gray.700" fontSize={"md"} className="textmess" backgroundColor={"blue.200"} borderRadius="20px" px={4} py={2}>
                  {label2}
                </Text>
              </Box>
              <Box float={"right"}>
                <Image
                  height={imgSize ?? 45}
                  width={imgSize ?? 45}
                  borderRadius={100}
                  marginLeft={3}
                  src={leftImg}
                />
              </Box>
            </Box>
          <Spacer />
        </Box>
  );
};

export default UserMessenger;
