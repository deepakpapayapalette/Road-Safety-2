import React from "react";

const driversData = [
  {
    id: 1,
    fleetId: "Fleet ID",
    name: "Driver Name",
    license: "License Number",
    depot: "Depot A",
    age: "age",
    gender: "Gender",
    recommendation: "Recommendation",
    assessmentDate: "Health Asses-sment Date",
    nextAssessment: "Next Assessment Due",
  },
  {
    id: 2,
    fleetId: "Fleet ID",
    name: "Driver Name",
    license: "License Number",
    depot: "Depot A",
    age: "age",
    gender: "Gender",
    recommendation: "Recommendation",
    assessmentDate: "Health Asses-sment Date",
    nextAssessment: "Next Assessment Due",
  },
  {
    id: 3,
    fleetId: "Fleet ID",
    name: "Driver Name",
    license: "License Number",
    depot: "Depot A",
    age: "age",
    gender: "Gender",
    recommendation: "Recommendation",
    assessmentDate: "Health Asses-sment Date",
    nextAssessment: "Next Assessment Due",
  },
  {
    id: 4,
    fleetId: "Fleet ID",
    name: "Driver Name",
    license: "License Number",
    depot: "Depot A",
    age: "age",
    gender: "Gender",
    recommendation: "Recommendation",
    assessmentDate: "Health Asses-sment Date",
    nextAssessment: "Next Assessment Due",
  },
  {
    id: 5,
    fleetId: "Fleet ID",
    name: "Driver Name",
    license: "License Number",
    depot: "Depot A",
    age: "age",
    gender: "Gender",
    recommendation: "Recommendation",
    assessmentDate: "Health Asses-sment Date",
    nextAssessment: "Next Assessment Due",
  },

];

const DriverHealthTable2 = () => {
  return (
    <>
    <div className="pt-[36px]"> 
    <div className="w-full p-3 rounded-[20px] bg-white border border-gray-400 ">
      <div className="overflow-x-auto   rounded-2xl">
        <table className="min-w-full text-sm border-collapse">
          {/* Table Header */}
          <thead>
            <tr className="bg-indigo-600 text-white text-left rounded-t-2xl">
              <th className="px-4 py-3">S.No</th>
              <th className="px-4 py-3">Fleet ID</th>
              <th className="px-4 py-3">Driver Name</th>
              <th className="px-4 py-3">License Number</th>
              <th className="px-4 py-3">RO/Depot</th>
              <th className="px-4 py-3">Age</th>
              <th className="px-4 py-3">Gender</th>
              <th className="px-4 py-3">Recommendation</th>
              <th className="px-4 py-3">Health Assessment Date</th>
              <th className="px-4 py-3">Next Assessment Due</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {driversData.map((driver, index) => (
              <tr
                key={driver.id}
                className={`${
                  index % 2 === 0 ? "bg-[#eeeffc]" : "bg-white"
                } hover:bg-gray-100 transition`}
              >
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3">{driver.fleetId}</td>
                <td className="px-4 py-3 text-indigo-600 font-medium cursor-pointer hover:underline">
                  {driver.name}
                </td>
                <td className="px-4 py-3">{driver.license}</td>
                <td className="px-4 py-3">{driver.depot}</td>
                <td className="px-4 py-3">{driver.age}</td>
                <td className="px-4 py-3">{driver.gender}</td>
                <td className="px-4 py-3">{driver.recommendation}</td>
                <td className="px-4 py-3">{driver.assessmentDate}</td>
                <td className="px-4 py-3">{driver.nextAssessment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    </>
  );
};

export default DriverHealthTable2;
