import {
  Text,
  Button,
  Heading,
  IconButton,
  HStack,
  Flex,
  Spacer,
  Divider,
  VStack,
  Icon,
  Image,
} from "@chakra-ui/react";

import Logo from "../common/Logo";
import { BsThreeDots } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import ImageButton from "../common/ImageButton";

function EditArticleHeader(props) {
  let data = props.data;
  return (
    <VStack {...props}>
      <Flex w="100%" py="3vh">
        <HStack>
          <Logo />
          <Text> {"draft in @".replace("@", data.name)} </Text>
        </HStack>
        <Spacer />
        <HStack>
          <Button borderRadius="40px"> publish </Button>
          <IconButton variant="ghost" icon={<BsThreeDots />} />
          <IconButton variant="ghost" icon={<IoIosNotificationsOutline />} />
          <ImageButton boxSize="40px" borderRadius="40px" src={data.avatar} />
        </HStack>
      </Flex>
    </VStack>
  );
}

export default EditArticleHeader;
