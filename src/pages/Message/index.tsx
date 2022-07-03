import { Box, Flex, Text, Spinner, Image } from "@chakra-ui/react";
import React, { RefObject, useEffect, useRef, useState } from "react";
import Navbar from "../../components/NavBar";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import IconProfile from "../../assets/Icons/IconProfile";
import Photo from "../../assets/Icons/Photo";
import Post from "../../assets/Icons/Post";
import Video from "../../assets/Icons/Video";
import { userDataState } from "../../store/user";
import styles from "./styles.module.scss";
import DetailMess from "../../components/DetailMess";
import DetailCard from "../../components/DetailCard";
import Edit from "../../assets/Icons/Edit";
import Options from "../../assets/Icons/Options";
import Messenger from "../../components/Messenger";

const userMessage = [
  {
    username: "Nguyễn Văn A",
    lastMess: "Hello",
    avatar: "https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/274709899_2450928591728366_7205751784882790502_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lM27hyNTnZIAX8IwcnM&_nc_ht=scontent.fhan3-5.fna&oh=00_AT9EIrN9uUCv1V9nYtu1G78scwkYRcTFTIPZrDZXwQxmCQ&oe=62C70B4C",
  },
  {
    username: "Thái Sơn",
    lastMess: "Hello acd ádafg",
    avatar: "https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/274709899_2450928591728366_7205751784882790502_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lM27hyNTnZIAX8IwcnM&_nc_ht=scontent.fhan3-5.fna&oh=00_AT9EIrN9uUCv1V9nYtu1G78scwkYRcTFTIPZrDZXwQxmCQ&oe=62C70B4C",
  },
  {
    username: "Hùng",
    lastMess: "Hello",
    avatar: "https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/274709899_2450928591728366_7205751784882790502_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lM27hyNTnZIAX8IwcnM&_nc_ht=scontent.fhan3-5.fna&oh=00_AT9EIrN9uUCv1V9nYtu1G78scwkYRcTFTIPZrDZXwQxmCQ&oe=62C70B4C",
  },
  {
    username: "Linh",
    lastMess: "Hello",
    avatar: "https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/274709899_2450928591728366_7205751784882790502_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lM27hyNTnZIAX8IwcnM&_nc_ht=scontent.fhan3-5.fna&oh=00_AT9EIrN9uUCv1V9nYtu1G78scwkYRcTFTIPZrDZXwQxmCQ&oe=62C70B4C",
  },
];

const Message = (props: any) => {

  const imgFolder = import.meta.env.VITE_CDN_URL;

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Navbar/>
      <Flex width="100%" justifyContent="space-between">
        <Box
          bg="rgba(250, 250, 251, 1)"
          boxShadow="base"
          width="20%"
          minWidth="300px"
          px="10px"
          py="30px"
          height="92vh"
          overflowY="scroll"
          overflowX="hidden"
          margin="auto 0"
          className={styles.feature}
        >
          <Text
            py="10px"
            fontSize={20}
            fontWeight = {700}
            color = "rgba(0, 0, 0, 0.36)"
          >RECENTLY</Text>
          {(userMessage).map((item) => (
            <DetailMess
              py="10px"
              px="6px"
              userId={item.username}
              label2={item.lastMess}
              leftImg={item.avatar}
              onClick={() => {}}
              _hover={{
                bg: "white",
                color: "red.500",
                boxShadow: "base",
              }}
              _active={{
                bg: "white",
                color: "red.500",
                boxShadow: "base",
              }}
            />
          ))} 
        </Box>
        
        <Box
          bg="rgba(250, 250, 251, 1)"
          boxShadow="base"
          width="60%"
          minWidth="300px"
          px="10px"
          py="30px"
          height="92vh"
          overflowY="scroll"
          overflowX="hidden"
          margin="auto 0"
          className={styles.feature}
          
        >
          <Box
            display={"flex"}
            justifyContent = "space-between"
            paddingBottom={4}
            borderBottom= "1px solid #E0DCDC" 
          >
            <Box
              display={"flex"}
            >
              <Image
                height={ 50}
                width={ 50}
                borderRadius={100}
                marginRight={3}
                src={"https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/274709899_2450928591728366_7205751784882790502_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lM27hyNTnZIAX8IwcnM&_nc_ht=scontent.fhan3-5.fna&oh=00_AT9EIrN9uUCv1V9nYtu1G78scwkYRcTFTIPZrDZXwQxmCQ&oe=62C70B4C"}
              />
              
              <Text
                fontSize={24}
                fontWeight = {700}
              >
                Nguyễn Văn A
              </Text>
            </Box>
            <Options/>
          </Box>
          <Messenger
            py="10px"
            px="6px"
            userId={"item.username"}
            label2={"item.lastMess"}
            leftImg={"https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/274709899_2450928591728366_7205751784882790502_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lM27hyNTnZIAX8IwcnM&_nc_ht=scontent.fhan3-5.fna&oh=00_AT9EIrN9uUCv1V9nYtu1G78scwkYRcTFTIPZrDZXwQxmCQ&oe=62C70B4C"}
            onClick={() => {}}
            _hover={{
              bg: "white",
              color: "red.500",
              boxShadow: "base",
            }}
            _active={{
              bg: "white",
              color: "red.500",
              boxShadow: "base",
            }}
          />
        </Box>
        <Box
          bg="rgba(250, 250, 251, 1)"
          boxShadow="base"
          width="20%"
          minWidth="300px"
          px="10px"
          py="30px"
          height="92vh"
          overflowY="scroll"
          overflowX="hidden"
          margin="auto 0"
          className={styles.feature}
        >
          <Text
            py="10px"
            px="8px"
            fontSize={20}
            fontWeight = {700}
            color = "rgba(0, 0, 0, 0.36)"
          >ONLINES</Text>
          {(userMessage).map((item) => (
            <DetailCard
              py="10px"
              px="8px"
              userId={item.username}
              leftImg={item.avatar}
              onClick={() => {}}
              _hover={{
                bg: "white",
                color: "red.500",
                boxShadow: "base",
              }}
              _active={{
                bg: "white",
                color: "red.500",
                boxShadow: "base",
              }}
            />
          ))} 
        </Box>
      </Flex>
    </React.Suspense>
  );
};

export default Message;
