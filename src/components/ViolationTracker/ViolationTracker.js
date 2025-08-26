import { useState } from "react";
import { TrendingUp } from "lucide-react";

const violationTypes = [
  "All",
  "Collision",
  "Over-speeding",
  "Fatigue",
  "Distracted Driving",
  "Harsh Braking/Acceleration",
  "Dangerous Lane Change",
  "Usage of Phone while Driving",
  "No Seat Belt while Driving",
  "Smoking while Driving",
];

export default function ViolationTracker() {
  const [selectedViolations, setSelectedViolations] = useState([]);
  const [driver, setDriver] = useState("");
  const [vehicle, setVehicle] = useState("");

  // Dummy KPI data
  const kpis = [
    { label: "Today", value: 2020, color: "#5a4fcf" },
    { label: "This Week", value: 2020, color: "#fea500" },
    { label: "This Month", value: 2020, color: "#47b34e" },
    { label: "This Year", value: 2020, color: "#155163" },
  ];

  // Handle checkbox toggle
  const handleCheckboxChange = (type) => {
    if (selectedViolations.includes(type)) {
      setSelectedViolations(selectedViolations.filter((t) => t !== type));
    } else {
      setSelectedViolations([...selectedViolations, type]);
    }
  };

  return (
   <>
   <div className="space">
        <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
             <h2 className="text-lg font-semibold mb-2">Violation Tracker</h2>
        </div>
     
      <div className="ceckbox-style">
           <select
          value={driver}
          onChange={(e) => setDriver(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-1 text-sm me-3"
        >
          <option value="">Driver Name</option>
          <option value="Rohit">Rohit</option>
          <option value="Amit">Amit</option>
        </select>

        <select
          value={vehicle}
          onChange={(e) => setVehicle(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-1 text-sm"
        >
          <option value="">Vehicle No.</option>
          <option value="UP16 AA 3456">UP16 AA 3456</option>
          <option value="UP32 BB 5678">UP32 BB 5678</option>
        </select>
      </div>
        </div>
        

      {/* Filters */}
      <div className="flex flex-wrap gap-4 items-center">
        {/* Checkboxes */}
        <div className="flex flex-wrap gap-3">
          {violationTypes.map((type, idx) => (
            <label key={idx} className="flex items-center gap-1 text-sm">
              <input
                type="checkbox"
                checked={selectedViolations.includes(type)}
                onChange={() => handleCheckboxChange(type)}
                className="accent-blue-600"
              />
              {type}
            </label>
          ))}
        </div>

        {/* Dropdowns */}
     
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {kpis.map((item, idx) => (
          <div
            key={idx}
            className={` text-white rounded-xl p-6 shadow-md `}
          style={{backgroundColor: `${item.color}`}} >
            <div className="d-flex justify-content-between mb-4">
                <div>
              <p className="text-lg text-xl">{item.label}</p>
            
            </div>
            <div className="Violation-icon">
                <TrendingUp className="w-8 h-8 text-gray-900 opacity-80" />
            </div>
            </div>
            
            <h2 className="text-4xl font-bold">{item.value.toLocaleString()}</h2>
            
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
