import {
  Square,
  Icon,
  Text,
  Badge,
  HStack,
  VStack,
  Box,
  Container,
  Center,
  Flex,
  Spacer,
  Heading,
  Button,
} from "@chakra-ui/react";

import { BsPencilSquare, BsPencil } from "react-icons/bs";
import { useRouter } from "next/dist/client/router";

function TaskDetail({ taskData }) {
  let router = useRouter();
  let getPriorityColor = function (priority) {
    switch (priority) {
      case "Low":
        return "gray";
      case "Medium":
        return "green";
      case "High":
        return "red";
    }
  };

  let onClickEdit = function (e) {
    e.preventDefault();
    router.push("/edit/" + taskData.id.toString());
  };

  return (
    <VStack>
      <Flex paddingX={6} w="100vw" h="40vh" bgColor="teal.200">
        <Box ms={4}>
          <Center textColor="black">
            <Heading fontSize="8xl" textColor="gray.400">
              {" "}
              {taskData.title}{" "}
            </Heading>
          </Center>
          <Text ms={1} fontSize="3xl">
            <i> {taskData.category} </i>
          </Text>
          <Button colorScheme="teal" onClick={onClickEdit}>
            <BsPencil />
            <Heading size="md" m={1}>
              {" "}
              Edit{" "}
            </Heading>
          </Button>
        </Box>
        <Spacer />
        <Square>
          <Badge
            size="xl"
            variant="solid"
            colorScheme={getPriorityColor(taskData.priority)}
          >
            {" "}
            {taskData.priority}{" "}
          </Badge>
        </Square>
      </Flex>
      <Flex h="60vh" w="100vw">
        <Box p={6} w="60vw" bgColor="gray.100">
          <Heading> Description </Heading>
          <Text> {taskData.description} </Text>
        </Box>
        <Box bgColor="gray.300" w="40vw" p={6}>
          <Heading> {taskData.place} </Heading>
          <Text> {taskData.time} </Text>
        </Box>
      </Flex>
    </VStack>
  );
}

export default TaskDetail;
