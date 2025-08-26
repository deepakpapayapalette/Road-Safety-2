import React, { useState } from "react";
import { FaSmoking, FaBan, FaWineGlassAlt } from "react-icons/fa"; // icons

const DriverHabits = () => {
  const [selectedDepot, setSelectedDepot] = useState("");

  const data = [
    {
      title: "No. of Drivers who Smoking",
      value: 200,
      icon: <FaSmoking size={28} className="text-gray-600" />,
    },
    {
      title: "No. of Drivers who have quit smoking",
      value: 120,
      icon: <FaBan size={28} className="text-gray-600" />,
    },
    {
      title: "No. of Drivers consuming alcohol",
      value: 200,
      icon: <FaWineGlassAlt size={28} className="text-gray-600" />,
    },
    {
      title: "No. of driver who have stopped drinking",
      value: 120,
      icon: <FaBan size={28} className="text-gray-600" />,
    },
  ];

  return (
    <div className="pt-[36px] ">
      {/* Dropdown */}
      <div className="flex justify-end mb-4">
        <select
          value={selectedDepot}
          onChange={(e) => setSelectedDepot(e.target.value)}
          className="border rounded-md px-3 py-2 text-sm"
        >
          <option value="">RO/Depo</option>
          <option value="ghaziabad">Ghaziabad</option>
          <option value="lucknow">Lucknow</option>
          <option value="delhi">Delhi</option>
        </select>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl flex flex-col items-start gap-2 border border-gray-300"
          >
            {item.icon}
            <p className="text-sm text-gray-700">{item.title}</p>
            <h2 className="text-xl font-bold text-gray-900">{item.value}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DriverHabits;
