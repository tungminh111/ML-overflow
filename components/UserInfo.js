import { HStack, Flex, Spacer, VStack, Divider, Box } from "@chakra-ui/react";
import UserInfoHeader from "./UserInfoHeader";
import UserInfoAvatar from "./UserInfoAvatar";
import ArticleOverviewItem from "./ArticleOverviewItem";

function UserInfoPage(props) {
  let data = props.data;
  return (
    <VStack>
      <UserInfoHeader data={data} />
      <Flex>
        <VStack paddingStart="3vw">
          <UserInfoAvatar data={data} />
        </VStack>
        <VStack maxW="80vw" h="150vh" align="start" paddingX="7vw">
          {data.article.map((article) => (
            <Box key={article.id}>
              <ArticleOverviewItem w="60vw" data={article} />
              <Divider />
            </Box>
          ))}
        </VStack>
      </Flex>
    </VStack>
  );
}
export default UserInfoPage;
