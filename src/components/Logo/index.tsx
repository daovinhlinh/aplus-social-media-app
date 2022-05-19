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
import Options from "../../assets/Icons/Options";

const Logo = (props :any) => {
    return (
        <HStack>
            <Image
                display="inline"
                src ="https://i.imgur.com/ooY51UH.png"
                height={66}
                width={92}
                top = {8}
                left = {122}
                borderRadius={100}
                marginRight={3}
            />
            <Spacer />
            <Box alignSelf={"flex-start"}>
                <Options />
            </Box>
        </HStack>
    );
};

export default Logo;
