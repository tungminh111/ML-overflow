import logoFullIcon from "../../public/logo_full.png";
import Image from "next/image";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";

function Logo(props) {
  let router = useRouter();
  let backToMainPage = function () {
    router.push("/");
  };
  return (
    <Box {...props}>
      <button onClick={() => backToMainPage()}>
        <Image width={170} height={40} src={logoFullIcon} alt="MLOverflower" />
      </button>
    </Box>
  );
}

export default Logo;
