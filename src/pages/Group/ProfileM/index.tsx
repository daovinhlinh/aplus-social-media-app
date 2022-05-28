import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import BackgroundGMem from "../../../components/BackgroundGmem";
import MainProfileG from "../../../components/MainprofileG";
import PageContainer from "../../../components/PageContainer";
import styles from "./styles.module.scss";

const ProfileGroupM = () => {
   return (
      <PageContainer className={styles.profile}>
         <Flex>
            <Container
               display="flex"
               alignItems="center"
               justifyContent="space-between"
            >
               <div className={styles.backgroundGprofile}>
                  <BackgroundGMem />
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

export default ProfileGroupM;
