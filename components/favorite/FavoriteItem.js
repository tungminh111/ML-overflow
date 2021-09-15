import {
  Flex,
  Divider,
  Heading,
  HStack,
  Text,
  Image,
  StackDivider,
  Spacer,
} from "@chakra-ui/react";
import ClapButton from "../common/ClapButton";

function FavoriteItem(props) {
  let data = props.data;
  return (
    <Flex flexDir="column" {...props}>
      <HStack divider={<StackDivider />}>
        <Heading size="sm"> {data.author} </Heading>
        <Text> {data.date} </Text>
      </HStack>
      <Flex pb={30} w="100%">
        <Flex flexDir="column" w="100%">
          <Heading size="md"> {data.title} </Heading>
          <Text> {data.body} </Text>
        </Flex>
        <Spacer />
        <Image boxSize={100} src={data.thumnail} />
      </Flex>
      <Divider />
      <ClapButton py={30} />
    </Flex>
  );
}

export default FavoriteItem;
