import Footer from "../../components/footer";
import Header from "../../components/header/header";

interface ScreenProps {
  children: React.ReactNode;
}
const Screen = ({ children }: ScreenProps) => {
  return (
    <div className="flex flex-col h-full w-full ">
      <Header />
      <div className="flex-1 ">{children}</div>
      <Footer />
    </div>
  );
};

export default Screen;
