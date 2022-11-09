import logo from "../src/assets/logo2.png";
import Image from "next/image";
import { useRouter } from "next/router";
const Logo = () => {
  const router = useRouter();

  return (
    <div>
      <Image
        className="cursor-pointer"
        src={logo}
        alt="logo"
        layout="fixed"
        width={200}
        height={50}
      />
    </div>
  );
};

export default Logo;
