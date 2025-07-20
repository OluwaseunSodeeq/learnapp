'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import useToggleAsideContext from '../Contexts/asideContext/useToggleAsideContext';
import { IoIosArrowDown } from 'react-icons/io';
import { HiOutlineEnvelope, HiOutlineBell } from 'react-icons/hi2';

export default function Header() {
  const imageUrl = '/image.png';
  const pathname = usePathname();
  const currentPage = pathname?.split('/').filter(Boolean).pop() || 'Dashboard';
  const formattedPage = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);
  const {open}  = useToggleAsideContext();
  const [mobileView,setMobileView] = useState(false);
  useEffect(()=>
      {
          if (typeof window !== undefined){
              const screenWidth = window.innerWidth;
              setMobileView(screenWidth > 769)
          }
      } ,[]
  );
  return(

    // <header className={`flex items-center justify-between px-4 pb-2 border-r-amber-700 w-full`}>
    <header className={`flex items-center justify-between px-4 pb-2 border-r-amber-700 ${open ? "w-[calc(100%-15rem)] ml-[15rem] 2xl:ml-[18rem] 2xl:w-[calc(100%-18rem)]" : "w-[calc(100%-2.5rem)] ml-[4rem]"}`}>
      <h1 className={`text-black font-bold text-3xl md:ml-3 ${mobileView ? "ml-3":"ml-1"}`}>{formattedPage}</h1>

      <div className="flex items-center gap-4 mr-1 2xl:mr-20">
        <div className={`flex gap-2 md:flex-row  ${mobileView ? 'flex-row' : 'flex-col'}`}>

        <HiOutlineBell className="text-light-ash w-4 h-4" />
        <HiOutlineEnvelope className="text-light-ash w-4 h-4" />

        </div>

        {mobileView && <div className={`flex flex-col text-right gap-1 mr-2">`}>
          <span className='font-bold text-orange text-l'>Oluwaseun Sodeeq</span>
          <span className="text-sm text-gray-400">Customer</span>
        </div>}

        <div className="relative w-[30px] h-[30px] lg:w-[34px] lg:h-[34px]">
          <Image
            src={imageUrl}
            alt="User"
            fill
            sizes="(max-width: 1024px) 30px, 34px"
            className="rounded-full object-cover"
          />
        </div>

       <IoIosArrowDown className="text-orange w-4 h-4" />
      </div>
    </header>
  )

}