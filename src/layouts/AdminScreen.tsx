import { useRouter } from "next/router";
import SlideBar from "../../components/slideBar/slideBar";
import { Svg1 } from "../../components/svgComponent/svg-1";
import { SvgUser } from "../../components/svgComponent/svg-user";
import { Svg3 } from "../../components/svgComponent/svg-3";
import { Svg4 } from "../../components/svgComponent/svg-4";
import { Svg5 } from "../../components/svgComponent/svg-5";

interface IProps {
  children: React.ReactNode;
}

const data = [
  {
    id: 1,
    title: "dashboard",
    icon: <Svg1 />,
  },
  {
    id: 2,
    title: "users",
    icon: <SvgUser />,
  },
  {
    id: 3,
    title: "products",
    icon: <Svg3 />,
  },
  {
    id: 4,
    title: "productssale",
    icon: <Svg4 />,
  },
  {
    id: 5,
    title: "finance",
    icon: <Svg5 />,
  },
];

const AdminScreen = ({ children }: IProps) => {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
      <SlideBar data={data} />
      {children}
    </div>
  );
};

export default AdminScreen;
