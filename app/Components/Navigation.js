"use client";

import { MdDashboard, MdMiscellaneousServices, MdContactMail, MdBusiness } from 'react-icons/md';
import { HiOutlineUsers, HiOutlineCalendarDays } from 'react-icons/hi2';
import { FaBookOpen, FaUserCircle, FaBuilding } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FiSettings, FiLogOut } from 'react-icons/fi';
import { usePathname } from "next/navigation";
import NavListItems from "./NavListItems";
import useToggleAsideContext from '../Contexts/asideContext/useToggleAsideContext';

export default function Navigation() {
  const pathname = usePathname();
  const {toggleHamburger, open} = useToggleAsideContext();

  const navItems = [
    {navType:"up",label:"Dashboard",icon:MdDashboard, quantity:"0",href:"/dashboard"},
    {navType:"up",label:"Calendar",icon:HiOutlineCalendarDays, quantity:"0",href:"/calendar"},
    {navType:"up",label:"Courses",icon:FaBookOpen, quantity:"0",href:"/courses"},
    {navType:"up",label:"Services",icon:MdMiscellaneousServices, quantity:"0",href:"/services"},
    {navType:"up",label:"Users",icon:HiOutlineUsers, quantity:"0",href:"/users"},
    {navType:"up",label:"Profile",icon:CgProfile, quantity:"0",href:"/profile"},
    {navType:"up",label:"Contact",icon:MdContactMail, quantity:"0",href:"/contact"},
    {navType:"up",label:"Organisation",icon:MdBusiness, quantity:"0",href:"/organisation"},
  ];

const downItems = [
   {label:"settings",icon:FiSettings, quantity:"0",href:"/settings"},
    {label:"Logout",icon:FiLogOut, quantity:"0",href:"/logout"},
]

  return (
    // ${ open  ? " w-[calc(100% -15rem)] 2xl:w-[calc(100% -18rem)]" : "w-[calc(100% - 2.5rem)]" }
    // <nav className={`flex fixed left-0 top-0 flex-col h-screen shadow-md  bg-base100 z-20 pl-0 lg:pl-2 lg:pr-3 w-full mt-1 ml-1 ${ open  ? " w-[calc(100% -15rem)] 2xl:w-[calc(100% -18rem)]" : "w-[calc(100% - 2.5rem)]" }`}>
    <nav className={`flex fixed left-0 top-0 flex-col h-screen shadow-md  bg-base100 z-20 pl-2 lg:pr-3 mt-1 ${ open  ? " w-[15rem] 2xl:w-[18rem]" : "w-2.5rem" }`}>
      {/* LOGO */}
      <div className="relative ">
        <div className="fixed top-0 flex items-center gap-2 text-black  p-3 pl-2 lg:pl-3" >
          <FaBuilding className={`w-6 h-6 transition-all ml-2`}/>
          { open && <h2 className="text-[30px] font-medium text-black font-dm-sans" >IDEANEST</h2>}
          <div className={`${open ? "lg:ml-3.5 2xl:ml-20":"ml-[-4px]"} w-8 h-8 flex items-center justify-center rounded-full border border-orange`} onClick={toggleHamburger}>{open ? <IoIosArrowBack/>: <IoIosArrowForward/>}</div>
        </div>

     </div>

      {/* Middle Part */}
      <div >
        <div className="py-8"></div>
        <ul className="px-2 ">
          {navItems.map(({href, label, quantity, icon: Icon}) => {
            const isActive = pathname === href;
            const data ={href,label,quantity,Icon,isActive}
            return (
              <NavListItems key={label} data={data}/>
            );
          })
          }
        </ul>
      </div>

      {/* Down Part */}
      <ul className="absolute bottom-0 w-full px-2">
        {downItems.map(({href, label, quantity, icon: Icon}) => {
          const isActive = pathname === href;
           const data ={href,label,quantity,Icon,isActive}

          return (
             <NavListItems key={label} data={data}/>

          );
        })}
      </ul>
    </nav>
  );
}
