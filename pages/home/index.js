import { Input, Heading, VStack } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import TodoList from "../../components/TodoList";
import UserData from "../../data/UserData";

function HomePage({ listTask }) {
  let router = useRouter();

  let onClickTask = function (taskId) {
    router.push("/detail/" + taskId.toString());
  };

  return (
    <VStack marginTop="5vh" p={4}>
      <Heading
        bgGradient="linear(to-l, gray.900, gray.300)"
        bgClip="text"
        p={3}
        size="4xl"
        m={3}
      >
        Todo List
      </Heading>
      <TodoList onClickTask={onClickTask} listTask={listTask} />
    </VStack>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      listTask: await UserData.getListTasks(),
    },
  };
}

export default HomePage;
