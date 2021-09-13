import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import faker from "faker/locale/en";
import NavBar from "../../../components/NavBar";
import Image from "next/image";
import { Button } from "@chakra-ui/react";

import clapIcon from "../../../public/clap.svg";
import saveIcon from "../../../public/save.svg";
import optionsIcon from "../../../public/options.svg";

function ArticleDetail({ article }) {
    return (
        <Box>
            <NavBar />
            <Box mx={["22", "50", "70", "130"]}>
                <Heading as="h1" mb="1">
                    {article.title}
                </Heading>
                <Text mb="5">{article.description}</Text>
                <Box className="user-box" mb="5">
                    <Flex>
                        <Flex alignItems="center" mr="2">
                            <Image
                                src={article.author.avatar}
                                alt="Picture of the author"
                                width={60}
                                height={60}
                                className="round-image border-green"
                            />
                        </Flex>
                        <Flex alignItems="center">
                            <Box>
                                <Flex alignItems="center">
                                    <Text mr="2">{article.author.name}</Text>
                                    <Button
                                        size="md"
                                        color="black"
                                        height="28px"
                                        borderRadius="20"
                                        border="1px"
                                        borderColor="black"
                                        px="3"
                                        mr="4"
                                    >
                                        Follow
                                    </Button>
                                </Flex>
                                <Box>Mar 31 - 8 min read</Box>
                            </Box>
                        </Flex>
                    </Flex>
                </Box>
                <Box
                    mb="5"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                ></Box>
                <Flex className="tags" flexFlow="wrap" mb="5">
                    <Box
                        bg="blackAlpha.100"
                        p="1.5"
                        borderRadius="md"
                        mr="3"
                        mb="3"
                    >
                        Software Development
                    </Box>
                    <Box
                        bg="blackAlpha.100"
                        p="1.5"
                        borderRadius="md"
                        mr="3"
                        mb="3"
                    >
                        Programming
                    </Box>
                    <Box
                        bg="blackAlpha.100"
                        p="1.5"
                        borderRadius="md"
                        mr="3"
                        mb="3"
                    >
                        Technology
                    </Box>
                    <Box
                        bg="blackAlpha.100"
                        p="1.5"
                        borderRadius="md"
                        mr="3"
                        mb="3"
                    >
                        Carrers
                    </Box>
                    <Box
                        bg="blackAlpha.100"
                        p="1.5"
                        borderRadius="md"
                        mr="3"
                        mb="3"
                    >
                        Grouth
                    </Box>
                </Flex>
                <Flex justifyContent="space-between" mb="5">
                    <Flex>
                        <button>
                            <Image src={clapIcon} width={25} height={25} />
                        </button>
                        <Flex ml="2" alignItems="center">
                            1.5K
                        </Flex>
                    </Flex>
                    <Flex>
                        <Box cursor="pointer" pt="2px">
                            <Image
                                src={saveIcon}
                                alt="save icon"
                                width={25}
                                height={25}
                            />
                        </Box>
                        <Box cursor="pointer" pt="2px">
                            <Image
                                src={optionsIcon}
                                alt="option icon"
                                width={25}
                                height={25}
                            />
                        </Box>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
}

export default ArticleDetail;

export async function getServerSideProps({ params }) {
    const slug = params.slug;
    let content = "";
    const numP = 4;
    for (let i = 0; i < numP; i++) {
        content += `<p>${faker.lorem.paragraphs()}</p>`;
        // content += `${faker.lorem.paragraphs()}`;
        if (i != numP - 1) {
            content += "<br/>";
            content += `<img src="${faker.image.image()}" alt="content"/><br/>`;
        }
    }
    const article = {
        id: faker.datatype.uuid(),
        slug,
        title: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
        content,
        image: faker.image.image(),
        author: {
            name: faker.name.findName(),
            avatar: faker.image.avatar(),
        },
    };
    return { props: { article } };
}
