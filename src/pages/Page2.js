
const Page2 = () => {
  const data = [
    {
      id: "01",
      vehicleNumber: "UP16 AA 3456",
      depot: "Ghaziabad",
      route: "Ghaziabad-Kushinagar",
      location: "Amroha",
      status: "Over-Speeding",
      liveFeed: "Video Link",
      driver: { name: "Rohit Kumar", phone: "+91 7662262656" },
      conductor: "Rohit Kumar",
      health: "Hypertension",
      vehicleStatus: "View More",
    },
    // {
    //   id: "02",
    //   vehicleNumber: "UP16 AA 3456",
    //   depot: "Ghaziabad 2",
    //   route: "Ghaziabad-Kushinagar 2",
    //   location: "Amroha 2",
    //   status: "Over-Speeding 2",
    //   liveFeed: "Video Link 2",
    //   driver: { name: "Rohit Kumar 2", phone: "+91 7662262656" },
    //   conductor: "Rohit Kumar2",
    //   health: "Diabetes2",
    //   vehicleStatus: "View More2",
    // },
  ];

  return (
    <div className="mt-[36px]">
      <div className="overflow-x-auto rounded-2xl flex items-center gap-4 text-sm bg-white text-gray-700 p-3 border-gray-400">
        <table className="min-w-full text-sm text-left text-gray-700 ">
          <thead className=" text-white text-sm font-semibold rounded-2xl ">
            <tr>
              <th className="px-6 py-3" style={{borderRadius:'10px 0 0 0', backgroundColor:'#525fe1'}}>S.No.</th>
              <th className="px-5 py-3" style={{ backgroundColor:'#525fe1'}}>Vehicle Number</th>
              <th className="px-5 py-3" style={{ backgroundColor:'#525fe1'}}>RO/ Depot</th>
              <th className="px-5 py-3" style={{ backgroundColor:'#525fe1'}}>Route</th>
              <th className="px-5 py-3" style={{ backgroundColor:'#525fe1'}}>Current Location</th>
              <th className="px-5 py-3" style={{ backgroundColor:'#525fe1'}}>Status</th>
              <th className="px-5 py-3" style={{ backgroundColor:'#525fe1'}}>Live Feed</th>
              <th className="px-5 py-3" style={{ backgroundColor:'#525fe1'}}>Action</th>
              <th className="px-5 py-3" style={{ backgroundColor:'#525fe1'}}>Duty Driver</th>
              <th className="px-5 py-3" style={{ backgroundColor:'#525fe1'}}>Duty Conductor</th>
              <th className="px-5 py-3" style={{ backgroundColor:'#525fe1'}}>Health Issues</th>
              <th className="px-5 py-3" style={{ backgroundColor:'#525fe1'}} style={{borderRadius:'0 10px  0 0', backgroundColor:'#525fe1'}}>Vehicle Status</th>
            </tr>
          </thead>


          <tbody>
            {data.map((row, index) => (
              <tr
                key={row.id}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } border-b`}
              >
                <td className="px-6 py-3 font-medium">{row.id}</td>
                <td className="px-6 py-3">{row.vehicleNumber}</td>
                <td className="px-6 py-3">{row.depot}</td>
                <td className="px-6 py-3">{row.route}</td>
                <td className="px-6 py-3">{row.location}</td>
                <td className="px-6 py-3 text-red-500 font-medium">
                  {row.status}
                </td>
                <td className="px-6 py-3 text-indigo-600 cursor-pointer underline">
                  {row.liveFeed}
                </td>
                <td className="px-6 py-3">
                  <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-1 rounded-full text-sm shadow">
                    Call Now
                  </button>
                </td>
                <td className="px-6 py-3">
                  <p className="font-medium">{row.driver.name}</p>
                  <p className="text-xs text-gray-500">{row.driver.phone}</p>
                </td>
                <td className="px-6 py-3">{row.conductor}</td>
                <td className="px-6 py-3 text-red-600 font-medium">
                  {row.health}
                </td>
                <td className="px-6 py-3 text-indigo-600 cursor-pointer underline">
                  {row.vehicleStatus}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page2;
