import React from "react";
import Logo from "./logo";
const Header = () => {
  const [headerSticky, setHeaderSticky] = React.useState(false);

  const handleChangeHeader = () => {
    if (window.scrollY > 60) {
      setHeaderSticky(true);
    } else {
      setHeaderSticky(false);
    }
  };

  React.useEffect(() => {
    typeof window !== "undefined" &&
      window.addEventListener("scroll", handleChangeHeader);
  }, []);

  return (
    <div
      className={
        headerSticky
          ? "bg-white fixed z-50 top-0 left-0 w-full shadow-md transition duration-500"
          : "bg-transparent fixed z-50 top-0 left-0 w-full transition duration-500"
      }
    >
      <div className="flex items-center max-w-screen-xl mx-auto px-6 py-3">
        <div className="flex flex-grow">
          <Logo />
        </div>
        <div className="flex items-center justify-end space-x-6">
          <div>Sign In</div>
          <div className="bg-red-500 text-white px-4 py-2 rounded-md">
            Sign Up
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
