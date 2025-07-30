import React from 'react'
import { IoIosArrowDown } from 'react-icons/io';

export default function UserHeaderBtn({value,index,filterHandler,type}) {
      const clickedBtn =  0;  
      return (
        <div
                className={`flex cursor-pointer items-center justify-center gap-2 py-1.5 text-sm `}
                onClick={() => filterHandler(value)}
              >
               <span className={`border rounded-sm  px-2 py-1 ${
                  index === clickedBtn
                    ? "bg-orange text-white border-orange"
                    : "text-gray-700 border-gray-300 hover:bg-gray-100 hover:text-orange"
                }`}> {value}</span> {type === "users" ? <IoIosArrowDown className={`${index === clickedBtn ?"text-base100":"text-gray-700"}`}/>:""}
        </div>
      )
}

