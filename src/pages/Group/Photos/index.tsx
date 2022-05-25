import { Container, Flex, Box } from "@chakra-ui/react";
import React from "react";
import Photoslist from "../../../components/PhotosList";
import styles from "./styles.module.scss";
import PageContainerG from "../../../components/PageContainerG";
import BackgroundGProfile from "../../../components/BackgoundprofileG";



const PhotoListG = () => {


    return (
        <div className={styles.profile}>

            <PageContainerG>
                <Box className={styles.backgroundGprofile}>

                    <BackgroundGProfile />

                </Box>
                <Box className={styles.PhotoListG}>

                    <Photoslist />

                </Box>
            </PageContainerG>

        </div>
    );
};

export default PhotoListG;