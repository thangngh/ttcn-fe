import Screen from "../../layouts/Screen";
import Image from "next/image";
import error from "../../assets/error.png";
const NotFoundPage = () => {
  return (
    <Screen>
      <div className="w-full mx-auto mb-5 max-w-7xl">
        <div className="w-screen sm:container mb-10 px-4 relative ">
          <div className="relative max-w-full mx-auto  max-h-full w-[50vh] h-[50vh]">
            <Image src={error} layout="fill" alt="" className="bg-cover" />
          </div>
        </div>
      </div>
    </Screen>
  );
};

export default NotFoundPage;
