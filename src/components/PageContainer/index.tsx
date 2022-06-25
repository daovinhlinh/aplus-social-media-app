import React from "react";
import { Box, Flex, Spinner } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import React from "react";
import Friends from "../../assets/Icons/Friends";
import IconProfile from "../../assets/Icons/IconProfile";
import Photo from "../../assets/Icons/Photo";
import Post from "../../assets/Icons/Post";
import Video from "../../assets/Icons/Video";
import { userDataState } from "../../store/user";
import DetailCard from "../DetailCard";
import IconCard from "../IconCard";
import Navbar from "../NavBar";
import styles from "./styles.module.scss";

const userFeatureList = [
  {
    title: "Post",
    icon: <Post />,
    link: "/",
  },
  {
    title: "Profile",
    icon: <IconProfile />,
    link: "/profile",
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
  const imgFolder = import.meta.env.VITE_CDN_URL;

  if (!userData) {
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="red.500"
        size="xl"
      />
    );
  }

  return (
    <Flex className={styles.pagecontainer} width="100%" flexDirection="column">
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
            userId={userData.username}
            label2={userData.email}
            leftImg={imgFolder + userData.avatar}
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
          {(isAdmin ? featureList : userFeatureList).map((item) => (
            <Link
              to={
                item.title === "Profile"
                  ? `${item.link}/${userData.username}`
                  : item.link
              }
            >
              <IconCard
                isActive={page === item.title}
                label={item.title}
                leftIcon={item.icon}
              />
            </Link>
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
        {/* {!isAdmin && (
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
                label={item.title}
                leftIcon={item.icon}
                onClick={() => {
                  console.log(123);
                }}
              />
            ))}
          </Box>
        )} */}
      </Flex>
    </Flex>
  );
};

export default PageContainer;
