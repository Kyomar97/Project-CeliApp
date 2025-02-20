import React, { useEffect, useState } from "react";
import { getGeneralTips } from "../api/Index";

const TipsPage = () => {
  const [tips, setTips] = useState([]);
  useEffect(() => {
    getGeneralTips().then((data) => setTips(data));
  }, []);

  return (
    <div>
      <h1>Consejos</h1>
      <div>
        {tips.map((currentTips) => (
          <div
            key={currentTips.id}
            className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => handleItemClick(currentTips.id)}
          >
            <h3 className="text-xl font-semibold">{currentTips.location}</h3>
            <p className="text-gray-600">{currentTips.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TipsPage;
