import {
  HStack,
  Box,
  Text,
  Input,
  StackDivider,
  VStack,
  Button,
  Badge,
  Flex,
  Center,
  Square,
  Spacer,
} from "@chakra-ui/react";
import { useState } from "react";

function TodoList({ listTask, onClickTask }) {
  const [searchContent, setSearchContent] = useState("");

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

  let onClickTaskBtn = function (e, task) {
    e.preventDefault();
    onClickTask(task.id);
  };

  return (
    <VStack
      devider={<StackDivider />}
      width="100%"
      maxW={{ base: "90vw", sm: "80vw", lg: "60vw", xl: "40vw" }}
    >
      <Input
        value={searchContent}
        placeholder="Search for tasks"
        variant="filled"
        onChange={(e) => setSearchContent(e.target.value)}
      />
      {listTask.map((task) => (
        <Button
          width="100%"
          height="100px"
          colorScheme="teal"
          key={task.id}
          onClick={(e) => onClickTaskBtn(e, task)}
        >
          <Box width="100%">
            <Flex>
              <VStack m={2} alignItems="flex-start">
                <Text fontSize="xl">
                  {" "}
                  <b> {task.title} </b>{" "}
                </Text>
                <Text fontSize="sm">
                  {" "}
                  <i> {task.category} </i>{" "}
                </Text>
                <Text> {task.place + ", " + task.time} </Text>
              </VStack>
              <Spacer />
              <Square>
                <Badge size="lg" colorScheme={getPriorityColor(task.priority)}>
                  {" "}
                  {task.priority}{" "}
                </Badge>
              </Square>
            </Flex>
          </Box>
        </Button>
      ))}
    </VStack>
  );
}

export default TodoList;
