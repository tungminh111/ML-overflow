import { Image } from "@chakra-ui/react";
import clapIcon from "../../public/clap.svg";

function PageIcon(props) {
  return (
    <Image
      width={25}
      height={25}
      src={clapIcon}
      alt="MLOverflower"
      {...props}
    />
  );
}

export default PageIcon;
