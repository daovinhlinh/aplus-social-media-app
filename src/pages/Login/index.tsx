import { Box, color, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";
import Emoji from "../../assets/Icons/Emoji";
import People from "../../assets/Icons/People";
import Photo from "../../assets/Icons/Photo";
import Send from "../../assets/Icons/Send";
import CustomButton from "../../components/CustomButton";
import InputField, { Variant } from "../../components/InputField";
import styles from "./styles.module.scss";

const Login = () => {
    const suffixIcons = [
        {
            icon: <Emoji />,
            label: "emoji",
            onPress: () => {
                console.log("Emoji");
            },
        },
        {
            icon: <Photo />,
            onPress: () => {
                console.log("Photo");
            },
        },
    ];

    return (
        <div className={styles.login}>
            <Flex h="70%" minW="800px" w="80%" px="10">
                <Box flex={1} bg="white">
                    <Text>Welcome to</Text>
                    <Text color="red.700" fontSize="5xl" fontWeight="bold">
                        A Plus
                    </Text>
                    <InputField
                        placeholder="User name"
                        variant={Variant.outline}
                        prefixIcons={[<People />]}
                    />
                    <InputField
                        placeholder="Password"
                        variant={Variant.outline}
                        prefixIcons={[<People />]}
                    />
                    <CustomButton />
                </Box>
                <Box flex={1} bg="red.700"></Box>
            </Flex>
        </div>
    );
};

export default Login;
