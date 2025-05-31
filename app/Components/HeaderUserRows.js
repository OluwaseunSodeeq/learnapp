import React from 'react'

export default function HeaderUserRows() {
  const buttonsLabel = ["Name",  "Role","Email", "Date of register","Last Activity", "Actions"];
  const clickedBtn  = 9;


  return (
    <div className='w-full'>
    
    <div className='flex justify-between items-center gap-4 pr-12'>
      <div className='flex justify-between items-center gap-6 '>
        {buttonsLabel.map((value, index) => (
            <div className={`flex cursor-pointer items-center gap-2 px-4 py-1.5 text-sm rounded-sm border ${
                        index === clickedBtn
                            ? "bg-orange text-white border-orange"
                            : "text-gray-700 border-gray-300 hover:bg-gray-100"
                        }`}
                        key={index}

                    >
                    <span> {value}</span>
            </div>
        ))
        }
        </div>
    </div>
    </div>
  )
}
