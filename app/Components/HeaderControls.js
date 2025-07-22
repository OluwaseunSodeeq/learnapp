"use client";
import SearchInput from "./SearchInput";
import FilterButton from "./FilterButton";

const filters = ["All", "UI/UX", "Photo", "Design", "Tester"];

export default function HeaderControls() {
  
  const filterHandler = (value) => {
  console.log(value);}

  return (
    <div className=" w-full flex justify-between items-center md:gap-4 py-3 lg:p-4">
      {/* Filter Buttons */}
      <div className="flex gap-2">
        {filters.map((value, index) => {

          return (<FilterButton key={index} value={value} index={index} filterHandler={filterHandler}/>)
        })}
      </div>

      {/* Search Input */}
      <SearchInput/>
    </div>
  );
}
