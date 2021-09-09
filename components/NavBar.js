import { Box, Button } from "@chakra-ui/react";
import { Flex, Heading } from "@chakra-ui/layout";
import React from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import faker from "faker/locale/en";

function NavBar() {
    return (
        <Box boxShadow="md" mb="5">
            <Flex
                height="20"
                mx={["22", "50", "70", "130"]}
                alignItems="center"
            >
                <Box flex="1">
                    <Image src={logo} alt="Logo" width={162} height={25} />
                </Box>
                <Flex alignItems="center">
                    <Button
                        size="md"
                        height="40px"
                        border="2px"
                        borderColor="green.500"
                        color="green.500"
                        borderRadius="20"
                        mr="4"
                    >
                        Write
                    </Button>
                    <Image
                        className="round-image border-green"
                        src={faker.image.image()}
                        width={40}
                        height={40}
                    />
                </Flex>
            </Flex>
        </Box>
    );
}

export default NavBar;
