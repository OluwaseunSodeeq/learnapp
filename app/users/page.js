"use client";

import CoursesFooter from "../Components/CoursesFooter";
import HeaderUserControls from "../Components/HeaderUserControls";
import usePagination from "../Components/usePagination";
import UsersCards from "../Components/UsersCards";

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


export default  function Page(){

       const pageSize = 12;
       const {previousPage,nextPage, updatePage,currentPage,totalPages} = usePagination({ count: usersData.length, pageSize });
       const startIndex = (currentPage - 1) * pageSize;
       const paginatedUsersData = usersData.slice(startIndex, startIndex + pageSize);
       const data ={previousPage, nextPage, updatePage, currentPage,totalPages }
       

    return (
       <div className="relative h-full pt-[3.5rem] pb-[4rem]">
             <div className="fixed top-[4rem] left-[18rem] right-0 z-20 bg-base100 px-4 pt-2">
               <HeaderUserControls />
             </div>

             <div className="overflow-y-auto h-full">
               <UsersCards users={paginatedUsersData} />
             </div>

             <div className="fixed bottom-0 left-[18rem] right-0 z-20 bg-base100 px-4 py-2">
               <CoursesFooter data={data} />
             </div>
           </div>
    )
}