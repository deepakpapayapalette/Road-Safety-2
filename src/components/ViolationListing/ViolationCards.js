export default function ViolationCards({ violations }) {
  return (
    <>
      <div className="ViolationCards-listing pt-[32px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {violations.map((item, index) => (
            <div
              key={index}
              className=" rounded-xl shadow-md overflow-hidden p-3"
              style={{ backgroundColor: '#e6e8fc' }}
            >
              {/* Camera Snapshot */}
              <img
                src={item.image}
                alt="Violation"
                className="w-full h-48 object-cover"
                style={{ borderRadius: '10px 10px 0 0' }}
              />

              {/* Details */}
              <div className=" text-sm text-gray-700 pt-4">
                <p>
                  <span className="font-medium">Violation Type:</span>{" "}
                  {item.violationType}
                </p>
                <p>
                  <span className="font-medium">Fleet ID:</span> {item.fleetId}
                </p>
                <p>
                  <span className="font-medium">RO/ Depot:</span> {item.depot}
                </p>
                <p>
                  <span className="font-medium">Route:</span> {item.route}
                </p>
                <p>
                  <span className="font-medium">Location:</span> {item.location}
                </p>
                <p>
                  <span className="font-medium">Vehicle Registration Number:</span>{" "}
                  <span className="">{item.vehicleNumber}</span>
                </p>
                <p>
                  <span className="font-medium">Duty Driver:</span>{" "}
                  <span className="">{item.driver}</span>
                </p>
                <p>
                  <span className="font-medium">Duty Conductor:</span>{" "}
                  {item.conductor}
                </p>
                <p>
                  <span className="font-medium">Action:</span>{" "}
                  <a
                    href={`tel:${item.driverPhone}`}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Call Now
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
