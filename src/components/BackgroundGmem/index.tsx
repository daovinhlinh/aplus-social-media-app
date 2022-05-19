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
import Pen from "../../assets/Icons/Pen";
import ButtonEditG from "../ButtonEditG";
import CustomButton from "../CustomButton";



const BackgroundGMem = (props :any) => {
    return (
        <HStack width={"100%"} >
            <div className="bodybackground">
                <Image
                    display="inline"
                    src="https://i.imgur.com/h6410NB.png"
                    height={344}
                    width={705}
                    borderRadius={20}
                    top={-4}
                    position = "absolute"
                    
                />
                <Image
                    display="inline"
                    src="https://i.imgur.com/5CEPFFg.png"
                    height={113}
                    width={705}
                    top={227}
                    position = "absolute"
                />
                <Image
                    display="inline"
                    src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/130273512_2763761160608776_4202842717589028769_n.jpg?_nc_cat=104&ccb=1-6&_nc_sid=174925&_nc_ohc=81rgQt2xYmEAX-Xg7Ab&_nc_oc=AQle82fKdAhBwR85aGp_ahX_X4CLs1_KCsEk9ux-1PX7S8CHNNg7ZeBPeZgGUrpcSFo&_nc_ht=scontent.fhan2-4.fna&oh=00_AT-PKFY7jbGsxZ7wOEjbhE7yjqJrZIh0rmNFsoK5tMN2mw&oe=62A1869B"
                    height={150}
                    width={150}
                    borderRadius={100}
                    top= {152}
                    left = {43}
                    box-sizing = "border-box"

                    position = "absolute"
                />
                <Box textAlign={"start"}>
                    <Text color="black" fontWeight="600" fontSize={"24"} 
                        height = {29} 
                        width = {163} 
                        top = {234} 
                        left = {208} 
                        position = "absolute"
                        font-family = "Inter"
                        font-style = "normal"
                    >
                        Chess Thủ
                    </Text>
                    <Text color="gray.500" fontSize={"16"}
                        height = {19} 
                        width = {300} 
                        top = {266} 
                        left = {208}
                        position = "absolute"
                        font-family = "Inter"
                        font-style = "normal"
                    >
                        Hội những người đam mê Billard 
                    </Text>
                </Box>
                <Box  
                       position =  "absolute"
                       width = {130}
                       height = {35}
                       left = "79%"
                       top =  "74%">
                    <CustomButton text={"Leave Group"}/>
                    
                </Box>
            </div>
            <Spacer />
        </HStack>
    );
};

export default BackgroundGMem;
