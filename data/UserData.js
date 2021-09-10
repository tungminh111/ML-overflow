import { toast } from "@chakra-ui/react";
import Utility from "../utility/Utility";
const test_data = () => {
  return [
    {
      name: "Minh Nguyen",
      followers: 322,
      username: "minhnguyen",
      title: "Student at VNU",
      link: "google.com",
      article: [
        {
          id: "1",
          date: "11 Jan",
          title: "Title 1 - Something",
          body: "Body 1 - Something",
          likes: 3000,
          comments: 300,
          thumnail: "https://picsum.photos/200/300",
        },
        {
          id: "2",
          date: "2 Sep",
          title: "Title 2 - Something",
          body: "Body 2 - Something",
          likes: 2000,
          comments: 200,
          thumnail: "https://picsum.photos/seed/picsum/200/300",
        },
      ],
    },
  ];
};

const UserData = {
  getTestUserData: function () {
    return test_data()[0];
  },
};

export default UserData;
