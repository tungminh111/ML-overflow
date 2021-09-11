import clapIcon from "../../public/vkminh.jpeg";
import Image from "next/image";

function PageIcon(props) {
  return (
    <Image
      width={40}
      height={40}
      src={clapIcon}
      alt="MLOverflower"
      {...props}
    />
  );
}

export default PageIcon;
