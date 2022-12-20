import logo from "../src/assets/logo2.png";
import Image from "next/image";
import { useRouter } from "next/router";
const Logo = () => {
  const router = useRouter();
  const handleRouter = () => {
    router.push("/");
  };
  return (
    <div
      onClick={handleRouter}
      className="block relative w-20 h-20 cursor-pointer "
    >
      <Image src={logo} alt="" layout="fill" objectFit="contain" />
    </div>
  );
};

export default Logo;
