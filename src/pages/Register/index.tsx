import React, { useEffect, useState } from "react";
import {
   Box,
   Container,
   Divider,
   Flex,
   IconButton,
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

const Register = () => {
   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [password2, setPassword2] = useState("");
   const [matchPassword, setMatchPassword] = useState(false);

   useEffect(() => {
      if (password !== password2) {
         setMatchPassword(false);
      } else {
         setMatchPassword(true);
      }
   }, [password2]);

   const handleSubmit = async () => {
      const submitForm = {
         username,
         email,
         password,
      };

      const res = await axiosClient.post("auth/register", submitForm);
      const data = await res.json();
      console.log(data);
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
                  placeholder="User name"
                  variant={Variant.outline}
                  prefixIcons={[<People />]}
                  onChange={setUsername}
                  mb={3}
                  mt={10}
               />
               <InputField
                  width="70%"
                  placeholder="Email"
                  variant={Variant.outline}
                  onChange={setEmail}
                  prefixIcons={[<People />]}
                  mb={3}
                  type="email"
               />
               <InputField
                  width="70%"
                  placeholder="Password"
                  variant={Variant.outline}
                  onChange={setPassword}
                  prefixIcons={[<Key />]}
                  mb={3}
                  type="password"
               />
               <InputField
                  width="70%"
                  placeholder="Confirm password"
                  variant={Variant.outline}
                  onChange={setPassword2}
                  prefixIcons={[<Key />]}
                  mb={3}
                  type="password"
               />
               {!matchPassword && password2 !== "" && (
                  <Text color="red.400" mb={5}>
                     Password does not match
                  </Text>
               )}

               <CustomButton text="Sign up" onClick={handleSubmit} />

               <Container mt={4} mb={8}>
                  <Text as="span" color="gray.500" fontWeight="bold">
                     Already have an account?
                  </Text>
                  <Link to={"/login"}>
                     <Text as="span" color="red.500" fontWeight="bold">
                        {" "}
                        Login
                     </Text>
                  </Link>
               </Container>
            </Box>
            <Box bg="red.500" w="50%"></Box>
         </Flex>
      </div>
   );
};

export default Register;
