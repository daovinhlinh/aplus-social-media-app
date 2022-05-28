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
} from "@chakra-ui/react";
import React from "react";
import Home from "../../assets/Icons/Home";
import Place from "../../assets/Icons/Place";
import Study from "../../assets/Icons/Study";
import ButtonEdit from "../ButtonEdit";
import DetailCard from "../DetailCard";
import IconCard from "../IconCard";
import styles from "./styles.module.scss";



const buyBtns = document.querySelectorAll<HTMLElement>(".favourive");
const modal = document.querySelector<HTMLElement>(".feature");
const featureList = [
    {
        title: 'Create at 2022',
        icon: <Study />
    },
    {
        title: 'total 1000 members',
        icon: <Home />
    }
]

const MainProfileG = (props: any) => {
    return (
        <Box width={"100%"} >
            <Box width="10%" minWidth="300px" px="10px" py="24px"
                overflowY='scroll'
                overflow='hidden'
                className={styles.feature}
            >
                {
                    featureList.map((item) => (
                        <IconCard label={item.title} leftIcon={item.icon} onClick={() => { }}
                        />
                    ))
                }
            </Box>
        </Box>
    );
};

export default MainProfileG;