import React, { useState } from "react";
import {
   Box,
   Container,
   Divider,
   Flex,
   IconButton,
   Spacer,
   Text,
   Wrap,
   WrapItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Facebook from "../../assets/Icons/Facebook";
import Google from "../../assets/Icons/Google";
import Key from "../../assets/Icons/Key";
import People from "../../assets/Icons/People";
import CustomButton from "../../components/CustomButton";
import InputField, { Variant } from "../../components/InputField";
import styles from "./styles.module.scss";
import { axiosClient } from "../../utils/axiosClient";

const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const handleSubmit = async () => {
      const submitForm = {
         email,
         password,
      };

      const res = await axiosClient.post("auth/login", submitForm);
      console.log(res);

      //   const data = await res.json();
      //   console.log(data);
   };
   return (
      <div className={styles.login}>
         <Flex
            h="70%"
            minW="800px"
            w="70%"
            borderRadius={20}
            overflow="hidden"
            boxShadow="xl"
         >
            <Box
               display="flex"
               flexDirection="column"
               bg="white"
               justifyContent="center"
               alignItems="center"
               minHeight="500"
               w="50%"
               px={5}
            >
               <Text fontSize="2xl" fontWeight="bold">
                  Welcome to
               </Text>
               <Text color="red.500" fontSize="5xl" fontWeight="bold">
                  A Plus
               </Text>
               <InputField
                  width="70%"
                  placeholder="Email"
                  variant={Variant.outline}
                  prefixIcons={[<People />]}
                  onChange={setEmail}
                  mb={3}
                  mt={10}
               />
               <InputField
                  width="70%"
                  placeholder="Password"
                  variant={Variant.outline}
                  prefixIcons={[<Key />]}
                  onChange={setPassword}
                  mb={3}
                  type="password"
               />

               <CustomButton text="Login" onClick={handleSubmit} />

               <Container mt={4} mb={8}>
                  <Text as="span" color="gray.500" fontWeight="bold">
                     Don't have an account?{" "}
                  </Text>
                  <Link to={"/register"}>
                     <Text as="span" color="red.500" fontWeight="bold">
                        Sign Up
                     </Text>
                  </Link>
               </Container>
            </Box>
            <Box bg="red.500" w="50%"></Box>
         </Flex>
      </div>
   );
};

export default Login;
