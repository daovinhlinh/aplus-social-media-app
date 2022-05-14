import {
    Box
} from "@chakra-ui/react";
import React from "react";


const IconCard = (props: any) => {
    return (
        <Box
            as='button'
            minHeight='50px'
            lineHeight='1.2'
            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
            border='none'
            outline='none'
            p='10px'
            borderRadius='10px'
            fontSize='16px'
            fontWeight='semibold'
            bg='none'
            color='#000'
            _hover={{ bg: 'white', color: 'red.500' }}
            _active={{ bg: 'gray.100', color: 'red.500', outlineWidth: 0 }}
            _focus={{
                boxShadow:
                    '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
            }}
        >
            Join Group
        </Box>
    );
};

export default IconCard;
