import { useEffect } from "react";
import copyIcon from "../../assets/images/svg/copy.svg"
import { RxCross2 } from "react-icons/rx";
export default function EmergencyContactsModal({ open, onClose, vehicle }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    if (open) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  const contacts = [
    { label: "Call Conductor", phone: "+91 5258596565", color: "bg-indigo-600" },
    { label: "Call Service Depot", phone: "+91 5258596565", color: "bg-indigo-600" },
    { label: "Off-road Driver", phone: "+91 5258596565", color: "bg-[#e21616]" },
    { label: "Call Ambulance", phone: "+91 5258596565", color: "bg-[#e21616]" },
    { label: "Call Fleet In-charge", phone: "+91 5258596565", color: "bg-indigo-600" },
    { label: "Call Police", phone: "+91 5258596565", color: "bg-[#e21616]" },
  ];

    return (
      <>
    <div className="fixed inset-0 z-50 flex items-center justify-center mt-20">
      <div className="absolute inset-0 bg-black/80" onClick={onClose} />
      <div className="relative w-[900px] max-w-[90vw] bg-white rounded-2xl shadow-xl p-6">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 w-8 h-8 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100"
        >
         <RxCross2 />
        </button>
        <div className="mb-4">
          <h3 className="text-sm">{vehicle?.vehicleNumber ? ` ${vehicle.vehicleNumber}` : ""}</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contacts.map((c, idx) => (
            <div key={idx} className="flex items-center justify-between gap-3 bg-[#eeeffc] rounded-xl p-3">
              <div>
                <div className="font-semibold text-gray-900">{c.label}</div>
                <div className="text-sm text-gray-900">{c.phone}</div>
              </div>
              <div className="flex items-center gap-2">
                <a href={`tel:${c.phone.replace(/\s|\+/g, "")}`} className={`${c.color} no-underline text-white text-xs px-3 py-1 rounded-md whitespace-nowrap`}>Call Now</a>
                <button><img src={copyIcon} alt="" /></button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <div className="font-semibold mb-2">Report Accident Boardcast</div>
          <textarea
            className="w-full h-28 border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Write a message here..."
          />
          <div className="flex justify-end mt-3">
            <button className="bg-[#dcdff9] text-gray-900  px-4 py-2 rounded-md text-sm font-semibold">
              Message Boardcast
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}


