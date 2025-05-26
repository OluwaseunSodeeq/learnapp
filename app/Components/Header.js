'use client';

import Image from 'next/image';
import {  usePathname } from 'next/navigation';
import React from 'react';
import { IoIosArrowDown, IoIosArrowDropdown } from 'react-icons/io';
import { HiOutlineEnvelope, HiOutlineBell } from 'react-icons/hi2';

export default function Header() {
  const pathname = usePathname();
  const currentPage = pathname?.split('/').filter(Boolean).pop() || 'Dashboard';
  const formattedPage = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);


  return (
    <header className="flex items-center px-4 py-2">
      <h1 className='text-black font-bold text-3xl'>{formattedPage}</h1>

      <div className="flex items-center gap-4 ml-auto pr-5">
        <HiOutlineBell className="text-light-ash w-4 h-4" />
        <HiOutlineEnvelope className="text-light-ash w-4 h-4" />

        <div className="flex flex-col text-right">
          <span className='font-bold text-orange text-l'>Oluwaseun Sodeeq</span>
          <span className="text-sm text-gray-400">Customer</span>
        </div>

        <Image
          src="/image.png"
          alt="user"
          width={34}
          height={34}
          className="rounded-full"
        />

        <IoIosArrowDown className="text-orange w-4 h-4" />
      </div>
    </header>
  );
}
