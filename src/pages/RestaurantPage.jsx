import React, { useEffect, useState } from "react";
import { getFood } from "../api/Index";

const RestaurantPage = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    getFood().then((data) => setFood(data));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      <div>
        <h1>Restaurantes</h1>
        {food.map((currentFood) => (
          <div
            key={currentFood.id}
            className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => handleItemClick(currentFood.id)}
          >
            <h3 className="text-xl font-semibold">{currentFood.location}</h3>
            <p className="text-gray-600">{currentFood.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantPage;
