import { Box, Flex, Text, Divider } from "@chakra-ui/react";
import React from "react";
import ClapButton from "../common/ClapButton";

function PostSideBar({ article }) {
    return (
        <Box position="fixed" top="200px" width="100%">
            <Flex justifyContent="center">
                <Box maxWidth="1192px" width="100%">
                    <Box w="197px">
                        <Text fontWeight="bold">{article.author.name}</Text>
                        <Text>Data Scientist / Engineer</Text>
                        <Divider my="20px" />
                        <Flex alignItems="center">
                            <ClapButton mr="2"/>
                            <Text>71</Text>
                        </Flex>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
}

export default PostSideBar;
