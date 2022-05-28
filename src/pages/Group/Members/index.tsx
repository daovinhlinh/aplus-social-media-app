import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import BackgroundGProfile from "../../../components/BackgoundprofileG";
import Friendslist from "../../../components/FriendsList";
import PageContainer from "../../../components/PageContainer";
import styles from "./styles.module.scss";

const Members = () => {
   return (
      <PageContainer>
         <Flex>
            <Box className={styles.backgroundGprofile}>
               <BackgroundGProfile />
            </Box>
            <Box className={styles.friendslist}>
               <Friendslist />
            </Box>
         </Flex>
      </PageContainer>
   );
};

export default Members;
