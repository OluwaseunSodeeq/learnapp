import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export default function CoursesFooter({data}) {
    const {previousPage,nextPage, updatePage, currentPage,totalPages,} = data;
  return (
    <div className='h-4rem flex  items-center justify-between bg-base100  px-4 py-2 lg:pl-10 lg:pr-17'>
        <p className=' text-gray-500 text-sm'>{currentPage} out of {totalPages} courses are shared</p>
        <div className='flex items-center gap-3 mt-2'>

               <button className={`${currentPage === 1 ? "text-gray-500  cursor-not-allowed" : "cursor-pointer text-orange"
              }`}
              disabled={currentPage < 1}
              onClick={previousPage}
            >
              <IoIosArrowBack/>
            </button>

            <button className={`${currentPage === 1 ? "bg-orange text-base100" : "bg-base100 text-gray-500"} text-sm cursor-pointer hover:bg-orange hover:text-base100 rounded-full p-1 w-5 h-5 flex items-center justify-center`} onClick={()=> updatePage(1)}>1</button>
            <button className={`${currentPage === 2 ? "bg-orange text-base100" : "bg-base100 text-gray-500"} text-sm cursor-pointer hover:bg-orange hover:text-base100 rounded-full p-1 w-5 h-5 flex items-center justify-center`} onClick={()=> updatePage(2)}>2</button>
            <button className={`${currentPage === 3 ? "bg-orange text-base100" : "bg-base100 text-gray-500"} text-sm cursor-pointer hover:bg-orange hover:text-base100 rounded-full p-1 w-5 h-5 flex items-center justify-center`} onClick={()=> updatePage(3)}>3</button>
            <button className={`${currentPage === 1 ? "bg-orange text-base100" : "bg-base100 text-gray-500"} text-sm cursor-pointer hover:bg-orange hover:text-base100 rounded-full p-1 w-5 h-5 flex items-center justify-center`} onClick={()=> updatePage(1)}>-</button>
            <button className={`${currentPage === totalPages ? "bg-orange text-base100" : "bg-base100 text-gray-500"} text-sm cursor-pointer hover:bg-orange hover:text-base100 rounded-full p-1 w-5 h-5 flex items-center justify-center`} onClick={()=> updatePage(totalPages)}>{totalPages}</button>
            <button disabled={currentPage === totalPages} onClick={nextPage}  className={`${currentPage === totalPages ?"text-gray-500  cursor-not-allowed" : "cursor-pointer text-orange"}`} >
              <IoIosArrowForward/>
            </button>
        </div>

    </div>
  )
}
