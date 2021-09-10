import { HStack, Flex, Spacer, VStack, Divider, Box } from "@chakra-ui/react";
import UserInfoHeader from "./UserInfoHeader";
import UserInfoAvatar from "./UserInfoAvatar";
import ArticleOverviewItem from "./ArticleOverviewItem";

function UserInfoPage() {
  let list = [1, 2, 3, 4, 5];
  return (
    <VStack>
      <UserInfoHeader />
      <Flex>
        <VStack w="20vw" paddingStart="3vw">
          <UserInfoAvatar />
        </VStack>
        <VStack w="80vw" h="150vh" align="start" paddingX="7vw">
          {list.map((i) => (
            <Box key={i}>
              <ArticleOverviewItem w="60vw"  />
              <Divider />
            </Box>
          ))}
        </VStack>
      </Flex>
    </VStack>
  );
}
export default UserInfoPage;
