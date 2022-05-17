import {
    Box,
    Button,
    Container,
    HStack,
    Image,
    Spacer,
    Text,
    VStack,
} from "@chakra-ui/react";
import React from "react";
import IconProfile from "../../assets/Icons/IconProfile";
import Options from "../../assets/Icons/Options";
import Pen from "../../assets/Icons/Pen";

const ButtonEdit = (props :any) => {
    return (
        <Button 
            colorScheme="green"
            width = {130}
            height = {35}
        >
           <Box>
               <Pen/>
           </Box>
            <Box textAlign={"start"}>
                <Text 
                    color="white" fontWeight="600" fontSize={"16"}
                    width =  {89.89}                   
                    height = {19}

                    fontFamily = "Inter"
                    fontStyle = "normal"
                    display = "flex"
                >
                    Edit Profile
                </Text>
            </Box>
            <Spacer />
        </Button>
    );
};

export default ButtonEdit;
