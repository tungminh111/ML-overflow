import { Box, VStack, Flex } from "@chakra-ui/react";
import UserInfoHeader from "../UserInfoHeader";
import UserInfoAvatar from "../UserInfoAvatar";
import FavoriteItem from "./FavoriteItem";

function FavoriteList(props) {
  let data = props.data;
  return (
    <VStack {...props}>
      <UserInfoHeader data={data} />
      <Flex>
        <VStack w="20vw" paddingStart="3vw">
          <UserInfoAvatar data={data} />
        </VStack>
        <VStack w="80vw" h="150vh" align="start" paddingX="7vw">
          {data.article.map((article) => (
            <FavoriteItem key={article.id} data={article} w="70%" />
          ))}
        </VStack>
      </Flex>
    </VStack>
  );
}

export default FavoriteList;
