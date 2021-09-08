import { toast } from "@chakra-ui/react";
import Utility from "../utility/Utility";
const test_data = () => {
  return [
    {
      id: 1,
      title: "Take the insurance card",
      description:
        "Ask miss Thao for more information. After that go to the medical department for the card",
      place: "ZPS office",
      time: Utility.formatTime(new Date(2021, 7, 13)),
      category: "Work",
      priority: "Low",
    },
    {
      id: 2,
      title: "Database Design",
      description: "Design a database system for Farm 3D",
      place: "ZPS office",
      time: Utility.formatTime(new Date(2021, 7, 13)),
      category: "Life",
      priority: "High",
    },
  ];
};

const UserData = {
  userId: "",

  getUserId() {
    return this.userId;
  },

  setUserId: function (id) {
    this.userId = id;
  },

  getListTasks: async function () {
    return test_data();
  },

  getTaskData: async function (taskId) {
    let data = test_data();
    return data.find((task) => task.id === parseInt(taskId));
  },
};

export default UserData;
