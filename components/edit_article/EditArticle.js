import {
  Input,
  Textarea,
  InputGroup,
  Flex,
  VStack,
  InputLeftAddon,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

require("medium-editor/dist/css/medium-editor.css");
require("medium-editor/dist/css/themes/default.css");

import EditArticleHeader from "./EditArticleHeader";

class EditArticle extends React.Component {
  componentDidMount() {
    let MediumEditor = require("medium-editor");
    const editor = new MediumEditor(/*dom, */ ".medium-editable", {
      autoLink: true,
      delay: 1000,
      targetBlank: true,
      anchor: {
        placeholderText: "Type a link",
        customClassOption: "btn",
        customClassOptionText: "Create Button",
      },
      paste: {
        cleanPastedHTML: true,
        cleanAttrs: ["style", "dir"],
        cleanTags: ["label", "meta"],
        unwrapTags: ["sub", "sup"],
      },
      anchorPreview: {
        hideDelay: 300,
      },
      placeholder: {
        text: "Tell your story...",
      },
      /*
      placeholder: { text: "Tell your Story ...", hideOnClick: true },
      toolbar: {
        buttons: ['bold', 'italic']
      } */
    });
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
