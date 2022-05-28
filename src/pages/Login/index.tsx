import { Box, Container, Divider, Flex, IconButton, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import Facebook from '../../assets/Icons/Facebook';
import Google from '../../assets/Icons/Google';
import Key from '../../assets/Icons/Key';
import People from "../../assets/Icons/People";
import CustomButton from "../../components/CustomButton";
import InputField, { Variant } from "../../components/InputField";
import styles from "./styles.module.scss";

const Login = () => {
    return (
        <div className={styles.login}>
            <Flex h="70%" minW="800px" w="70%" borderRadius={20} overflow="hidden" boxShadow='xl'>
                <Box display="flex" flexDirection="column" bg="white" justifyContent="center" alignItems="center" w="50%" px={5}>
                    <Text fontSize="2xl" fontWeight="bold">Welcome to</Text>
                    <Text color="red.500" fontSize="5xl" fontWeight="bold">
                        A Plus
                    </Text>
                    <InputField
                        width='70%'
                        placeholder="User name"
                        variant={Variant.outline}
                        prefixIcons={[<People />]}
                        mb={5}
                        mt={10}
                    />
                    <InputField
                        width='70%'
                        placeholder="Password"
                        variant={Variant.outline}
                        prefixIcons={[<Key />]}
                        mb={5}
                    />
                    <Link to={"/"}>
                        <CustomButton width="70%" text="Login" />
                    </Link>
                    <Container mt={4} mb={8}>
                        <Text as="span" color="gray.500" fontWeight="bold">Don't have an account? </Text>
                        <Text as="span" color="red.500" fontWeight="bold">Sign Up</Text>
                    </Container>
                    <Divider color="gray.300" />
                    <Text color="gray.500" fontWeight="bold" mt={4}>Or sign in with</Text>
                    <Wrap spacing="30px" align="center" mt="5">
                        <WrapItem>
                            <IconButton variant='ghost' icon={<Facebook />} aria-label='Facebook' colorScheme="facebook" isRound />
                        </WrapItem>
                        <WrapItem>
                            <IconButton variant='ghost' icon={<Google />} aria-label='Google' colorScheme="facebook" isRound />
                        </WrapItem>
                    </Wrap>
                </Box>
                <Box bg="red.500" w="50%"></Box>
            </Flex>
        </div >
    );
};

export default Login;
