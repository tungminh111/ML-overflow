import {
  Input,
  Textarea,
  InputGroup,
  Flex,
  VStack,
  InputLeftAddon,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import MediumEditor from "medium-editor";
import EditArticleHeader from "./EditArticleHeader";

class EditArticle extends React.Component {
  componentDidMount() {
    const editor = new MediumEditor(".medium-editable", {});
  }

  render() {
    return (
      <Flex flexDir="column" w="70vw" ms="15vw">
        <EditArticleHeader data={this.props.userData} />
        <div>
          <textarea id="medium-editable" className="medium-editable" />
        </div>
      </Flex>
    );
  }
}

export default EditArticle;
