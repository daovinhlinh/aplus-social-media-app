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




interface PhotoProps {
    leftImg?: ReactChild;
    rightIcon?: ReactChild;
    onClick: () => void;
    [x: string]: any; //rest props
}

const PhotoCp = (props :PhotoProps) => {

    const { leftImg, rightIcon, onClick, ...buttonStyle } = props;
    return (
        <HStack width={"100%"} onClick={onClick} {...buttonStyle} position='relative'>
                <Box>
                    {leftImg}
                    
                </Box>
                <Box 
                    position='absolute'
                    width={30}
                    height={30}
                    top ='6%'
                    right='8%'
                    background = 'rgba(57, 57, 57, 0.71)'
                    borderRadius={100}
                        
                >
                    {rightIcon}
                </Box>
        </HStack>
    );
};

export default PhotoCp;
