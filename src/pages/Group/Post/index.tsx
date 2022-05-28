import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import BackgroundGProfile from "../../../components/BackgoundprofileG";
import FeedCard from "../../../components/FeedCard";
import PageContainer from "../../../components/PageContainer";
import styles from "./styles.module.scss";

const PostGroup = () => {
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
                  <FeedCard />
               </div>
            </Container>
         </Flex>
      </PageContainer>
   );
};

export default PostGroup;
