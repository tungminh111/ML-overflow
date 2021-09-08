import { VStack, Heading, StackDivider } from "@chakra-ui/react";
import LoginForm from "../components/LoginForm";
import { useRouter } from "next/router";
import UserData from "../data/UserData";

function LoginPage() {
  let router = useRouter();

  let onSubmitUserId = function (userId) {
    UserData.setUserId(userId);
    router.push("/home");
  };

  return (
    <VStack spacing={2} maxW="100vw" marginTop="10vh">
      <Heading
        bgGradient="linear(to-l, gray.900, gray.300)"
        bgClip="text"
        p={3}
        size="4xl"
        m={3}
      >
        Login
      </Heading>
      <LoginForm onSubmitUserId={onSubmitUserId} />
    </VStack>
  );
}

export default LoginPage;
