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
import Options from "../../assets/Icons/Options";
import Pen from "../../assets/Icons/Pen";

const ButtonEditG = (props :any) => {
    return (
        <Button 
            leftIcon={<Pen/>}
            colorScheme="green"
            position =  "absolute"
            width = {130}
            height = {35}
            left = {560}
            top =  {237}
        >
           <Box>
               <Pen/>
           </Box>
            <Box textAlign={"center"}>
                <Text 
                    color="white" 
                    fontWeight="600" 
                    fontSize={16}
                    w =  {89.89}                   
                    height = {19}
                    left = {595.68}
                    top = {249}
                    pl={2}

                    fontFamily = "Inter"
                    fontStyle = "Semi Bold"
                    display = "flex"
                >
                    Edit Group
                </Text>
            </Box>
            <Spacer />
        </Button>
    );
};

export default ButtonEditG;
