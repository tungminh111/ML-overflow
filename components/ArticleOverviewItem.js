import {
  VStack,
  Text,
  Heading,
  Image,
  Button,
  IconButton,
  Spacer,
  Flex,
} from "@chakra-ui/react";
import { AiOutlineLike } from "react-icons/ai";

function ArticleOverviewItem(props) {
  let data = props.data;
  console.log(data);
  return (
    <VStack w={props.w} align="start">
      <Text> {data.date} </Text>
      <Image htmlWidth="80%" src={data.thumnail} alt="Minh" />
      <Heading size="2xl"> {data.title} </Heading>
      <Text> {data.body} </Text>
      <Flex py="30px">
        <IconButton variant="ghost" icon={<AiOutlineLike />} />
        <Text pt="7px"> {data.likes} </Text>
      </Flex>
    </VStack>
  );
}

export default ArticleOverviewItem;
