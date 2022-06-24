import {
   Box,
   Input,
   InputGroup,
   InputLeftElement,
   InputRightElement,
   Stack,
} from "@chakra-ui/react";
import { debounce } from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import Search from "../../assets/Icons/Search";
import Setting from "../../assets/Icons/Setting";
import { axiosClient } from "../../utils/axiosClient";
import DetailCard from "../DetailCard";
import styles from "./styles.module.scss";

const SearchBar = () => {
   const [searchText, setSearchText] = useState<string>("");
   const [result, setResult] = useState([]);

   const findUser = async (value) => {
      try {
         const findUserRes = await axiosClient.get(`/user?username=${value}`);
         console.log(findUserRes.data);
      } catch {
         console.log("Không tồn tại user");
      }
   };

   const debounceSearch = useCallback(
      debounce((value) => findUser(value), 1000),
      []
   );

   useEffect(() => {
      console.log(searchText);

      if (searchText != "") {
         debounceSearch(searchText);
      }
   }, [searchText]);

   return (
      <Stack spacing={2} w="100%" position="relative">
         <InputGroup>
            <InputRightElement w={50} children={[<Search />]} />
            <Input
               placeholder="Search"
               paddingRight={50}
               border="none"
               backgroundColor="gray.100"
               onChange={(e) => setSearchText(e.target.value)}
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
            className={styles.searchResult}
         >
            <DetailCard
               label2="1"
               onClick={() => { }}
               userId={"123"}
               leftImg=""
               cursor="pointer"
            />
         </Stack>
      </Stack>
   );
};

export default SearchBar;
