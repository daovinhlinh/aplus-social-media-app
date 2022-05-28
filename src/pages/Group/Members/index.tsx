import { Container, Flex, Box } from "@chakra-ui/react";
import React from "react";
import BackgroundGProfile from "../../../components/BackgoundprofileG";
import Friendslist from "../../../components/FriendsList";
import PageContainerG from "../../../components/PageContainerG";
import styles from "./styles.module.scss";



const Members = () => {


    return (
        
    <PageContainerG>
        <Flex>
        <Box className={styles.backgroundGprofile}>

          <BackgroundGProfile />

        </Box>
        <Box className={styles.friendslist}>

            <Friendslist />

        </Box>
        </Flex>
                
    </PageContainerG>

        
    );
};

export default Members;
