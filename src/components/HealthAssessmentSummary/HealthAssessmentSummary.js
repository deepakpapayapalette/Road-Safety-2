import React, { useState } from "react";

const HealthAssessmentSummary = () => {
  const [filters, setFilters] = useState({
    current: false,
    past: false,
    family: false,
  });

  const totalDrivers = 1200;

  const healthData = [
    { title: "Vision", issues: 200, critical: 15 },
    { title: "Hearing", issues: 200, critical: 15 },
    { title: "Diabetes", issues: 200, critical: 15 },
    { title: "Hypertension", issues: 200, critical: 15 },
    { title: "Thyroids", issues: 200, critical: 15 },
    { title: "Neurological Health", issues: 200, critical: 15 },
    { title: "Mental Health", issues: 200, critical: 15 },
    { title: "Cognitive Health", issues: 200, critical: 15 },
    { title: "Respiratory Health", issues: 200, critical: 15 },
    { title: "Cardiac Health", issues: 200, critical: 15 },
    { title: "Spine and Bone Health", issues: 200, critical: 15 },
    { title: "Cancer", issues: 200, critical: 15 },
    { title: "HIV/AIDS/STD", issues: 200, critical: 15 },
    { title: "Injury", issues: 200, critical: 15 },
    { title: "Past Surgery", issues: 200, critical: 15 },
    { title: "Addictions/ Substance Abuse", issues: 200, critical: 15 },
  ];

  const handleFilterChange = (key) => {
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
    <div className=" bg-gray-50 min-h-screen pt-[36px]">
      {/* Title & Total */}
      <div className="flex flex-wrap items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Driver's Health Assessment Summary (No of Drivers{" "}
          <span className="text-blue-600 font-bold">{totalDrivers}</span>)
        </h2>

        {/* Filters */}
        <div className="flex items-center gap-4 text-sm">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={filters.current}
              onChange={() => handleFilterChange("current")}
            />
            Current Issues
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={filters.past}
              onChange={() => handleFilterChange("past")}
            />
            Past Illness
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={filters.family}
              onChange={() => handleFilterChange("family")}
            />
            Family History
          </label>
        </div>
      </div>

      {/* Health Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {healthData.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow-sm border border-gray-200"
          >
            <h3 className="font-semibold text-gray-800">{item.title}</h3>
            <p className="text-sm text-gray-700">
              No of drivers with health Issues:{" "}
              <span className="font-bold">{item.issues}</span>
            </p>
            <p className="text-sm text-gray-700">
              No of critical cases:{" "}
              <span className="font-bold">{item.critical}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default HealthAssessmentSummary;
