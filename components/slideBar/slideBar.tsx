import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import SvgBack from "../svgComponent/svg-back";
import { SvgSetting } from "../svgComponent/svg-setting";

interface data {
  id: number;
  title: string;
  icon: React.ReactNode;
}

interface IProps {
  data: data[];
}

const SlideBar = ({ data }: IProps) => {
  const router = useRouter();
  const mainPath = router.pathname.split("/")[1];
  const subPath = router.pathname.split("/")[2];
  return (
    <div className="">
      <div className="fixed z-50 min-h-screen w-[3.30rem] overflow-hidden border-r md:w-56 hover:w-56 hover:bg-gray-900  bg-gray-900 hover:shadow-lg text-white transition-all duration-300 border-none">
        <div className="flex h-screen flex-col justify-between pt-2 pb-6 ">
          <div>
            <div className="w-max p-2.5">
              <Image
                src="https://tailus.io/images/logo.svg"
                alt=""
                width={140}
                height={50}
              />
            </div>
            <ul className="mt-6 space-y-2 tracking-wide">
              {data?.map((item) => (
                <li className="min-w-max" key={item.id}>
                  <Link href={`/${mainPath}/${encodeURIComponent(item.title)}`}>
                    <div
                      className={`
                      relative flex items-center space-x-4 bg-gradient-to-r cursor-pointer  px-4 py-3 ${
                        item.title === subPath
                          ? "from-sky-600 to-cyan-400 text-white"
                          : ""
                      }
                    `}
                    >
                      {item.icon}
                      <span className="group-hover:text-gray-700">
                        {item.title}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-max -mb-3">
            <div
              onClick={() => router.push("/")}
              className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 cursor-pointer"
            >
              <SvgBack />
              <span className="group-hover:text-gray-700">
                quay lại trang chủ
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideBar;
