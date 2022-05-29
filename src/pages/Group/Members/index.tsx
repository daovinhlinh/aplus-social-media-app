import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Friends from "../../../assets/Icons/Friends";
import IconProfile from "../../../assets/Icons/IconProfile";
import Photo from "../../../assets/Icons/Photo";
import Post from "../../../assets/Icons/Post";
import Video from "../../../assets/Icons/Video";
import BackgroundGProfile from "../../../components/BackgoundprofileG";
import BackgroundProfile from "../../../components/BackgroundProfile";
import Friendslist from "../../../components/FriendsList";
import PageContainer from "../../../components/PageContainer";
import styles from "./styles.module.scss";

const Members = () => {
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
   return (
      <div className={styles.profile}>
      <PageContainer isAdmin={true} featureList={featureList}>
         
            <Box className={styles.backgroundGprofile}>
               <BackgroundProfile />
            </Box>
            
            <Box className={styles.friendslist}>
               <Friendslist />
            </Box>
         
      </PageContainer>
      </div>
   );
};

export default Members;
