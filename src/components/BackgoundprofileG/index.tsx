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



const BackgroundGProfile = (props :any) => {
    return (
        <Box width={"100%"} >
                <Image
                    display="inline"
                    src="https://i.imgur.com/h6410NB.png"
                    height={231}
                    width={"100%"}
                    marginTop = '36px'
                    borderRadius={20}
                    
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
                    src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/130273512_2763761160608776_4202842717589028769_n.jpg?_nc_cat=104&ccb=1-6&_nc_sid=174925&_nc_ohc=81rgQt2xYmEAX-Xg7Ab&_nc_oc=AQle82fKdAhBwR85aGp_ahX_X4CLs1_KCsEk9ux-1PX7S8CHNNg7ZeBPeZgGUrpcSFo&_nc_ht=scontent.fhan2-4.fna&oh=00_AT-PKFY7jbGsxZ7wOEjbhE7yjqJrZIh0rmNFsoK5tMN2mw&oe=62A1869B"
                    height={150}
                    width={150}
                    borderRadius="50%"
                    top= {"45%"}
                    left = {"6%"}
                    box-sizing = "border-box"

                    position = "absolute"
                    />
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
                       left = "76%"
                       top =  "74%">
                    <ButtonEditG text={"Edit Group"} colorScheme = 'green'/>
                    
                </Box>
            
            <Spacer />
        </Box>
    );
};

export default BackgroundGProfile;
