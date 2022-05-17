import { Container, Flex, Box } from "@chakra-ui/react";
import React from "react";
import IconProfile from "../../assets/Icons/IconProfile";
import People from "../../assets/Icons/People";
import Photo from "../../assets/Icons/Photo";
import Post from "../../assets/Icons/Post";
import Video from "../../assets/Icons/Video";
import BackgroundProfile from "../../components/BackgroundProfile";
import DetailCard from "../../components/DetailCard";
import FeedCard from "../../components/FeedCard";
import Friendslist from "../../components/FriendsList";
import IconCard from "../../components/IconCard";
import MainProfile from "../../components/MainProfile";
import Navbar from "../../components/NavBar";
import PageContainer from "../../components/PageContainer";
import Photoslist from "../../components/PhotosList";
import styles from "./styles.module.scss";



const PhotoList = () => {

    
    return (
        <div className={styles.profile}>
                
                <PageContainer>
                        <Box className={styles.backgroundprofile}>
                            
                            <BackgroundProfile />
                            
                        </Box>
                        <Box className={styles.friendslist}>
                           
                            <Photoslist/>
                            
                        </Box>
                </PageContainer>
                
        </div>
    );
};

export default PhotoList;
