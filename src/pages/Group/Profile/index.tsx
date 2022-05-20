import { Box, Container, Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import People from "../../../assets/Icons/People";
import Photo from "../../../assets/Icons/Photo";
import BackgroundGProfile from "../../../components/BackgoundprofileG";
import DetailCard from "../../../components/DetailCard";
import FeedCard from "../../../components/FeedCard";
import IconCard from "../../../components/IconCard";
import Navbar from "../../../components/NavBar";
import styles from "./styles.module.scss";
import Setting from "../../../assets/Icons/Setting";
import Logout from "../../../assets/Icons/Logout";
import PageContainer from "../../../components/PageContainer";
import MainProfileG from "../../../components/MainprofileG";

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