import { VStack } from "@chakra-ui/react";
import EditArticleHeader from "./EditArticleHeader";

function EditArticle(props) {
  return (
    <VStack>
      <EditArticleHeader w="70vw" data={props.userData} />
    </VStack>
  );
}

export default EditArticle;
