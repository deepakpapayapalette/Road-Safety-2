import React from "react";

const AgeGroupSegregation = () => {
  const stats = [
    {
      label: "No. Of Driver Age Between 20-30 years",
      value: 120,
      color: "bg-[#5a4fcf]",
    },
    {
      label: "No. Of Driver Age Between 30-40 years",
      value: 12,
      color: "bg-green-600",
    },
    {
      label: "No. Of Driver Age Between 40-50 years",
      value: 19,
      color: "bg-green-700",
    },
    {
      label: "No. Of Driver Age Between 50-60 years",
      value: 35,
      color: "bg-[#fea500]",
    },
  ];

  // const tableHeaders = [
  //   "S.No",
  //   "Driver Name",
  //   "License Number",
  //   "Age",
  //   "Health Score",
  //   "Vision",
  //   "Hearing",
  //   "Diabetes",
  //   "Hypertension",
  // ];

  // const tableData = [
  //   {
  //     sno: 1,
  //     name: "Driver Name",
  //     license: "License Number",
  //     age: 32,
  //     health: "A",
  //     vision: "Normal",
  //     hearing: "Good",
  //     diabetes: "No",
  //     hypertension: "No",
  //   },
  //   {
  //     sno: 2,
  //     name: "Driver Name",
  //     license: "License Number",
  //     age: 45,
  //     health: "B",
  //     vision: "Blurred",
  //     hearing: "Mild Loss",
  //     diabetes: "Yes",
  //     hypertension: "Yes",
  //   },
  //   // ➝ Add more driver rows here
  // ];

  return (
    <>
    <div className="space">
      <h5 className="pb-3">Age group wise segregation</h5>
      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`${item.color} text-white rounded-xl shadow-lg p-4 flex flex-col  justify-center`}
          >
            <p className="text-[20px] text-start">{item.label}</p>
            <h2 className="text-3xl font-bold mt-2">{item.value}</h2>
          </div>
        ))}
      </div>

    </div>
    </>
  );
};

export default AgeGroupSegregation;
