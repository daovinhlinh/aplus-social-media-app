import {
    Box, HStack, Text
} from "@chakra-ui/react";
import React, { ReactChild } from "react";
import People from "../../assets/Icons/People";

interface IconCardProps {
    leftIcon?: ReactChild;
    rightIcon?: ReactChild;
    label: string;
    onClick: () => void;
    [x: string]: any; //rest props
}

const CardManager = (props: IconCardProps) => {
    const { leftIcon, rightIcon, label, label1,label2,label3, onClick, ...buttonStyle } = props;

    return (
        <HStack
            onClick={onClick}
            as='button'
            minHeight='50px'
            lineHeight='1.2'
            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
            border='none'
            outline='none'
            p='8px'
            borderRadius='10px'
            fontSize='16px'
            fontWeight='semibold'
            bg='#FFFFFF'
            color='#000'
            _hover={{ bg: 'rgba(226, 226, 226, 0.66)', color: 'red.500', boxShadow: "base" }
            }
            _active={{
                bg: 'gray.100', color: 'red.500',
                boxShadow: "base"
            }}
            display='flex'
            flexDirection='row'
            alignItems='center'
            justifyContent='space-between'
            width='100%'
            {...buttonStyle}
        >
            <Box>
                {leftIcon}
            </Box>
            <Box>
                <Text
                    overflow="hidden"
                    textOverflow="ellipsis"
                    whiteSpace="nowrap"
                    textAlign="left"
                >
                    {label}
                </Text>
            </Box>
            <Box >
                <Text
                    overflow="hidden"
                    textOverflow="ellipsis"
                    whiteSpace="nowrap"
                    textAlign="left"
                >
                    {label1}
                </Text>
            </Box>
            <Box>
                <Text
                    overflow="hidden"
                    textOverflow="ellipsis"
                    whiteSpace="nowrap"
                    textAlign="left"
                >
                    {label2}
                </Text>
            </Box>
            <Box>
                <Text
                    overflow="hidden"
                    textOverflow="ellipsis"
                    whiteSpace="nowrap"
                    textAlign="left"
                >
                    {label3}
                </Text>
            </Box>
            <Box>
                {rightIcon}
            </Box>
        </HStack >
    );
};

export default CardManager;
