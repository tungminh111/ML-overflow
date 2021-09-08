import TaskDetail from "../../../components/TaskDetail";
import UserData from "../../../data/UserData";
function TaskDetailPage({ taskData }) {
  return <TaskDetail taskData={taskData} />;
}

export default TaskDetailPage;

export async function getServerSideProps(context) {
  return {
    props: {
      taskData: await UserData.getTaskData(context.params.id),
    },
  };
}
