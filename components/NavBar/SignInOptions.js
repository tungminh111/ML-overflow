import { Button } from "@chakra-ui/button";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import googleIcon from "../../public/google.svg";
import facebookIcon from "../../public/facebook.svg";
import mailIcon from "../../public/mail.svg";

function SignInOptions({ setActiveScreen }) {
    return (
        <Box>
            <Flex
                flexDirection="column"
                alignItems="center"
                justifyContent="space-around"
                minHeight="600px"
            >
                <Heading>Welcome back.</Heading>
                <Flex flexDirection="column" className="login-methods">
                    <Button
                        leftIcon={
                            <Image src={googleIcon} width={25} height={25} />
                        }
                        bg="white"
                        border="1px"
                        borderRadius="40px"
                        borderColor="blackAlpha.400"
                        width="270px"
                        fontSize="17"
                        mb="3"
                    >
                        Sign in with Google
                    </Button>
                    <Button
                        leftIcon={
                            <Image src={facebookIcon} width={25} height={25} />
                        }
                        textAlign="left"
                        bg="white"
                        border="1px"
                        borderRadius="40px"
                        borderColor="blackAlpha.400"
                        width="270px"
                        fontSize="17"
                        mb="3"
                    >
                        Sign in with Facebook
                    </Button>
                    <Button
                        leftIcon={
                            <Image src={mailIcon} width={25} height={25} />
                        }
                        textAlign="left"
                        bg="white"
                        border="1px"
                        borderRadius="40px"
                        borderColor="blackAlpha.400"
                        width="270px"
                        fontSize="17"
                        onClick={() => {
                            setActiveScreen("login-username");
                        }}
                    >
                        Sign in with username
                    </Button>
                </Flex>
                <Box>
                    No account?{" "}
                    <Link href="/">
                        <Text as="span" color="green.500">
                            Create one
                        </Text>
                    </Link>
                </Box>
            </Flex>
        </Box>
    );
}

export default SignInOptions;
