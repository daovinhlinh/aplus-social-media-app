import {
    Box,
    Container,
    HStack,
    Image,
    Spacer,
    Text,
    VStack,
} from "@chakra-ui/react";
import React from "react";
import ButtonEdit from "../ButtonEdit";
const BackgroundProfile = (props :any) => {
    return (
        <Box width={"100%"} borderRadius={20} >
                <Image
                    display="inline"
                    src="https://i.imgur.com/h6410NB.png"
                    height={231}
                    width={"100%"}
                    marginTop = '36px'
                />
                <Image
                    src="https://i.imgur.com/5CEPFFg.png"
                    height={113}
                    width={"100%"}
                    position = "absolute"
                    bottom={0}
                />
                <Box textAlign={"start"}>
                    <Image
                        display="inline"
                        src="https://www.w3schools.com/howto/img_avatar.png"
                        height={150}
                        width={150}
                        borderRadius={'50%'}
                        top= {"42%"}
                        left = {"8%"}
                        box-sizing = "border-box"
                        position = "absolute"
                    />
                    <Text color="black" fontWeight="600" fontSize={"24"} 
                        height = {29} 
                        width = {163} 
                        top = '66%'
                        left='33%'
                        position = "absolute"
                        font-family = "Inter"
                        font-style = "normal"
                    >
                        Dao Vinh Ling
                    </Text>
                    <Text color="gray.500" fontSize={"16"}
                        height = {19} 
                        width = {70} 
                        top = '76%'
                        left= '33%'
                        position = "absolute"
                        font-family = "Inter"
                        font-style = "normal"
                    >
                        Fuckboiz
                    </Text>
                </Box>
                <Box
                    position="absolute"
                    top={"68%"}
                    right = "4%"

                >
                    <ButtonEdit/>
                </Box>
            <Spacer />
        </Box>
    );
};

export default BackgroundProfile;
