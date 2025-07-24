"use client";
import React, { Suspense } from 'react'
import HeaderUserControls from './HeaderControlsSecond'
import { List, SlidersHorizontal } from 'lucide-react'
import CoursesFooter from './CoursesFooter'
import usePagination from './usePagination';
import UsersRows from './UserRows';
import UserHeaderBtn from './UserheaderBtn';

const tableContent = {
    tableHeaders: ["Name", "Role", "Email", "Date of Register", "Last Activity","Action"],

     users : [
        {

    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    role: "admin",
    dateOfRegister: "2024-03-10",
    lastActivityDate: "2025-05-20"
  },
  {
    name: "Brian Lee",
    email: "brian.lee@example.com",
    role: "editor",
    dateOfRegister: "2024-05-01",
    lastActivityDate: "2025-05-28"
  },
  {
    name: "Cynthia Wang",
    email: "cynthia.wang@example.com",
    role: "viewer",
    dateOfRegister: "2023-11-19",
    lastActivityDate: "2025-04-10"
  },
  {
    name: "Daniel Smith",
    email: "daniel.smith@example.com",
    role: "editor",
    dateOfRegister: "2024-07-14",
    lastActivityDate: "2025-05-30"
  },
  {
    name: "Emily Davis",
    email: "emily.davis@example.com",
    role: "viewer",
    dateOfRegister: "2023-12-25",
    lastActivityDate: "2025-05-15"
  },
  {
    name: "Franklin Owens",
    email: "franklin.owens@example.com",
    role: "admin",
    dateOfRegister: "2024-01-10",
    lastActivityDate: "2025-05-22"
  },
  {
    name: "Grace Liu",
    email: "grace.liu@example.com",
    role: "editor",
    dateOfRegister: "2024-03-03",
    lastActivityDate: "2025-05-29"
  },
  {
    name: "Henry Kim",
    email: "henry.kim@example.com",
    role: "viewer",
    dateOfRegister: "2023-09-05",
    lastActivityDate: "2025-05-10"
  },
  {
    name: "Isabella Clark",
    email: "isabella.clark@example.com",
    role: "admin",
    dateOfRegister: "2024-06-01",
    lastActivityDate: "2025-05-27"
  },
  {
    name: "Jack Brown",
    email: "jack.brown@example.com",
    role: "viewer",
    dateOfRegister: "2024-04-11",
    lastActivityDate: "2025-05-30"
  },
  {
    name: "Kaitlyn Morris",
    email: "kaitlyn.morris@example.com",
    role: "editor",
    dateOfRegister: "2024-08-20",
    lastActivityDate: "2025-05-31"
  },
  {
    name: "Liam Wright",
    email: "liam.wright@example.com",
    role: "viewer",
    dateOfRegister: "2023-10-30",
    lastActivityDate: "2025-05-14"
  },
  {
    name: "Mariah Evans",
    email: "mariah.evans@example.com",
    role: "admin",
    dateOfRegister: "2024-02-18",
    lastActivityDate: "2025-05-25"
  },
  {
    name: "Nathan Scott",
    email: "nathan.scott@example.com",
    role: "editor",
    dateOfRegister: "2024-05-22",
    lastActivityDate: "2025-05-26"
  },
  {
    name: "Olivia Young",
    email: "olivia.young@example.com",
    role: "viewer",
    dateOfRegister: "2024-03-15",
    lastActivityDate: "2025-05-11"
  },
  {
    name: "Patrick Nelson",
    email: "patrick.nelson@example.com",
    role: "admin",
    dateOfRegister: "2023-12-02",
    lastActivityDate: "2025-05-16"
  },
  {
    name: "Queenie Ray",
    email: "queenie.ray@example.com",
    role: "viewer",
    dateOfRegister: "2024-01-05",
    lastActivityDate: "2025-05-18"
  },
  {
    name: "Ryan James",
    email: "ryan.james@example.com",
    role: "editor",
    dateOfRegister: "2024-09-10",
    lastActivityDate: "2025-05-21"
  },
  {
    name: "Sophia Brooks",
    email: "sophia.brooks@example.com",
    role: "viewer",
    dateOfRegister: "2024-02-08",
    lastActivityDate: "2025-05-09"
  },
  {
    name: "Thomas Green",
    email: "thomas.green@example.com",
    role: "admin",
    dateOfRegister: "2024-06-18",
    lastActivityDate: "2025-05-30"
  }
]
}
 function UserPageContent() {

  const buttonArray = ["User's Role","Date of Registration","Last Activity Done","clear"]
  // const tableHeaders = ["name","role","email","Date of Register","Last Activity"];
  const  pageSize = 7;
   const { previousPage, nextPage, updatePage, currentPage, totalPages, paginatedData } = usePagination({ inputData: tableContent.users, pageSize });
   const data ={previousPage, nextPage,updatePage,currentPage,totalPages,}

  return (
    <div className="relative h-full pt-[9rem] pb-[4rem]">
                    <div className="fixed top-[4rem] left-[18rem] right-0 z-20 bg-base100 px-4 pt-3">
                      <HeaderUserControls buttonArray={buttonArray} />
                      <div className=" flex justify-between items-center  right-0 z-20 bg-base100 px-4 mt-1 pr-15 pb-1 ">
                                <p className='font-semibold text-base text-black'>100 users found</p>

                                <div className='flex items-center gap-4'>
                                    <div className="bg-gray-100 flex items-center gap-3 m-2 pl-1 py-1 rounded-full">
                                        <div className='text-[12px] rounded-full'>
                                        <SlidersHorizontal className="  cursor-pointer text-gray-400 mr-2" />
                                        </div>
                                        <div className='bg-orange rounded-full p-1'>
                                        <List className=" text-[12px] cursor-pointer text-base100" />
                                        </div>
                                    </div>
                                    <button className='cursor-pointer items-center  px-4 py-1.5 text-sm rounded-sm border bg-orange text-white border-orange'> + Add user</button>
                                </div>

                      </div>
                      <div className="grid grid-cols-[1.5fr_1fr_2.5fr_1.5fr_1.5fr_1fr] gap-3 bg-base100 px-4 mt-1 pr-15">
                           {tableContent.tableHeaders.map((header, index) => (
                              <UserHeaderBtn value={header} key={index} />
                        ))}
                      </div>

                      {/* <div className=' bg-base100  flex justify-between items-center gap-3 right-0 z-20 px-4 mt-1 pr-15' >
                            {tableContent.tableHeaders.map((header, index) => (
                                <FilterButton value={header} key={index}/>
                            ))}

                       </div> */}
                    </div>


                    <div className="overflow-y-auto h-full px-8 pr-15">
                      <UsersRows users={paginatedData} />
                    </div>

                    <div className="fixed bottom-0 left-[18rem] right-0 z-20 bg-base100 pr-4 py-2">
                      <CoursesFooter data={data} />
                    </div>
    </div>
  )
}
export default function UserPageContentWrapper() {
  return (
    <Suspense fallback={
            <div className="flex items-center justify-center h-full">
              <div className="loading loading-spinner loading-lg text-gray-900"></div>
            </div>
    }>
        <UserPageContent />
    </Suspense>
  );
}