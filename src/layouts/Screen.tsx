import Footer from "../../components/footer";
import Header from "../../components/header";

interface ScreenProps {
  children: React.ReactNode;
}
const Screen = ({ children }: ScreenProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Screen;
