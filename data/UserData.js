import { toast } from "@chakra-ui/react";
import Utility from "../utility/Utility";
const test_data = () => {
  return [
    {
      username: "minhnguyen",
      title: "Student at VNU",
      link: "google.com",
      article: [
        {
          title: "Title 1 - Something",
          body: "Body 1 - Something",
          likes: 3000,
          comments: 300,
        },
        {
          title: "Title 2 - Something",
          body: "Body 2 - Something",
          likes: 2000,
          comments: 200,
        },
      ],
    },
  ];
};

const UserData = {};

export default UserData;
