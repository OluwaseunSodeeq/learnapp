import SearchInput from "./SearchInput";
import FilterButton from "./FilterButton";

const filters = ["All", "UI/UX", "Photo", "Graphic design", "Tester"];

export default function HeaderControls() {
const filterHandler = (value) => {
  console.log(value);
}
  return (
    <div className="flex justify-between items-center gap-4 p-4">
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
