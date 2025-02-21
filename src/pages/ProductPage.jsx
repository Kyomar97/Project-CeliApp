import React, { useEffect, useState } from "react";
import { getProducts } from "../api/Index";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Productos</h1>
      <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 bg-teal-100 rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => toggleExpand(product.id)}
          >
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-600">
              {product.location || product.locations?.join(", ")}
            </p>
            {expandedId === product.id && (
              <p className="text-gray-600 mt-2">{product.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
