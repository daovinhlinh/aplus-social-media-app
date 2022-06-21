import {
   Box,
   Input,
   InputGroup,
   InputLeftElement,
   InputRightElement,
   Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Search from "../../assets/Icons/Search";
import Setting from "../../assets/Icons/Setting";
import DetailCard from "../DetailCard";

const SearchBar = () => {
   const [searchText, setSearchText] = useState<string>("");

   return (
      <Stack spacing={2} w="100%" position="relative">
         <InputGroup>
            <InputRightElement w={50} children={[<Search />]} />
            <Input
               placeholder="Search"
               paddingRight={50}
               border="none"
               backgroundColor="gray.100"
            />
         </InputGroup>
         <Stack
            position="absolute"
            top="40px"
            backgroundColor="#FFF"
            borderRadius="15px"
            width="100%"
            boxShadow={"md"}
            p={3}
            zIndex={1000}
            spacing={4}
            maxHeight="400px"
            overflowY="scroll"
         >
            <DetailCard
               label2="1"
               onClick={() => {}}
               userId={"123"}
               leftImg=""
            />
            <DetailCard
               label2="1"
               onClick={() => {}}
               userId={"123"}
               leftImg=""
            />
            <DetailCard
               label2="1"
               onClick={() => {}}
               userId={"123"}
               leftImg=""
            />
            <DetailCard
               label2="1"
               onClick={() => {}}
               userId={"123"}
               leftImg=""
            />
            <DetailCard
               label2="1"
               onClick={() => {}}
               userId={"123"}
               leftImg=""
            />
            <DetailCard
               label2="1"
               onClick={() => {}}
               userId={"123"}
               leftImg=""
            />
            <DetailCard
               label2="1"
               onClick={() => {}}
               userId={"123"}
               leftImg=""
            />
         </Stack>
      </Stack>
   );
};

export default SearchBar;
