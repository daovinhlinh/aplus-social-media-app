import { Box } from "@chakra-ui/react";
import Friendslist from "../../components/FriendsList";
import PageContainer from "../../components/PageContainer";
import styles from "./styles.module.scss";

const FriendList = () => {
   return (
      <div className={styles.profile}>
         <PageContainer page="Friends">
            <Box className={styles.backgroundprofile}></Box>
            <Box className={styles.friendslist}>
               <Friendslist />
            </Box>
         </PageContainer>
      </div>
   );
};

export default FriendList;
