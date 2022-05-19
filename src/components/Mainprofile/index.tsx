import {
    Box,
    Container,
    HStack,
    Image,
    Spacer,
    Text,
    VStack,
    Button,
} from "@chakra-ui/react";
import React from "react";
import IconCard from "../IconCard";
import styles from "./styles.module.scss";
import Home from "../../assets/Icons/Home";
import Study from "../../assets/Icons/Study";

const MainProfileG = (props :any) => {
    return (
        <HStack width={"100%"} >
            <div className={styles.mainprofileG}>
                <Box>
                    <Spacer/>
                    <div className={styles.d1}>
                    <HStack width={"100%"}>
            <Box>
                <Study/>
            </Box>
                <Box textAlign={"start"} width = {200}>
                    <Text color="black" fontWeight="bold" fontSize={"md"}>
                        created at 2022
                    </Text>
                </Box>
                <Spacer />
                <Box alignSelf={"flex-start"}>
                </Box>
            </HStack>
                    </div>
                    <div className={styles.d2}>
                    <HStack width={"100%"}>
            <Box>
                <Home/>
            </Box>
                <Box textAlign={"start"} width = {200}>
                    <Text color="black" fontWeight="bold" fontSize={"md"}>
                        ToTal 100 members
                    </Text>
                </Box>
                <Spacer />
                <Box alignSelf={"flex-start"}>
                </Box>
            </HStack>
                    </div>

                </Box>
                
            </div>
            <Spacer />
        </HStack>
    );
};

export default MainProfileG;
