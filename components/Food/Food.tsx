import FoodItem from "./foodItem";

const Food = () => {
  return (
    <div className="my-12  mx-auto py-6">
      <div className="flex items-center justify-center space-x-6">
        <p>Breakfast</p>
        <p>Lunch</p>
        <p>Dinner</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <FoodItem />
        <FoodItem />
      </div>
    </div>
  );
};

export default Food;
