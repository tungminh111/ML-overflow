import { VStack, Image, Button, Text, Heading, Spacer } from "@chakra-ui/react";

function UserInfoAvatar(props) {
  let data = props.data;
  return (
    <VStack
      position="sticky"
      paddingStart="20%"
      top="101"
      paddingY="60px"
      align="start"
    >
      <Image
        src="https://bit.ly/sage-adebayo"
        boxSize="120px"
        alt="Segun Adebayo"
      />
      <Spacer />
      <Heading size="sm"> {data.name} </Heading>
      <Spacer />
      <Button borderRadius="40px"> Follow </Button>
    </VStack>
  );
}

export default UserInfoAvatar;
