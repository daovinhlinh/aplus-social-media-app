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



const buyBtns =document.querySelectorAll<HTMLElement>(".favourive");
const modal = document.querySelector<HTMLElement>(".feature");
const featureList = [
    {
       title: 'Study at HUST',
       icon: <Study />
    },
    {
       title: 'Home at HUST',
       icon: <Home />
    },
    {
       title: 'Live in HUST',
       icon: <Place />
    }
]
{/*function showButton() {
    modal.classList.add('open')
}
 function hideButton() {
    modal.classList.remove('open')
}
for (const buyBtn of buyBtns){
    buyBtn.addEventListener('click', showButton)
}*/}

const MainProfile = (props :any) => {
    return (
        <Box width={"100%"} >
                <Flex
                    justifyContent="space-between"
                
                >
                    <Button
                        width = '30%'
                        height = {51}
                        background = "white"
                        marginLeft={4}
                    >
                        Personal
                    </Button>
                    <Button
                        width = {"30%"}
                        height = {51}
                        background = "white"
                        className={styles.favourive}
                    >
                        Favourive
                    </Button>
                    <Button
                        width = {"30%"}
                        height = {51}
                        background = "white"
                        marginRight={4}
                    >
                        Personal
                    </Button>
                    
                   
                </Flex>
                <Box
                    width = {"32%"}
                    height = {0}
                    border = {"4px solid #CA0101 "}
                    marginLeft = {2}
                >
                </Box>
                <Box
                    width = {"100%"}
                    height = {0}
                    border = {"1px solid #E5E5E5"}
                >
                </Box>
                <Spacer/>
                <Box bg="white" width="20%" minWidth="300px" px="10px" py="30px" 
                    overflowY='scroll'
                    overflowX='hidden'
                    className={styles.feature}
                    >
                    {
                        featureList.map((item) => (
                            <IconCard label={item.title} leftIcon={item.icon} onClick={() => { }}
                                marginTop = {4}
                            />
                        ))
                    }
                </Box>
                
            
            <Spacer />
        </Box>
    );
};

export default MainProfile;
