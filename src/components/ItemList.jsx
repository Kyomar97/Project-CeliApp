import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFood } from "../api/Index";

const ItemList = () => {
  const [food, setFood] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const data = await getFood();
        setFood(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchFood();
  }, []);

  const handleItemClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {food.map((food) => (
        <div
          key={food.id}
          className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => handleItemClick(food.id)}
        >
          <h3 className="text-xl font-semibold">{food_location.name}</h3>
          <p className="text-gray-600">{food_location.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
