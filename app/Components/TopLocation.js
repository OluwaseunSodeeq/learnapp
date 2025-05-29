
"use client";
export default function TopLocation() {
  const locations = [
    { name: "Ukraine", value: 9.68, color: "bg-red-500" },
    { name: "Italy", value: 8.798, color: "bg-blue-600" },
    { name: "France", value: 3.56, color: "bg-green-800" },
    { name: "Bulgary", value: 4.78, color: "bg-cyan-600" },
  ];

  const maxValue = Math.max(...locations.map((loc) => loc.value));

 return (
    <div className=" lg:w-[40%]  shadow-xl  ">
    {/* <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-md"> */}
    <div className="relative w-full bg-base100 h-full p-4 rounded-md">
      <h2 className="text-lg font-semibold text-black mb-4">Top Location</h2>
      <div className="space-y-4">

        {locations.map((loc, idx) => (
          <div key={idx} className="flex flex-col gap-1 lg:gap-2">
            <div className="flex justify-between items-center ">
              <div className="flex items-center gap-2">
                <span
                  className={`w-2.5 h-2.5 rounded-full my-2 ${loc.color}`}
                ></span>
                <span className="text-sm text-gray-800">{loc.name}</span>
              </div>
              <span className="text-sm text-gray-500">
                {loc.value.toLocaleString("en-US")}
              </span>
            </div>

            <div className="w-full bg-gray-200 h-1.5 rounded">
              <div
                className={`h-full rounded ${loc.color}`}
                style={{
                  width: `${(loc.value / maxValue) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}
