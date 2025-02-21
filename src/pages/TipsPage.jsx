import React, { useEffect, useState } from "react";
import { getGeneralTips } from "../api/Index";

const TipsPage = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    getGeneralTips()
      .then((data) => {
        if (Array.isArray(data)) {
          setTips(data);
        } else {
          console.error(
            "La respuesta del servidor no tiene la estructura esperada:",
            data
          );
        }
      })
      .catch((error) => {
        console.error("Error al obtener los consejos:", error);
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Consejos</h1>
      <div className="space-y-4">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="border border-gray-200 bg-teal-100 rounded-lg p-4  shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col space-y-2">
              <h3 className="text-xl font-semibold">Consejo {index + 1}</h3>
              <p className="text-gray-600">{tip}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TipsPage;
