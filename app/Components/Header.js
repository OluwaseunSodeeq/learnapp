'use client';

import Image from 'next/image';
import {  usePathname } from 'next/navigation';
import React from 'react';
import { IoIosArrowDown, IoIosArrowDropdown } from 'react-icons/io';
import { HiOutlineEnvelope, HiOutlineBell } from 'react-icons/hi2';

export default function Header() {
  const imageUrl = '/image.png'; 
  const pathname = usePathname();
  const currentPage = pathname?.split('/').filter(Boolean).pop() || 'Dashboard';
  const formattedPage = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);

  return (
    // <header className="ml-[15rem] xl:ml-[18rem] w-full fixed lg:w-[100%-15rem] xl:w-[100%-18rem]left-0 top-0 flex items-center px-4 py-2 border-2">
    <header className="flex items-center justify-between px-4  pb-2 border-r-amber-700">
      <h1 className='text-black font-bold text-3xl ml-3 xl:ml-3 2xl:ml-15  '>{formattedPage}</h1>

      <div className="flex items-center gap-4 mr-1 2xl:mr-20 ">
        <HiOutlineBell className="text-light-ash w-4 h-4" />
        <HiOutlineEnvelope className="text-light-ash w-4 h-4" />

        <div className="flex flex-col text-right">
          <span className='font-bold text-orange text-l'>Oluwaseun Sodeeq</span>
          <span className="text-sm text-gray-400">Customer</span>
        </div>

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
  );
}
