import Image from "next/image";
import clapIcon from "../../public/clap.svg";
import { Box } from "@chakra-ui/react";
function ClapButton(props) {
  return (
    <Box {...props}>
      <button>
        <Image src={clapIcon} width={25} height={25} />
      </button>
    </Box>
  );
}

export default ClapButton;
