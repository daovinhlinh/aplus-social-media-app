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
import IconCard from "../../components/IconCard";
import MainProfile from "../../components/MainProfile";
import Navbar from "../../components/NavBar";
import PageContainer from "../../components/PageContainer";
import styles from "./styles.module.scss";



const Profile = () => {
    const featureList = [
        {
           title: 'Feed',
           icon: <People />
        },
        {
           title: 'Feed1',
           icon: <People />
        },
        {
           title: 'Feed2',
           icon: <People />
        }
     ]

    
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
                            <MainProfile/>
                        </div>
                    </Box>
                </PageContainer>
                
        </div>
    );
};

export default Profile;
