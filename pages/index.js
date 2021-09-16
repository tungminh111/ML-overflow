import {
    VStack,
    Heading,
    Flex,
    AspectRatio,
    Button,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import { Box, Text } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import NavBar from "../components/NavBar";
import Link from "next/link";

import defaultImg from "../public/default-image.png";
import saveIcon from "../public/save.svg";
import optionsIcon from "../public/options.svg";
import { getArticles } from "../mock-data/mock-articles";
import { useMemo } from "react";
import Utility from "../utility/Utility";

function NewFeeds() {
    let router = useRouter();

    const [isSmallerThan1280] = useMediaQuery("(max-width: 1280px)");
    const [isSmallerThan480] = useMediaQuery("(max-width: 480px)");

    const articles = useMemo(() => {
        const articles = getArticles();
        return articles;
    }, []);

    return (
        <Box>
            <NavBar />
            <Flex justifyContent="center">
                <Box mx={["22", "50", "70", "90"]} maxWidth="1192px">
                    <Flex flexDirection="row">
                        <Box
                            flexBasis={isSmallerThan480 ? "100%" : "65%"}
                            mt="5"
                        >
                            <Tabs>
                                <TabList>
                                    <Tab textColor="black" fontSize="13px">
                                        RECOMMENDED FOR YOU
                                    </Tab>
                                    <Tab textColor="black" fontSize="13px">FOLLOWING</Tab>
                                </TabList>

                                <TabPanels>
                                    <TabPanel>
                                        <Box className="list-article">
                                            {articles.map((article) => (
                                                <Box
                                                    key={article.id}
                                                    className="single-article"
                                                    mb="8"
                                                >
                                                    <Flex>
                                                        <Box
                                                            flexBasis="70%"
                                                            mr={["2", "10"]}
                                                        >
                                                            <Flex>
                                                                <Image
                                                                    src={
                                                                        article
                                                                            .author
                                                                            .avatar
                                                                    }
                                                                    alt="Picture of the author"
                                                                    width={16}
                                                                    height={16}
                                                                    className="round-image"
                                                                />
                                                                <Text
                                                                    ml="3"
                                                                    fontSize={[
                                                                        "13px",
                                                                    ]}
                                                                >
                                                                    {
                                                                        article
                                                                            .author
                                                                            .name
                                                                    }
                                                                </Text>
                                                            </Flex>

                                                            <Link
                                                                href={`articles/${article.slug}`}
                                                            >
                                                                <Heading
                                                                    cursor="pointer"
                                                                    mb="1"
                                                                    as="h3"
                                                                    fontSize={[
                                                                        "18px",
                                                                        "22px",
                                                                    ]}
                                                                >
                                                                    {article
                                                                        .title
                                                                        .length >
                                                                    Utility.MAX_LENGTH_TITLE
                                                                        ? article.title.substring(
                                                                              0,
                                                                              Utility.MAX_LENGTH_TITLE
                                                                          ) +
                                                                          "..."
                                                                        : article.title}
                                                                </Heading>
                                                            </Link>
                                                            {!isSmallerThan1280 && (
                                                                <Text
                                                                    mb="5"
                                                                    fontSize={[
                                                                        "14px",
                                                                        "16px",
                                                                    ]}
                                                                >
                                                                    {article
                                                                        .description
                                                                        .length >
                                                                    Utility.MAX_LENGTH_DESCRIPTION
                                                                        ? article.description.substring(
                                                                              0,
                                                                              Utility.MAX_LENGTH_DESCRIPTION
                                                                          ) +
                                                                          "..."
                                                                        : article.description}
                                                                </Text>
                                                            )}
                                                            <Flex justifyContent="space-between">
                                                                <Flex>
                                                                    <Text
                                                                        mr={[
                                                                            "1",
                                                                            "3",
                                                                        ]}
                                                                        fontSize={[
                                                                            "13px",
                                                                        ]}
                                                                    >
                                                                        Mar 17
                                                                    </Text>
                                                                    <Text
                                                                        mr={[
                                                                            "1",
                                                                            "3",
                                                                        ]}
                                                                        fontSize={[
                                                                            "13px",
                                                                        ]}
                                                                    >
                                                                        6 min
                                                                        read
                                                                    </Text>
                                                                    <Box
                                                                        fontSize={[
                                                                            "13px",
                                                                        ]}
                                                                    >
                                                                        Programing
                                                                    </Box>
                                                                </Flex>
                                                                <Flex>
                                                                    <Box
                                                                        cursor="pointer"
                                                                        pt="2px"
                                                                    >
                                                                        <Image
                                                                            src={
                                                                                saveIcon
                                                                            }
                                                                            alt="save icon"
                                                                            width={
                                                                                20
                                                                            }
                                                                            height={
                                                                                20
                                                                            }
                                                                        />
                                                                    </Box>
                                                                    <Box
                                                                        cursor="pointer"
                                                                        pt="2px"
                                                                    >
                                                                        <Image
                                                                            src={
                                                                                optionsIcon
                                                                            }
                                                                            alt="option icon"
                                                                            width={
                                                                                20
                                                                            }
                                                                            height={
                                                                                20
                                                                            }
                                                                        />
                                                                    </Box>
                                                                </Flex>
                                                            </Flex>
                                                        </Box>
                                                        <Flex
                                                            cursor="pointer"
                                                            flexBasis="30%"
                                                            alignItems="center"
                                                            justifyContent="center"
                                                        >
                                                            <Link
                                                                href={`articles/${article.slug}`}
                                                            >
                                                                <Image
                                                                    src={
                                                                        article.image
                                                                    }
                                                                    width={300}
                                                                    height={200}
                                                                    alt="Picture of article"
                                                                />
                                                            </Link>
                                                        </Flex>
                                                    </Flex>
                                                </Box>
                                            ))}
                                        </Box>
                                    </TabPanel>
                                    <TabPanel></TabPanel>
                                </TabPanels>
                            </Tabs>
                        </Box>
                        {!isSmallerThan480 && (
                            <>
                                <Box
                                    minHeight="100vh"
                                    ml="40px"
                                    mr="40px"
                                    borderRight="1px solid rgba(230, 230, 230, 1)"
                                ></Box>
                                <Box flexBasis="30%" mt="5">
                                    <Text fontWeight="bold" mb="4">
                                        Recommended topics
                                    </Text>
                                    <Flex flexFlow="wrap">
                                        <Box
                                            bg="blackAlpha.100"
                                            px="4"
                                            py="1"
                                            borderRadius="100px"
                                            mr="3"
                                            mb="3"
                                        >
                                            Software Development
                                        </Box>
                                        <Box
                                            bg="blackAlpha.100"
                                            px="4"
                                            py="1"
                                            borderRadius="100px"
                                            mr="3"
                                            mb="3"
                                        >
                                            Programming
                                        </Box>
                                        <Box
                                            bg="blackAlpha.100"
                                            px="4"
                                            py="1"
                                            borderRadius="100px"
                                            mr="3"
                                            mb="3"
                                        >
                                            Technology
                                        </Box>
                                        <Box
                                            bg="blackAlpha.100"
                                            px="4"
                                            py="1"
                                            borderRadius="100px"
                                            mr="3"
                                            mb="3"
                                        >
                                            Carrers
                                        </Box>
                                        <Box
                                            bg="blackAlpha.100"
                                            px="4"
                                            py="1"
                                            borderRadius="100px"
                                            mr="3"
                                            mb="3"
                                        >
                                            Grouth
                                        </Box>
                                    </Flex>
                                </Box>
                            </>
                        )}
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}

export default NewFeeds;
