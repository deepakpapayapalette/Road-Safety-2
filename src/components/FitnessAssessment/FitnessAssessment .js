import React, { useState } from "react";

const FitnessAssessment = () => {
  const [activeTab, setActiveTab] = useState("drivers");

  const tabs = [
    { key: "drivers", label: "Driver's Fitness Assessment" },
    { key: "vehicle", label: "Vehicle Fitness Assessment" },
    { key: "behaviour", label: "Driving Behaviour Assessment" },
    { key: "intervention", label: "Intervention Results" },
  ];

  const data = {
    drivers: [
      { title: "No of drivers' deaths on duty (natural deaths)", value: 1200, color: "bg-[#5a4fcf]" },
      { title: "No of drivers' deaths on duty (reasons unknown)", value: 1200, color: "bg-[#fea500]" },
      { title: "No of Drivers recommended to go off-duty on health grounds", value: 1200, color: "bg-[#47b34e]" },
      { title: "No of drivers suffered severe injuries/ disability due to accidents", value: 1200, color: "bg-[#e97451]" },
      { title: "No of Drivers shown no improvements on health assessment score", value: 1200, color: "bg-[#51c878]" },
      { title: "No of Drivers recommended to undergo medical treatments/ surgical interventions", value: 1200, color: "bg-[#1d8a8f]" },
      { title: "No of drivers caused accidents due to poor health", value: 1200, color: "bg-green-800" },
      { title: "No of Drivers shown improvements on Health assessment scores", value: 1200, color: "bg-[#155163]" },

      
    ],
    vehicle: [
      { title: "No of drivers' deaths on duty (reasons unknown)", value: 1200, color: "bg-yellow-500" },
      { title: "No of Drivers recommended to undergo medical treatments/ surgical interventions", value: 1200, color: "bg-green-500" },
    ],
    behaviour: [
      { title: "No of drivers caused accidents due to poor health", value: 1200, color: "bg-green-600" },
      { title: "No of Drivers shown improvements on Health assessment scores", value: 1200, color: "bg-teal-500" },
    ],
    intervention: [
      { title: "No of drivers suffered severe injuries/ disability due to accidents", value: 1200, color: "bg-green-600" },
      { title: "No of Drivers shown no improvements on health assessment score", value: 1200, color: "bg-cyan-900" },
    ],
  };

  return (
    <div className="space">
      {/* Tabs */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-3 rounded-lg font-medium   ${
              activeTab === tab.key
                ? "bg-[#525fe1] text-white font-semibold"
                : "bg-[#d5d9f9] text-gray-900 hover:bg-gray-400 bg-gray-300 font-semibold"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data[activeTab].map((item, index) => (
          <div
            key={index}
            className={`${item.color} text-white p-4 rounded-xl shadow-md`}
          >
            <p className="text-sm mb-2">{item.title}</p>
            <h2 className="text-2xl font-bold">{item.value}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FitnessAssessment;
