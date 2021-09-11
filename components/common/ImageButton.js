import { Image } from "@chakra-ui/react";

function ImageButton(props) {
  return (
    <button>
      <Image {...props} alt="Not found" />
    </button>
  );
}

export default ImageButton;
