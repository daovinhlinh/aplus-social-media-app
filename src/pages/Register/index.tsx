import React, { useEffect, useState } from "react";
import {
   Box,
   Button,
   Container,
   Divider,
   Flex,
   FormControl,
   FormLabel,
   IconButton,
   Input,
   Text,
   useToast,
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
import MessageBox from "../../components/MessageBox";

const Register = () => {
   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [password2, setPassword2] = useState("");
   const [matchPassword, setMatchPassword] = useState(false);
   const [error, setError] = useState("");

   useEffect(() => {
      if (password !== password2) {
         setMatchPassword(false);
      } else {
         setMatchPassword(true);
      }
   }, [password2]);

   const handleSubmit = async (e) => {
      e.preventDefault();

      const submitForm = {
         username,
         email,
         password,
      };

      const res = await axiosClient.post("auth/register", submitForm);

      console.log(res);
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
               {/* <InputField
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
               )} */}
               <form onSubmit={handleSubmit}>
                  {error && <MessageBox status="error" message={error} />}
                  <FormControl isRequired w="300px">
                     <FormLabel>Username</FormLabel>
                     <Input onChange={(e) => setUsername(e.target.value)} />
                  </FormControl>
                  <FormControl mt={3} isRequired w="300px">
                     <FormLabel>Email</FormLabel>
                     <Input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="test@test.com"
                     />
                  </FormControl>
                  <FormControl mt={3} isRequired w="300px">
                     <FormLabel>Password</FormLabel>
                     <Input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="******"
                     />
                  </FormControl>
                  <FormControl mt={3} isRequired w="300px">
                     <FormLabel>Confirm Password</FormLabel>
                     <Input
                        onChange={(e) => setPassword2(e.target.value)}
                        type="password"
                        placeholder="******"
                     />
                  </FormControl>
                  <Button
                     width="full"
                     backgroundColor="red.500"
                     color="#fff"
                     mt={4}
                     type="submit"
                  >
                     Sign Up
                  </Button>
               </form>
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
