import {
    Box,
    Container,
    HStack,
    Image,
    Spacer,
    Text,
    VStack,
    Button,
    Flex,
    Img,
} from "@chakra-ui/react";
import React from "react";
import Home from "../../assets/Icons/Home";
import Options from "../../assets/Icons/Options";
import Place from "../../assets/Icons/Place";
import Study from "../../assets/Icons/Study";
import WhiteOptions from "../../assets/Icons/WhiteOptions";
import ButtonEdit from "../ButtonEdit";
import DetailCard from "../DetailCard";
import FeedCard from "../FeedCard";
import IconCard from "../IconCard";
import PhotoCp from "../PhotoCp";
import styles from "./styles.module.scss";




const Postlist = (props :any) => {
    return (
        <Flex className={styles.postlist} width="100%" flexDirection="row" >
            <HStack width="100%" marginTop={10} borderRadius = {20}>
                
                <FeedCard/>
            </HStack>
      </Flex>
    );
};

export default Postlist;
