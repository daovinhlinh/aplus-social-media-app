import { Box } from "@chakra-ui/react";
import React from "react";
import BackgroundProfile from "../../components/BackgroundProfile";
import Friendslist from "../../components/FriendsList";
import MainProfile from "../../components/MainProfile";
import PageContainer from "../../components/PageContainer";
import styles from "./styles.module.scss";

const Profile = () => {
   return (
      <div className={styles.profile}>
         <PageContainer page="Profile">
            <Box>
               <div className={styles.backgroundprofile}>
                  <BackgroundProfile />
               </div>
            </Box>
            <Box>
               <div className={styles.mainprofile}>
                  <MainProfile />
               </div>
            </Box>
            <Box display="none">
               <div className={styles.friendslist}>
                  <Friendslist />
               </div>
            </Box>
         </PageContainer>
      </div>
   );
};

export default Profile;
