import FavoriteList from "../../../components/favorite/FavoriteList";
import UserData from "../../../data/UserData";

function FavoriteListPage(props) {
  return <FavoriteList data={props.data} />;
}

export default FavoriteListPage;

export async function getServerSideProps(context) {
  return {
    props: {
      data: UserData.getTestUserData(),
    },
  };
}
