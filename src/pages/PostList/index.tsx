import { Box } from "@chakra-ui/react";
import React from "react";
import BackgroundProfile from "../../components/BackgroundProfile";
import PageContainer from "../../components/PageContainer";
import Postlist from "../../components/Postlist";
import styles from "./styles.module.scss";

const PhotoList = () => {
   return (
      <div className={styles.profile}>
         <PageContainer>
            <Box className={styles.backgroundprofile}>
               <BackgroundProfile />
            </Box>
            <Box className={styles.friendslist}>
               <Postlist />
            </Box>
         </PageContainer>
      </div>
   );
};

export default PhotoList;
