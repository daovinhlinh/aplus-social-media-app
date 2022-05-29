import { Box, Image } from "@chakra-ui/react";
import React, { ReactChild } from "react";
import WhiteOptions from "../../assets/Icons/WhiteOptions";

interface PhotoProps {
   imgSrc?: string;
   rightIcon?: ReactChild;
   onClick: () => void;
   [x: string]: any; //rest props
}

const PhotoCp = (props: PhotoProps) => {
   const { imgSrc, rightIcon, onClick, ...buttonStyle } = props;
   return (
      <Box
         width={"100%"}
         onClick={onClick}
         {...buttonStyle}
         position="relative"
      >
         <Image src={imgSrc} width="100%" borderRadius={15} />
         <Box
            position="absolute"
            width={30}
            height={30}
            top="6%"
            right="8%"
            background="rgba(57, 57, 57, 0.71)"
            borderRadius={100}
            margin="auto"
         >
            <WhiteOptions />
         </Box>
      </Box>
   );
};

export default PhotoCp;
