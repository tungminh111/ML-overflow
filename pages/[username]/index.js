import { VStack } from "@chakra-ui/react";
import UserInfoPage from "../../components/UserInfo";
import UserData from "../../data/UserData";

function UserInfo(props) {
  return (
    <VStack>
      <UserInfoPage data={props.data} />
    </VStack>
  );
}

export default UserInfo;

export async function getServerSideProps(context) {
  return {
    props: {
      data: UserData.getTestUserData(),
    },
  };
}
