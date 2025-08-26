import { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import './VehicleStatusModalStyling.css';

export default function VehicleStatusModal({ open, onClose, vehicle }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    if (open) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  const statusChips = [
    { label: "KM Covered", value: "27,202 KM", state: "" },
    { label: "Last Service", value: "25-12-2025", state: "" },
    { label: "Next Service Due", value: "25-12-2025", state: "" },
    { label: "Brakes", value: "Suspended", color: "bg-yellow-500" },
    { label: "Tyres", value: "Inactive", color: "bg-red-500" },
    { label: "Engine", value: "Inactive", color: "bg-red-500" },
    { label: "Light and Indicators", value: "Suspended", color: "bg-yellow-500" },
    { label: "Wheel Balancing", value: "Inactive", color: "bg-red-500" },
    { label: "Alignment", value: "Inactive", color: "bg-red-500" },
    { label: "Seat Belts and Airbags", value: "Inactive", color: "bg-red-500" },
    { label: "Transmission", value: "Active", color: "bg-green-500" },
    { label: "Suspension System", value: "Active", color: "bg-green-500" },
    { label: "Insurance Status", value: "Active", color: "bg-green-500", ExpiryDate: "20-12-2025" },
    { label: "Fitness Certificate Status", value: "Active", color: "bg-green-500", ExpiryDate: "20-12-2025" },
    { label: "Engine", value: "Active", color: "bg-green-500" },
    { label: "No. Of Challan", value: "120", state: "" },
    { label: "No. Of Accidents", value: "120", state: "" },
  ];

  const accidentRows = new Array(6).fill(null).map(() => ({
    date: "25/12/2025/ 02:20 Am",
    location: "Ghaziabad",
    driver: "Rohit Kumar",
    loss: "200",
    injuries: "120",
    report: "Download Report",
    cause: "Vehicle's Fault",
    rank: "12/35",
  }));

  const challanRows = new Array(6).fill(null).map(() => ({
    date: "25/12/2025/ 02:20 Am",
    location: "Ghaziabad",
    driver: "Rohit Kumar",
    license: "A65464KM",
    type: "Traffic Rule Brake",
    section: "Section 36 Act of 1988",
    fine: "₹20,120",
    status: "Paid",
  }));
  console.log(statusChips,'statusChips')

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center  ">
      <div className="absolute inset-0 bg-black/80" onClick={onClose} />
      <div className="relative w-[1100px] max-w-[95vw] bg-white rounded-2xl shadow-xl p-6 overflow-y-auto max-h-[70vh] mt-[100px]">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 w-8 h-8 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100"
        >
          <RxCross2 />
        </button>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">Vehicle Status {vehicle?.vehicleNumber ? `- ${vehicle.vehicleNumber}` : ""}</h3>
        </div>

        <div className="flex flex-wrap gap-3">
          {statusChips.map((s, idx) => (
            
            <div key={idx}
              className="border border-gray-200 rounded-md p-3 bg-[#ffffff] flex items-center justify-between min-w-[158px]">
              <div>
                <div className="text-xs text-gray-500">{s.label}</div>
                <div className="flex items-center">
                  {s.color && <span className={`w-2.5 h-2.5 rounded-full me-1 inline-block ${s.color}`} />}
                  <div className="text-sm font-semibold text-gray-900">
                        {s.value}
                  </div>
                  
                </div>
                <div className="text-[10px] text-gray-600">Expiry Date: {s.ExpiryDate?  s.ExpiryDate : ""}</div>
              </div>

            </div>
          ))}
        </div>

        <div className="mt-8">
          <div className="font-semibold mb-3">Accident History</div>
          <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-white">
                  <th className="p-3" style={{backgroundColor:'#525fe1', borderRadius:'10px 0 0 0'}}>Date/Time</th>
                  <th className="p-3" style={{backgroundColor:'#525fe1'}}>Location</th>
                  <th className="p-3" style={{backgroundColor:'#525fe1'}}>Driver Name</th>
                  <th className="p-3" style={{backgroundColor:'#525fe1'}}>Loss - No of Fatalities</th>
                  <th className="p-3" style={{backgroundColor:'#525fe1'}}>No of Injuries</th>
                  <th className="p-3" style={{backgroundColor:'#525fe1'}}>Fact Finding Report (PDF)</th>
                  <th className="p-3" style={{backgroundColor:'#525fe1'}}>Cause of Accident</th>
                  <th className="p-3" style={{backgroundColor:'#525fe1', borderRadius:'0 10px 0 0'}}>Driver's rank in Fleet</th>
                </tr>
              </thead>
              <tbody>
                {accidentRows.map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                    <td className="p-3 font-semibold">{r.date}</td>
                    <td className="p-3 font-semibold">{r.location}</td>
                    <td className="p-3 font-semibold">{r.driver}</td>
                    <td className="p-3 font-semibold">{r.loss}</td>
                    <td className="p-3 font-semibold">{r.injuries}</td>
                    <td className="p-3 font-semibold text-indigo-600 underline">{r.report}</td>
                    <td className="p-3 font-semibold">{r.cause}</td>
                    <td className="p-3 font-semibold">{r.rank}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8">
          <div className="font-semibold mb-3">Vehicle Challan History</div>
          <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-white">
                  <th className="p-3" style={{backgroundColor:'#525fe1', borderRadius:'10px 0 0 0'}}>Date/Time</th>
                  <th className="p-3" style={{backgroundColor:'#525fe1'}}>Location</th>
                  <th className="p-3" style={{backgroundColor:'#525fe1'}}>Driver Name</th>
                  <th className="p-3" style={{backgroundColor:'#525fe1'}}>License Number</th>
                  <th className="p-3" style={{backgroundColor:'#525fe1'}}>Challan Type</th>
                  <th className="p-3" style={{backgroundColor:'#525fe1'}}>Section</th>
                  <th className="p-3" style={{backgroundColor:'#525fe1'}}>Fine Amount</th>
                  <th className="p-3" style={{backgroundColor:'#525fe1', borderRadius:'0 10px 0 0'}}>Status</th>
                </tr>
              </thead>
              <tbody>
                {challanRows.map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                    <td className="p-3 font-semibold">{r.date}</td>
                    <td className="p-3 font-semibold">{r.location}</td>
                    <td className="p-3 font-semibold">{r.driver}</td>
                    <td className="p-3 font-semibold">{r.license}</td>
                    <td className="p-3 font-semibold">{r.type}</td>
                    <td className="p-3 font-semibold">{r.section}</td>
                    <td className="p-3 font-semibold">{r.fine}</td>
                    <td className="p-3 font-semibold">{r.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}


