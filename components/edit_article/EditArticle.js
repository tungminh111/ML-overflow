import {
  Input,
  Textarea,
  InputGroup,
  VStack,
  InputLeftAddon,
} from "@chakra-ui/react";
import { useState } from "react";

require("medium-editor/dist/css/medium-editor.css");
require("medium-editor/dist/css/themes/default.css");

import Editor from "react-medium-editor";
import EditArticleHeader from "./EditArticleHeader";

function EditArticle(props) {
  const [title, setTitle] = useState("");

  return (
    <VStack>
      <EditArticleHeader w="70vw" data={props.userData} />
      <VStack w="70vw">
        <Editor text={title} onChange={(text, medium) => setTitle(text)} />
      </VStack>
    </VStack>
  );
}

export default EditArticle;
