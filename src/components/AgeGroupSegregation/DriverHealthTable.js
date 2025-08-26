import React from 'react';

const DriverHealthTable = () => {
  const driverData = [
    {
      sNo: "1",
      driverName: "John Smith",
      licenseNumber: "DL123456789",
      age: "35",
      healthScore: "85",
      vision: "Good",
      hearing: "Good",
      diabetes: "No",
      hypertension: "No",
      thyroids: "Normal",
      neurologicalHealth: "Good",
      mentalHealth: "Good",
      cognitiveHealth: "Good",
      cardiacHealth: "Good",
      spineAndBoneHealth: "Good",
      cancer: "No",
      hivAidsStd: "No"
    },
    {
      sNo: "2",
      driverName: "Maria Garcia",
      licenseNumber: "DL987654321",
      age: "42",
      healthScore: "78",
      vision: "Good",
      hearing: "Fair",
      diabetes: "No",
      hypertension: "Yes",
      thyroids: "Normal",
      neurologicalHealth: "Good",
      mentalHealth: "Good",
      cognitiveHealth: "Good",
      cardiacHealth: "Fair",
      spineAndBoneHealth: "Good",
      cancer: "No",
      hivAidsStd: "No"
    },
    {
      sNo: "3",
      driverName: "Robert Johnson",
      licenseNumber: "DL456789123",
      age: "28",
      healthScore: "92",
      vision: "Excellent",
      hearing: "Good",
      diabetes: "No",
      hypertension: "No",
      thyroids: "Normal",
      neurologicalHealth: "Good",
      mentalHealth: "Good",
      cognitiveHealth: "Excellent",
      cardiacHealth: "Good",
      spineAndBoneHealth: "Good",
      cancer: "No",
      hivAidsStd: "No"
    },
    {
      sNo: "4",
      driverName: "Sarah Williams",
      licenseNumber: "DL321654987",
      age: "39",
      healthScore: "73",
      vision: "Fair",
      hearing: "Good",
      diabetes: "Pre-diabetic",
      hypertension: "No",
      thyroids: "Normal",
      neurologicalHealth: "Good",
      mentalHealth: "Good",
      cognitiveHealth: "Good",
      cardiacHealth: "Good",
      spineAndBoneHealth: "Fair",
      cancer: "No",
      hivAidsStd: "No"
    },
    {
      sNo: "5",
      driverName: "Michael Brown",
      licenseNumber: "DL789123456",
      age: "51",
      healthScore: "68",
      vision: "Good",
      hearing: "Fair",
      diabetes: "Type 2",
      hypertension: "Yes",
      thyroids: "Hypo",
      neurologicalHealth: "Fair",
      mentalHealth: "Good",
      cognitiveHealth: "Fair",
      cardiacHealth: "Fair",
      spineAndBoneHealth: "Poor",
      cancer: "No",
      hivAidsStd: "No"
    }
  ];

  // const columns = [
  //   { key: 'sNo', label: 'S.No' },
  //   { key: 'driverName', label: 'Driver Name' },
  //   { key: 'licenseNumber', label: 'License Number' },
  //   { key: 'age', label: 'Age' },
  //   { key: 'healthScore', label: 'Health Score' },
  //   { key: 'vision', label: 'Vision' },
  //   { key: 'hearing', label: 'Hearing' },
  //   { key: 'diabetes', label: 'Diabetes' },
  //   { key: 'hypertension', label: 'Hypertension' },
  //   { key: 'thyroids', label: 'Thyroids' },
  //   { key: 'neurologicalHealth', label: 'Neurological Health' },
  //   { key: 'mentalHealth', label: 'Mental Health' },
  //   { key: 'cognitiveHealth', label: 'Cognitive Health' },
  //   { key: 'cardiacHealth', label: 'Cardiac Health' },
  //   { key: 'spineAndBoneHealth', label: 'Spine and Bone Health' },
  //   { key: 'cancer', label: 'Cancer' },
  //   { key: 'hivAidsStd', label: 'HIV/AIDS/STD' }
  // ];

  return (
    <>
      <div className="pt-[36px]"> 
        <div className="p-2  bg-white rounded-[20px] border border-gray-400 " style={{ width: '100%' }}>
          <div className="w-full p-2">
            <div className="overflow-x-auto bg-white rounded-lg">
              <table className="min-w-full text-sm border-collapse">
                {/* Table Head */}
                <thead>
                  <tr className="bg-indigo-600 text-white text-left rounded-t-2xl">
                    <th className="px-4 py-3 text-[14px]">S.No</th>
                    <th className="px-4 py-3 text-[14px]">Driver Name</th>
                    <th className="px-4 py-3 text-[14px]">License Number</th>
                    <th className="px-4 py-3 text-[14px]">Age</th>
                    <th className="px-4 py-3 text-[14px]">Health Score</th>
                    <th className="px-4 py-3 text-[14px]">Vision</th>
                    <th className="px-4 py-3 text-[14px]">Hearing</th>
                    <th className="px-4 py-3 text-[14px]">Diabetes</th>
                    <th className="px-4 py-3 text-[14px]">Hypertension</th>
                    <th className="px-4 py-3 text-[14px]">thyroids</th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                  {driverData.map((driver, index) => (
                    <tr
                      key={driver.id}
                      className={`${index % 2 === 0 ? "bg-[#eeeffc]" : "bg-white"
                        } hover:bg-gray-100 transition`}
                    >
                      <td className="px-4 py-3 text-[14px]">{index + 1}</td>
                      <td className="px-4 py-3 text-[14px]">{driver.driverName}</td>
                      <td className="px-4 py-3 text-[14px]">{driver.licenseNumber}</td>
                      <td className="px-4 py-3 text-[14px]">{driver.age}</td>
                      <td className="px-4 py-3 text-[14px]">{driver.healthScore}</td>
                      <td className="px-4 py-3 text-[14px]">{driver.vision}</td>
                      <td className="px-4 py-3 text-[14px]">{driver.hearing}</td>
                      <td className="px-4 py-3 text-[14px]">{driver.diabetes}</td>
                      <td className="px-4 py-3 text-[14px]">{driver.hypertension}</td>
                      <td className="px-4 py-3 text-[14px]">{driver.thyroids}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DriverHealthTable;
