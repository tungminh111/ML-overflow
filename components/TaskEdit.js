import { Input, VStack } from "@chakra-ui/react";

function TaskEdit({ taskData }) {
  return (
    <VStack>
      <Input placeholder="Task Title" />
    </VStack>
  );
}

export default TaskEdit;
