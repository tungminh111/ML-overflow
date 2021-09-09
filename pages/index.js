import { VStack, Heading, Flex, AspectRatio, Button } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import { Box, Text } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import NavBar from "../components/NavBar";

import defaultImg from "../public/default-image.png";
import saveIcon from "../public/save.svg";
import optionsIcon from "../public/options.svg";
import { getArticles } from "../mock-data/mock-articles";
import { useMemo } from "react";
import Utility from "../utility/Utility";

function NewFeeds() {
    let router = useRouter();

    const [isSmallerThan1280] = useMediaQuery("(max-width: 1280px)");

    const articles = useMemo(() => {
        const articles = getArticles();
        return articles;
    }, []);

    return (
        <Box>
            <NavBar />
            <Box mx={["22", "50", "70", "130"]}>
                <Heading as="h2" fontSize={["18px", "23px"]} mb="5">
                    RECOMMENDED FOR YOU
                </Heading>
                <Box className="list-article">
                    {articles.map((article) => (
                        <Box key={article.id} className="single-article" mb="8">
                            <Flex>
                                <Box flexBasis="70%" mr={["2", "10"]}>
                                    <Flex>
                                        <Image
                                            src={article.user.avatar}
                                            alt="Picture of the author"
                                            width={25}
                                            height={25}
                                            className="round-image"
                                        />
                                        <Text
                                            ml="3"
                                            fontSize={["14px", "20px"]}
                                        >
                                            {article.user.name}
                                        </Text>
                                    </Flex>
                                    <Heading
                                        mb="1"
                                        as="h3"
                                        fontSize={["18px", "30px"]}
                                    >
                                        {article.title.length >
                                        Utility.MAX_LENGTH_TITLE
                                            ? article.title.substring(
                                                  0,
                                                  Utility.MAX_LENGTH_TITLE
                                              ) + "..."
                                            : article.title}
                                    </Heading>
                                    {!isSmallerThan1280 && (
                                        <Text
                                            mb="5"
                                            fontSize={["14px", "20px"]}
                                        >
                                            {article.description.length >
                                            Utility.MAX_LENGTH_DESCRIPTION
                                                ? article.description.substring(
                                                      0,
                                                      Utility.MAX_LENGTH_DESCRIPTION
                                                  ) + "..."
                                                : article.description}
                                        </Text>
                                    )}
                                    <Flex justifyContent="space-between">
                                        <Flex>
                                            <Text
                                                mr={["1", "3"]}
                                                fontSize={["14px", "20px"]}
                                            >
                                                Mar 17
                                            </Text>
                                            <Text
                                                mr={["1", "3"]}
                                                fontSize={["14px", "20px"]}
                                            >
                                                6 min read
                                            </Text>
                                            <Box fontSize={["14px", "20px"]}>
                                                Programing
                                            </Box>
                                        </Flex>
                                        <Flex>
                                            <Box cursor="pointer" pt="2px">
                                                <Image
                                                    src={saveIcon}
                                                    alt="save icon"
                                                    width={20}
                                                    height={20}
                                                />
                                            </Box>
                                            <Box cursor="pointer" pt="2px">
                                                <Image
                                                    src={optionsIcon}
                                                    alt="option icon"
                                                    width={20}
                                                    height={20}
                                                />
                                            </Box>
                                        </Flex>
                                    </Flex>
                                </Box>
                                <Flex
                                    flexBasis="30%"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Image
                                        src={article.image}
                                        width={300}
                                        height={200}
                                        alt="Picture of the author"
                                    />
                                </Flex>
                            </Flex>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

export default NewFeeds;
