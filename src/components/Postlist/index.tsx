import {
    Flex, HStack
} from "@chakra-ui/react";
import React from "react";
import FeedCard from "../FeedCard";
import styles from "./styles.module.scss";

const Postlist = (props: any) => {
    return (
        <Flex className={styles.postlist} width="100%" flexDirection="row" >
            <HStack width="100%" marginTop={10} borderRadius={20}>
                <FeedCard />
            </HStack>
        </Flex>
    );
};

export default Postlist;
