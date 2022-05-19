import {
    Box,
    Container,
    HStack,
    Image,
    Spacer,
    Text,
    VStack,
} from "@chakra-ui/react";
import React, { ReactChild } from "react";
import Options from "../../assets/Icons/Options";




interface DetailCardProps {
    leftImg?: ReactChild;
    rightIcon?: ReactChild;
    label1: string;
    label2: string;
    onClick: () => void;
    [x: string]: any; //rest props
}

const DetailCard = (props: DetailCardProps) => {

    const { leftImg, rightIcon, label1, label2, onClick, ...buttonStyle } = props;
    return (
        <HStack width={"100%"} py={4} px={4} onClick={onClick} {...buttonStyle}>
            <Box>
                {leftImg}
            </Box>
            <Box textAlign={"start"}>
                <Text color="black" fontWeight="bold" fontSize={"md"}>
                    {label1}
                </Text>
                <Text color="gray.500" fontSize={"sm"}>
                    {label2}
                </Text>
            </Box>
            <Spacer />
            <Box alignSelf={"flex-start"}>
                {rightIcon}
            </Box>
        </HStack>
    );
};

export default DetailCard;
