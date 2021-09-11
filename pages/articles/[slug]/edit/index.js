import EditArticle from "../../../../components/edit_article/EditArticle";
import UserData from "../../../../data/UserData";

function EditArticlePage(props) {
	return <EditArticle {...props} />;
}

export default EditArticlePage;

export async function getServerSideProps(context) {
	return {
		props: {
			userData: UserData.getTestUserData(),
			articleData: UserData.getTestUserData().article[0],
		},
	};
}
