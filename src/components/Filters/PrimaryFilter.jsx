import { useState } from "react";
import { Calendar, Target } from "lucide-react";

export default function PrimaryFilter() {
  const [fleet, setFleet] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [report, setReport] = useState("");
  const [regularStaff, setRegularStaff] = useState(false);
  const [contractualStaff, setContractualStaff] = useState(false);

  const clearData = () => {
    setFleet("");
    setFromDate("");
    setToDate("");
    setReport("");
    setRegularStaff(false);
    setContractualStaff(false);
  };

  return (
    <>
      <div className="pt-4">
        <div className="bg-[#525fe1] text-white rounded-lg p-3 flex flex-wrap items-center gap-3 ">
          <h2 className="font-semibold text-lg w-full mb-0">Primary Data Filter</h2>

          {/* Fleet Select */}
          <div className="flex items-center bg-white text-gray-700 px-3 me-lg-3 py-2 rounded-md">
            <Target className="w-4 h-4 text-blue-500 mr-2" />
            <select
              className="outline-none bg-transparent"
              value={fleet}
              onChange={(e) => setFleet(e.target.value)}
            >
              <option value="">Select the Fleet</option>
              <option value="fleet1">Fleet 1</option>
              <option value="fleet2">Fleet 2</option>
            </select>
          </div>

          {/* From Date */}
          <div className="flex items-center bg-white text-gray-700 px-3 me-lg-3 py-2 rounded-md">
            {/* <Calendar className="w-4 h-4 text-blue-500 mr-2" /> */}
            <input
              type="date"
              className="outline-none bg-transparent"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </div>

          {/* To Date */}
          <div className="flex items-center bg-white text-gray-700 px-3 me-lg-3 py-2 rounded-md">
            {/* <Calendar className="w-4 h-4 text-blue-500 mr-2" /> */}
            <input
              type="date"
              className="outline-none bg-transparent"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </div>

          {/* Staff checkboxes */}

          <label className="flex items-center gap-2 text-[14px] me-lg-3">
            <input
              className="w-[20px] h-[20px] bg-transparent border rounded-md"
              type="checkbox"
              checked={regularStaff}
              onChange={() => setRegularStaff(!regularStaff)}
            />
            Regular Staff
          </label>

          <label className="flex items-center gap-2 text-[14px] me-lg-3">
            <input
              className="w-[20px] h-[20px] bg-transparent border rounded-md"
              type="checkbox"
              checked={contractualStaff}
              onChange={() => setContractualStaff(!contractualStaff)}
            />
            Contractual Staff
          </label>

          {/* Report Select */}
          <div className="flex items-center bg-white text-gray-700 px-3 py-2 rounded-md">
            <Calendar className="w-4 h-4 text-blue-500 mr-2" />
            <select
              className="outline-none bg-transparent"
              value={report}
              onChange={(e) => setReport(e.target.value)}
            >
              <option value="">Yearly Report</option>
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>

          {/* Clear Data */}
          <button
            onClick={clearData}
            className="text-white font-semibold hover:underline ml-auto"
          >
            Clear data
          </button>
        </div>
      </div>
    </>
  );
}

