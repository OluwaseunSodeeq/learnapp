"use client";

import Link from "next/link";
import { MdDashboard, MdMiscellaneousServices, MdContactMail, MdBusiness } from 'react-icons/md';
import { HiOutlineUsers, HiOutlineCalendarDays } from 'react-icons/hi2';
import { FaBookOpen, FaUserCircle, FaBuilding } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { IoIosArrowBack } from 'react-icons/io';
import { FiSettings, FiLogOut } from 'react-icons/fi';
import { usePathname } from "next/navigation";
import NavListItems from "./NavListItems";

export default function Navigation() {
  const pathname = usePathname();

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

const downItems=[
   {label:"settings",icon:FiSettings, quantity:"0",href:"/settings"},
    {label:"Logout",icon:FiLogOut, quantity:"0",href:"/logout"},
]
  return (
    <nav className="flex flex-col h-screen  bg-white ">
      {/* LOGO */}
      <div className=" border relative flex justify-around items-center gap-5 text-black p-3" >
        <FaBuilding className={`w-6 h-6 transition-all`}/>
         <h2 className="text-[30px] font-medium text-black font-dm-sans" >IDEANEST</h2> 
         <span className={`w-8 h-8 absolute  flex items-center justify-center top-5 right-[-15px] rounded-full border border-orange`}><IoIosArrowBack/></span>
      </div>

      {/* Middle Part */}
      <div >
      <div className="py-5"></div>
      <ul>
        {navItems.map(({href, label, quantity, icon: Icon}) => {
          const isActive = pathname === href;
           const data ={href,label,quantity,Icon,isActive}
          return (
            <NavListItems key={label} data={data}/>
          );
        })}
      </ul>
      </div>
      {/* Down Part */}
      <ul className="absolute bottom-0 w-full">
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
