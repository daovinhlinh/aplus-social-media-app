import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import BackgroundGProfile from "../../../components/BackgoundprofileG";
import MainProfileG from "../../../components/MainprofileG";
import PageContainer from "../../../components/PageContainer";
import styles from "./styles.module.scss";

const ProfileGroup = () => {
   return (
      <PageContainer className={styles.profile}>
         <Flex>
            <Container>
               <div className={styles.backgroundGprofile}>
                  <BackgroundGProfile />
               </div>
            </Container>
            <Container>
               <div className={styles.mainprofileG}>
                  <MainProfileG />
               </div>
            </Container>
         </Flex>
      </PageContainer>
   );
};

export default ProfileGroup;
