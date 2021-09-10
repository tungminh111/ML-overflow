import { Button } from "@chakra-ui/button";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import googleIcon from "../../public/google.svg";
import facebookIcon from "../../public/facebook.svg";
import mailIcon from "../../public/mail.svg";
import arrowLeftIcon from "../../public/arrow-left.svg";
import { Input } from "@chakra-ui/input";

function LoginByUsername({ setActiveScreen }) {
    return (
        <Box>
            <Flex
                flexDirection="column"
                alignItems="center"
                justifyContent="space-around"
                minHeight="600px"
            >
                <Heading>Sign in with username.</Heading>
                <Flex
                    minHeight="400px"
                    justifyContent="space-evenly"
                    flexDirection="column"
                    alignItems="center"
                    className="login-methods"
                >
                    <Flex flexDirection="column" alignItems="center">
                        <Text mb="3">Your username</Text>
                        <Input
                            border="none"
                            borderBottom="1px"
                            borderRadius="0"
                            textAlign="center"
                            placeholder="minhoccho@gmail.com"
                        />
                    </Flex>
                    <Flex flexDirection="column" alignItems="center">
                        <Text mb="3">Your password</Text>
                        <Input
                            type="password"
                            border="none"
                            borderBottom="1px"
                            borderRadius="0"
                            textAlign="center"
                        />
                    </Flex>
                    <Button
                        textAlign="center"
                        bg="black"
                        color="white"
                        border="1px"
                        borderRadius="40px"
                        width="270px"
                        fontSize="17"
                    >
                        Continue
                    </Button>
                </Flex>
                <Flex
                    cursor="pointer"
                    onClick={() => {
                        setActiveScreen("options");
                    }}
                >
                    <Image src={arrowLeftIcon} width={25} height={25} />
                    <Text as="span" color="green.500">
                        All sign in options
                    </Text>
                </Flex>
            </Flex>
        </Box>
    );
}

export default LoginByUsername;
