import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Friends from "../../assets/Icons/Friends";
import IconProfile from "../../assets/Icons/IconProfile";
import Options from "../../assets/Icons/Options";
import Photo from "../../assets/Icons/Photo";
import Post from "../../assets/Icons/Post";
import Video from "../../assets/Icons/Video";
import { userDataState } from "../../store/user";
import DetailCard from "../DetailCard";
import IconCard from "../IconCard";
import Navbar from "../NavBar";
import styles from "./styles.module.scss";

const detailcards = {
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
};

const userFeatureList = [
   {
      title: "Post",
      icon: <Post />,
      link: "/post",
   },
   {
      title: "Profile",
      icon: <IconProfile />,
      link: "/profile",
   },
   {
      title: "Friends",
      icon: <Friends />,
      link: "/friend",
   },
   {
      title: "Photos",
      icon: <Photo />,
      link: "/photo",
   },
   {
      title: "Videos",
      icon: <Video />,
      link: "/video",
   },
];

const PageContainer = (props: any) => {
   const { isAdmin, children, featureList, page } = props;
   const userData = useRecoilValue(userDataState);
   const navigate = useNavigate();

   if (!userData) {
      return <div>Loading</div>;
   }

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
               width="25%"
               minWidth="300px"
               px="10px"
               py="30px"
               height="92vh"
               overflowY="scroll"
               overflowX="hidden"
               margin="auto 0"
               className={styles.feature}
            >
               <DetailCard
                  label1={userData.username}
                  label2={userData.email}
                  leftImg={detailcards.img}
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
               {(isAdmin ? featureList : userFeatureList).map((item) => (
                  <IconCard
                     isActive={page === item.title}
                     label={item.title}
                     leftIcon={item.icon}
                     onClick={() => {
                        // setActiveTab(item.title);
                        navigate(item.link);
                     }}
                  />
               ))}
            </Box>
            <Box
               width={isAdmin ? "60%" : "40%"}
               flex={1}
               px={10}
               py={5}
               minWidth="450"
               height="92vh"
               overflowY="scroll"
               overflowX={"hidden"}
               justifyContent="center"
            >
               {children}
            </Box>
            {!isAdmin && (
               <Box
                  bg="rgba(250, 250, 251, 1)"
                  display={["none", "none", "none", "none", "block"]}
                  boxShadow="base"
                  width="25%"
                  minWidth="300px"
                  px="10px"
                  py="30px"
                  height="92vh"
                  overflowY="scroll"
                  overflowX="hidden"
                  className={styles.feature}
               >
                  {userFeatureList.map((item, index) => (
                     <IconCard
                        // isActive={activeTab === index}
                        label={item.title}
                        leftIcon={item.icon}
                        onClick={() => {
                           console.log(123);
                        }}
                     />
                  ))}
               </Box>
            )}
         </Flex>
      </Flex>
   );
};

export default PageContainer;
