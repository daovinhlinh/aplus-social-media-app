import { Container, Flex, Box } from "@chakra-ui/react";
import React from "react";
import IconProfile from "../../assets/Icons/IconProfile";
import People from "../../assets/Icons/People";
import Photo from "../../assets/Icons/Photo";
import Post from "../../assets/Icons/Post";
import Video from "../../assets/Icons/Video";
import BackgroundProfile from "../../components/BackgroundProfile";
import Friendslist from "../../components/FriendsList";
import MainProfile from "../../components/MainProfile";
import Navbar from "../../components/NavBar";
import PageContainer from "../../components/PageContainer";
import styles from "./styles.module.scss";




const Profile = () => {


    return (
        <div className={styles.profile}>

            <PageContainer>
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
                <Box display='none'>
                    <div className={styles.friendslist}>
                        <Friendslist />
                    </div>
                </Box>
            </PageContainer>

        </div>
    );
};

export default Profile;
