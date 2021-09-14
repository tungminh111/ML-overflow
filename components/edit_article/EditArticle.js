import {
    Input,
    Textarea,
    InputGroup,
    Flex,
    VStack,
    InputLeftAddon,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import EditArticleHeader from "./EditArticleHeader";
import "medium-editor/dist/css/medium-editor.css";

function EditArticle(props) {
    useEffect(() => {
        if (typeof window !== "undefined") {
            import("medium-editor").then((modulde) => {
                const MediumEditor = modulde.default;
                const editor = new MediumEditor(".medium-editable", {
                    placeholder: "cai cc",
                });
            });
        }
    }, []);
    return (
        <Flex flexDir="column" w="70vw" ms="15vw">
            <EditArticleHeader data={props.userData} />
            <div>
                <textarea id="medium-editable" className="medium-editable" />
            </div>
        </Flex>
    );
}

export default EditArticle;
