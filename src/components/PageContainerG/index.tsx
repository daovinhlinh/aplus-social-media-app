import { Box, Container, Flex, HStack, Image } from "@chakra-ui/react";
import { NOTIMP } from "dns";
import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Friends from "../../assets/Icons/Friends";
import IconProfile from "../../assets/Icons/IconProfile";
import Options from "../../assets/Icons/Options";
import People from "../../assets/Icons/People";
import Photo from "../../assets/Icons/Photo";
import Post from "../../assets/Icons/Post";
import Video from "../../assets/Icons/Video";
import FriendList from "../../pages/FriendList";
import DetailCard from "../DetailCard";
import FeedCard from "../FeedCard";
import IconCard from "../IconCard";
import Navbar from "../NavBar";
import styles from "./styles.module.scss";

const detailcards = [
   {
      title1: "Hồng Anh Amie",
      title2: "Trap Girl",
      img: (
         <Image
            src="https://scontent.fhan11-1.fna.fbcdn.net/v/t31.18172-8/26841225_744862592376172_998804515399431440_o.jpg?_nc_cat=105&ccb=1-6&_nc_sid=174925&_nc_ohc=Ckvxss-PJRoAX9aghkw&_nc_ht=scontent.fhan11-1.fna&oh=00_AT_Ee3hxiRkntw7aXCgRvyBBrdmPOLxrOuh-n-9gSm35Hw&oe=62A82296"
            height={50}
            width={50}
            borderRadius={100}
            marginRight={3}
         />
      ),
      icon: <Options />,
   },
];
const featureList = [
   {
      title: "Profile",
      icon: <IconProfile />,
      link: "/group",
   },
   {
      title: "Post",
      icon: <Post />,
      link: "/postG",
   },
   {
      title: "Members",
      icon: <Friends />,
      link: "/MemG",
   },
   {
      title: "Photos",
      icon: <Photo />,
      link: "/photoG",
   },
   {
      title: "Videos",
      icon: <Video />,
      link: "/video",
   },
];

const PageContainerG = (props: any) => {
   const { children } = props;
   const navigate = useNavigate();

   return (
      <Flex
         className={styles.pagecontainer}
         width="100%"
         flexDirection="column"
      >
         <Navbar />
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
               className={styles.feature}
            >
               <HStack className={styles.detailcard} width="100%">
                  {detailcards.map((item) => (
                     <DetailCard
                        label1={item.title1}
                        label2={item.title2}
                        leftImg={item.img}
                        rightIcon={item.icon}
                        onClick={() => {}}
                        _hover={{
                           bg: "white",
                           color: "red.500",
                           boxShadow: "base",
                        }}
                        _active={{
                           bg: "gray.100",
                           color: "red.500",
                           boxShadow: "base",
                        }}
                     />
                  ))}
               </HStack>
               {featureList.map((item) => (
                  <IconCard
                     label={item.title}
                     leftIcon={item.icon}
                     onClick={() => {
                        navigate(item.link);
                     }}
                     _hover={{
                        bg: "white",
                        color: "red.500",
                        boxShadow: "base",
                     }}
                     _active={{
                        bg: "gray.100",
                        color: "red.500",
                        boxShadow: "base",
                     }}
                  />
               ))}
            </Box>
            <Box width={"50%"} px={10} minWidth="450">
               {children}
            </Box>
         </Flex>
      </Flex>
   );
};

export default PageContainerG;
