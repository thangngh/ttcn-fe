import Logo from "./logo";

const FooterLinks = [
  { id: 1, text: "About Online Food" },
  { id: 2, text: "Read our blog" },
  { id: 3, text: "Sign up to deliver" },
  { id: 4, text: "Add your restaurant" },
  { id: 5, text: "Get Help" },
  { id: 6, text: "Ask any question" },
  { id: 7, text: "Order Now" },
  { id: 8, text: "Contact" },
  { id: 9, text: "Facebook" },
  { id: 10, text: "Instagram" },
  { id: 11, text: "Twitter" },
  { id: 12, text: "Youtube" },
];
const Footer = () => {
  return (
    <div className="bg-gray-500 px-6 py-12">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex pb-8">
          <div className="flex flex-grow">
            <Logo />
          </div>
          <div className="flex space-x-12">
            <div className="flex flex-col space-y-2">
              {FooterLinks.slice(0, 4).map((item) => (
                <span className="text-white poppins" key={item.id}>
                  {item.text}
                </span>
              ))}
            </div>
            <div className="flex flex-col space-y-2">
              {FooterLinks.slice(4, 8).map((item) => (
                <span className="text-white poppins" key={item.id}>
                  {item.text}
                </span>
              ))}
            </div>
            <div className="flex flex-col space-y-2">
              {FooterLinks.slice(8, 12).map((item) => (
                <span className="text-white poppins" key={item.id}>
                  {item.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
