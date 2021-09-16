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
    editor.subscribe("editableInput", (ev, editable) => {
      if (typeof document !== "undefined") {
        this.setState({
          content: editor.elements[0].getElementsByTagName("p")[0],
        });
      }
      console.log(this.state);
    });
  }

  render() {
    return (
      <Flex flexDir="column" w="70vw" ms="15vw">
        <EditArticleHeader data={this.props.userData} />
        <Flex flexDir="column" w="70%" mx="15%">
          <Input
            fontWeight="bold"
            placeholder="Title"
            variant="unstyled"
            fontSize={30}
            height={100}
            onChange={(e) => this.setState({ title: e.target.value })}
          />
          <div>
            <textarea id="medium-editable" className="medium-editable" />
          </div>
        </Flex>
      </Flex>
    );
  }
}

export default EditArticle;
