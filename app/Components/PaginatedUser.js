"use client";
import { Suspense } from "react";
import HeaderUserControls from "./HeaderControlsSecond";
import UsersCards from "./ProfileCards";
import CoursesFooter from "./CoursesFooter";
import usePagination from "./usePagination";
import useToggleAsideContext from "../Contexts/asideContext/useToggleAsideContext";




const usersData=[
    {
    name: "Oluwaseun Sodeeq",
    email: "ade@hotmail.com",
    registrationDate: "2023-10-13",
    role: "student",
    lastActivityDate: "2025-05-22"
  },
  {
    name: "John Hoffman",
    email: "vanessastewart@hotmail.com",
    registrationDate: "2023-10-13",
    role: "student",
    lastActivityDate: "2025-05-22"
  },
  {
    name: "Shannon Peters",
    email: "mark69@beltran.net",
    registrationDate: "2023-11-16",
    role: "student",
    lastActivityDate: "2025-05-11"
  },
  {
    name: "Tyler Gonzalez",
    email: "edward14@yahoo.com",
    registrationDate: "2023-11-21",
    role: "student",
    lastActivityDate: "2025-05-01"
  },
  {
    name: "Rebecca Oneal",
    email: "frances52@gmail.com",
    registrationDate: "2024-02-03",
    role: "manager",
    lastActivityDate: "2025-05-10"
  },
  {
    name: "Kathleen Kim",
    email: "williamcochran@wong.net",
    registrationDate: "2023-10-05",
    role: "student",
    lastActivityDate: "2025-04-30"
  },
   {
    name: "Oluwaseun Sodeeq",
    email: "ade@hotmail.com",
    registrationDate: "2023-10-13",
    role: "student",
    lastActivityDate: "2025-05-22"
  },
  {
    name: "John Hoffman",
    email: "vanessastewart@hotmail.com",
    registrationDate: "2023-10-13",
    role: "student",
    lastActivityDate: "2025-05-22"
  },
  {
    name: "Shannon Peters",
    email: "mark69@beltran.net",
    registrationDate: "2023-11-16",
    role: "student",
    lastActivityDate: "2025-05-11"
  },
  {
    name: "Tyler Gonzalez",
    email: "edward14@yahoo.com",
    registrationDate: "2023-11-21",
    role: "student",
    lastActivityDate: "2025-05-01"
  },
  {
    name: "Rebecca Oneal",
    email: "frances52@gmail.com",
    registrationDate: "2024-02-03",
    role: "manager",
    lastActivityDate: "2025-05-10"
  },
  {
    name: "Kathleen Kim",
    email: "williamcochran@wong.net",
    registrationDate: "2023-10-05",
    role: "student",
    lastActivityDate: "2025-04-30"
  },
   {
    name: "Oluwaseun Sodeeq",
    email: "ade@hotmail.com",
    registrationDate: "2023-10-13",
    role: "student",
    lastActivityDate: "2025-05-22"
  },
  {
    name: "John Hoffman",
    email: "vanessastewart@hotmail.com",
    registrationDate: "2023-10-13",
    role: "student",
    lastActivityDate: "2025-05-22"
  },
  {
    name: "Shannon Peters",
    email: "mark69@beltran.net",
    registrationDate: "2023-11-16",
    role: "student",
    lastActivityDate: "2025-05-11"
  },
  {
    name: "Tyler Gonzalez",
    email: "edward14@yahoo.com",
    registrationDate: "2023-11-21",
    role: "student",
    lastActivityDate: "2025-05-01"
  },
  {
    name: "Rebecca Oneal",
    email: "frances52@gmail.com",
    registrationDate: "2024-02-03",
    role: "manager",
    lastActivityDate: "2025-05-10"
  },
  {
    name: "Kathleen Kim",
    email: "williamcochran@wong.net",
    registrationDate: "2023-10-05",
    role: "student",
    lastActivityDate: "2025-04-30"
  },
]

function PaginatedUserContents(){
      // const pageSize = 9;
      const {mobileView, mobileBreakpoint,tabletBreakpoint} = useToggleAsideContext();
      const  pageSize = mobileView ? 7 :  tabletBreakpoint > mobileBreakpoint ? 12 : 5;

      const { previousPage, nextPage, updatePage, currentPage, totalPages, paginatedData } = usePagination({ inputData: usersData, pageSize });
      const data = {previousPage, nextPage, updatePage, currentPage, totalPages, paginatedData }
      const buttonArray = ["User's Role","Date of Registration","Last Activity Done"]

        return (
           <div className="relative h-full  pt-[3.5rem] pb-[4rem]">
                 <div className="fixed top-[4rem] left-[18rem] right-0 z-20 bg-base100 px-4 pt-2">
                   <HeaderUserControls buttonArray={buttonArray} />
                 </div>

                 <div className="overflow-y-auto h-full">
                   <UsersCards users={paginatedData} />
                 </div>

                 <div className="fixed w-full bottom-0 lg:left-[16rem] z-20 bg-base100">
                   <CoursesFooter data={data} />
                 </div>
               </div>
        )
    }

export default function PaginatedUsers() {
  return (
    <Suspense fallback={
            <div className="flex items-center justify-center h-full">
              <div className="loading loading-spinner loading-lg text-gray-900"></div>
            </div>
    }>
        <PaginatedUserContents />
    </Suspense>
  );
}