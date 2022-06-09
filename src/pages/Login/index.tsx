import {
   Box,
   Button,
   Container,
   Flex,
   FormControl,
   FormLabel,
   Input,
   Text,
   useToast,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import MessageBox from "../../components/MessageBox";
import { AuthContext } from "../../context/authContext";
import { userDataState } from "../../store/user";
import { axiosClient } from "../../utils/axiosClient";
import styles from "./styles.module.scss";

const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState("");
   const setUserData = useSetRecoilState(userDataState);
   const navigate = useNavigate();
   const isError = email === "";

   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);

      const submitForm = {
         email,
         password,
      };

      const res = await axiosClient.post("auth/login", submitForm);

      if (res.status === 200) {
         setLoading(false);
         setUserData(res.data);
         navigate("/");
         console.log(res);
      } else {
         setLoading(false);
         setError(res as unknown as string);
      }

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
               <form onSubmit={handleSubmit}>
                  {error && <MessageBox status="error" message={error} />}
                  <FormControl isRequired w="300px">
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
                  <Button
                     width="full"
                     backgroundColor="red.500"
                     color="#fff"
                     mt={4}
                     type="submit"
                  >
                     Sign In
                  </Button>
               </form>

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
