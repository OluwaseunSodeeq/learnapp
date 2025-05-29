import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

export default function FilterButton({value,index,filterHandler,type}) {
  const clickedBtn =  0;  
  return (
    <div
            className={`flex cursor-pointer items-center gap-2 px-4 py-1.5 text-sm rounded-sm border ${
              index === clickedBtn
                ? "bg-orange text-white border-orange"
                : "text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
            onClick={() => filterHandler(value)}
          >
           <span> {value}</span> {type === "users" ? <IoIosArrowDown className={`${index === clickedBtn ?"text-base100":"text-gray-700"}`}/>:""}
    </div>
  )
}
