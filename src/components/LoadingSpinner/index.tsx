import { Center, Spinner } from "@chakra-ui/react";
import React from "react";

const LoadingSpinner = () => {
   return (
      <Center height={"100%"}>
         <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="red.500"
            size="xl"
         />
      </Center>
   );
};

export default LoadingSpinner;
