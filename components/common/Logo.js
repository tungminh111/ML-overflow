import logoFullIcon from "../../public/logo_full.png";
import Image from "next/image";

function Logo(props) {
  return (
    <Image
      width={170}
      height={40}
      src={logoFullIcon}
      alt="MLOverflower"
      {...props}
    />
  );
}

export default Logo;
