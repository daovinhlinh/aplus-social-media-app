import { Box } from "@chakra-ui/react";
import React from "react";
import BackgroundGProfile from "../../../components/BackgoundprofileG";
import PageContainer from "../../../components/PageContainer";
import Photoslist from "../../../components/PhotosList";
import styles from "./styles.module.scss";

const PhotoListG = () => {
   return (
      <div className={styles.profile}>
         <PageContainer>
            <Box className={styles.backgroundGprofile}>
               <BackgroundGProfile />
            </Box>
            <Box className={styles.PhotoListG}>
               <Photoslist />
            </Box>
         </PageContainer>
      </div>
   );
};

export default PhotoListG;
