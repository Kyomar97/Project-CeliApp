import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItems } from "../api/Index";

const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const data = await getItems();
        const selectedItem = data.find((item) => item.id === parseInt(id));
        setItem(selectedItem);
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    };

    fetchItem();
  }, [id]);

  if (!item) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{item.name}</h1>
      <p className="text-gray-700 mb-2">{item.description}</p>
      <p className="text-sm text-gray-500">ID: {item.id}</p>
    </div>
  );
};

export default ItemDetail;
