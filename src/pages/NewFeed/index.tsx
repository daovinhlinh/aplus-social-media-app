import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import DetailCard from "../../components/DetailCard";
import FeedCard from "../../components/FeedCard";
import Navbar from "../../components/NavBar";
import styles from "./styles.module.scss";

const NewFeed = () => {
    return (
        <Flex width="100%" flexDirection="column">
            <Navbar />
            <Flex>
                <Container>
                    <DetailCard />
                    <DetailCard />
                    <DetailCard />
                    <DetailCard />
                </Container>
                <Container>
                    <FeedCard />
                </Container>
                <Container></Container>
            </Flex>
        </Flex>
    );
};

export default NewFeed;
