import { Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import People from "../../assets/Icons/People";
import DetailCard from "../../components/DetailCard";
import FeedCard from "../../components/FeedCard";
import IconCard from "../../components/IconCard";
import Navbar from "../../components/NavBar";
import PageContainer from "../../components/PageContainer";
import styles from "./styles.module.scss";

import Options from '/src/assets/images/options.svg'

const NewFeed = () => {
    return (
        <PageContainer>
            <FeedCard />
        </PageContainer>
    );
};

export default NewFeed;
