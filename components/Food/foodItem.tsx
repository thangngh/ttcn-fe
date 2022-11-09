import Image from "next/image";
const FoodItem = () => {
  return (
    <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
      <span className="bg-red-100 border border-red-500 rounded-full text-primary text-sm  px-4 py-1 inline-block mb-4 ">
        Breakfast
      </span>
      <div className="block relative text-center">
        <Image
          className="bg-auto mx-auto transform transition duration-300 hover:scale-105 bg-center bg-no-repeat"
          src={"https://i.ibb.co/ccZyWng/breakfast1.png"}
          layout="fixed"
          width={300}
          height={300}
          alt=""
        />
      </div>
      <div className="flex flex-col items-center my-3 space-y-2">
        <h1 className="text-gray-900  text-lg">Eggs Benedict</h1>
        <span className="text-gray-500  text-sm text-center">
          {" "}
          Demesne mention promise you justice arrived way.Amazing foods are or
          and increasing to in especially inquietude companions acceptance
          admiration.Outweigh it families distance wandered ye..
        </span>
        <h2 className="text-gray-900  text-2xl font-bold">8.99$</h2>
        <button
          type="button"
          className="bg-red-500 text-white px-8 py-2 focus:outline-none  rounded-full mt-24 transform transition duration-300 hover:scale-105"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
