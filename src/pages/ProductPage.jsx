import React, { useEffect, useState } from "react";
import { getProducts } from "../api/Index";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Productos</h1>
      <div>
        {products.map((currentProducts) => (
          <div
            key={currentProducts.id}
            className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => handleItemClick(currentProducts.id)}
          >
            <h3 className="text-xl font-semibold">{currentProducts.name}</h3>
            <p className="text-gray-600">{currentProducts.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
