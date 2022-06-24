import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import Friends from "../../../assets/Icons/Friends";
import IconProfile from "../../../assets/Icons/IconProfile";
import Photo from "../../../assets/Icons/Photo";
import Post from "../../../assets/Icons/Post";
import Video from "../../../assets/Icons/Video";
import BackgroundProfile from "../../../components/BackgroundProfile";
import FeedCard from "../../../components/FeedCard";
import PageContainer from "../../../components/PageContainer";
import styles from "./styles.module.scss";

const PostGroup = () => {
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
        <Box className={styles.backgroundGprofile}></Box>
        <Box className={styles.mainprofileG}>
          <FeedCard />
        </Box>
      </PageContainer>
    </div>
  );
};

export default PostGroup;
