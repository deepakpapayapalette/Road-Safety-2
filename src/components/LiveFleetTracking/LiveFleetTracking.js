import { useState } from "react";
import EmergencyContactsModal from "./EmergencyContactsModal";
import { RxCross2 } from "react-icons/rx";
import VehicleStatusModal from "./VehicleStatusModal";


export default function LiveFleetTracking({ data }) {
  console.log(data, "updated data")
  const [filters, setFilters] = useState({
    sos: false,
    overspeeding: false,
    fatigue: false,
    distracted: false,
  });

  const [showContacts, setShowContacts] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);
  const [showVehicleStatus, setShowVehicleStatus] = useState(false);

  const toggleFilter = (key) => {
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Apply filters (demo: only filters by status if checked)
  const filteredData = data.filter((row) => {
    if (filters.overspeeding && row.status !== "Over-Speeding") return false;
    if (filters.sos && row.status !== "SOS") return false;
    if (filters.fatigue && row.status !== "Fatigue") return false;
    if (filters.distracted && row.status !== "Distracted Driving") return false;
    return true;
  });

  

  return (
   <>
    <div className="LiveFleetTracking space">
      {/* Title + Filters */}
      <div>
        <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Live Fleet Tracking</h2>
              <div className="flex items-center gap-4 text-sm text-gray-700">
                <label className="flex items-center font-semibold gap-1">
                  <input 
                  className="w-[20px] h-[20px]"
                    type="checkbox"
                    checked={filters.sos}
                    onChange={() => toggleFilter("sos")}
                  />
                  SOS
                </label>
                <label className="flex items-center font-semibold gap-1">
                  <input 
                  className="w-[20px] h-[20px]"
                    type="checkbox"
                    checked={filters.overspeeding}
                    onChange={() => toggleFilter("overspeeding")}
                  />
                  Over-speeding
                </label>
                <label className="flex items-center font-semibold gap-1">
                  <input 
                  className="w-[20px] h-[20px]"
                    type="checkbox"
                    checked={filters.fatigue}
                    onChange={() => toggleFilter("fatigue")}
                  />
                  Fatigue
                </label>
                <label className="flex items-center font-semibold gap-1">
                  <input 
                  className="w-[20px] h-[20px]"
                    type="checkbox"
                    checked={filters.distracted}
                    onChange={() => toggleFilter("distracted")}
                  />
                  Distracted Driving
                </label>
              </div>
            </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-800 p-3 overflow-x-auto">
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className=" text-white text-left">
              <th className="p-3" style={{borderRadius:'10px 0 0 0', backgroundColor:'#525fe1'}}>S.No.</th>
              <th className="p-3" style={{ backgroundColor:'#525fe1'}}>Vehicle Number</th>
              <th className="p-3" style={{ backgroundColor:'#525fe1'}}>RO/ Depot</th>
              <th className="p-3" style={{ backgroundColor:'#525fe1'}}>Route</th>
              <th className="p-3" style={{ backgroundColor:'#525fe1'}}>Current Location</th>
              <th className="p-3" style={{ backgroundColor:'#525fe1'}}>Status</th>
              <th className="p-3" style={{ backgroundColor:'#525fe1'}}>Live Feed</th>
              <th className="p-3" style={{ backgroundColor:'#525fe1'}}>Action</th>
              <th className="p-3" style={{ backgroundColor:'#525fe1'}}>Driver</th>
              <th className="p-3" style={{ backgroundColor:'#525fe1'}}>Duty Conductor</th>
              <th className="p-3" style={{ backgroundColor:'#525fe1'}}>Health Issues</th>
              <th className="p-3" style={{borderRadius:'0 10px 0 0', backgroundColor:'#525fe1'}}>Vehicle Status</th>
              
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, i) => (
              <tr
                key={i}
                className={i % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="p-3 font-medium">{i + 1}</td>
                <td className="p-3 font-medium">{row.vehicleNumber}</td>
                <td className="p-3 font-medium">{row.depot}</td>
                <td className="p-3 font-medium">{row.route}</td>
                <td className="p-3 font-medium">{row.currentLocation}</td>
                <td className="p-3 font-medium">{row.status}</td>
                <td className="p-3 font-medium">
                  <button
                    onClick={() => { setSelectedVideoUrl(row?.SafeDrive || row?.liveFeed || null); setShowVideo(true); }}
                    className="text-blue-600 underline Video-Link"
                  >
                    Video Link
                  </button>
                </td>
                <td className="p-3 font-medium">
                  <button onClick={() => { setSelectedRow(row); setShowContacts(true); }} className="bg-indigo-600 text-white px-3 py-1 rounded-lg text-xs">
                    Call Now
                  </button>
                </td>
                <td className="p-3 font-medium">{row.driver}</td>
                <td className="p-3 font-medium">{row.DutyConductor}</td>
                <td className="p-3 font-medium">{row.HealthIssues}</td>
                <td className="p-3 font-medium">
                  <button onClick={() => { setSelectedRow(row); setShowVehicleStatus(true); }} className="text-indigo-600 underline">
                    {row.VehicleStatus || 'View More'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
         </div>
      </div>
       <EmergencyContactsModal open={showContacts} onClose={() => setShowContacts(false)} vehicle={selectedRow} />
       <VehicleStatusModal open={showVehicleStatus} onClose={() => setShowVehicleStatus(false)} vehicle={selectedRow} />
       
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center mt-20">
          <div className="absolute inset-0 bg-black/80" onClick={() => setShowVideo(false)} />
          <div className="relative w-[900px] max-w-[90vw] bg-white rounded-2xl shadow-xl p-0 overflow-hidden">
            <button
              onClick={() => setShowVideo(false)}
              aria-label="Close"
              className="absolute right-3 top-3 w-8 h-8 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 z-10"
            >
              <RxCross2 />
            </button>
            <video src={selectedVideoUrl || ""} controls className="w-full h-auto block"  />
          </div>
        </div>
       )}
    </>
  );
}
