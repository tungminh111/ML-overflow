import TaskDetail from "../../../components/TaskDetail";
import UserData from "../../../data/UserData";
function TaskEditPage({ taskData }) {
  return <TaskDetail taskData={taskData} />;
}

export default TaskEditPage;

export async function getServerSideProps(context) {
  return {
    props: {
      taskData: await UserData.getTaskData(context.params.id),
    },
  };
}
