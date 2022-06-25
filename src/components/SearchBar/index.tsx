import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { debounce } from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from "../../assets/Icons/Search";
import Setting from "../../assets/Icons/Setting";
import { UserData } from "../../store/user";
import { axiosClient } from "../../utils/axiosClient";
import DetailCard from "../DetailCard";
import styles from "./styles.module.scss";

const SearchBar = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [result, setResult] = useState<UserData>(null);
  const navigate = useNavigate();
  const imgFolder = import.meta.env.VITE_CDN_URL;

  const findUser = async (value: string) => {
    try {
      const findUserRes = await axiosClient.get(`/user?username=${value}`);
      setResult(findUserRes.data);
    } catch {
      if (result) {
        setResult(null);
      }
    }
  };

  const debounceSearch = useCallback(
    debounce((value) => findUser(value), 1000),
    []
  );

  useEffect(() => {
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
      {searchText !== "" && (
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
          {result ? (
            <DetailCard
              label2={result.email}
              onClick={() => navigate(`/profile/${result.username}`)}
              userId={result.username}
              leftImg={`${imgFolder}${result.avatar}`}
              cursor="pointer"
            />
          ) : (
            <Text>User not found</Text>
          )}
        </Stack>
      )}
    </Stack>
  );
};

export default SearchBar;
