import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import IconProfile from "../../../assets/Icons/IconProfile";
import MainProfileG from "../../../components/MainprofileG";
import PageContainer from "../../../components/PageContainer";
import styles from "./styles.module.scss";
import Post from "../../../assets/Icons/Post";
import BackgroundProfile from "../../../components/BackgroundProfile";
import Friends from "../../../assets/Icons/Friends";
import Photo from "../../../assets/Icons/Photo";
import Video from "../../../assets/Icons/Video";

const ProfileGroup = () => {
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
         link: "/friendG",
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
   return (
      <div className={styles.profile} >
      <PageContainer isAdmin={true} featureList={featureList}>
         
            <Box>
               <div className={styles.backgroundGprofile}>
                  <BackgroundProfile />
               </div>
            </Box>
            <Box>
               <div className={styles.mainprofileG}>
                  <MainProfileG />
               </div>
            </Box>
         
      </PageContainer>
      </div>
   );
};

export default ProfileGroup;
