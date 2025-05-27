import { FaSearch } from "react-icons/fa";

const filters = ["All", "UI/UX", "Photo", "Graphic design", "Tester"];

export default function HeaderControls() {
  return (
    <div className="flex justify-between items-center gap-4 p-4">
      {/* Filter Buttons */}
      <div className="flex gap-2">
        {filters.map((item, index) => {
          const clickedBtn =  0;
          return (<button
            key={index}
            className={`px-4 py-1.5 text-sm rounded-sm border ${
              index === clickedBtn
                ? "bg-orange text-white border-orange"
                : "text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {item}
          </button>)
        })}
      </div>

      {/* Search Input */}
      <div className="relative w-full max-w-xs">
        <input
          type="text"
          placeholder="Search by title"
        //   className="w-full text-gray-500 pl-10 pr-4 py-2 border rounded-sm text-sm border-gray-500 outline-gray-500 focus:outline-orange focus:ring-2 focus:ring-orange"/>
          className="w-full text-gray-500 pl-10 pr-4 py-2 border rounded-sm text-sm border-gray-500 outline-gray-500 focus:outline-orange "/>
        <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-sm text-orange" />
      </div>
    </div>
  );
}
