"use client"

import React from 'react'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'
// import { IoIosArrowDropdown, IoIosArrowForward } from 'react-icons/io'
import useToggleAsideContext from '../Contexts/asideContext/useToggleAsideContext';

export default function NavListItems({data}) {

  const {open} = useToggleAsideContext();
  const {href,label,quantity,Icon, isActive,navType} = data

  return (
    <li key={href} className={`${isActive ? "border-r-orange ": ""} ${open ? "w-[98%] rounded-xl": "w-[2.5rem] rounded-sm py-0 "} ${isActive && open ?" lg:border-r-4 " : " border-r-0"}`}>
              <Link
                href={href}
                className={ `flex gap-3 items-center ${open ? " justify-between": "justify-center"}  lg:pl-2 py-3 text-base font-medium transition-all rounded-sm ${
                  isActive ? "bg-gray-50 text-gray-800" : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                }`}
              >

                <div className={`${open ? "flex gap-3":"ml-1.5"}`}>
                  <Icon className={`w-6 h-6 transition-all ${isActive ? "text-orange" : "text-gray-400 group-hover:text-brand-600"}`} />

                  {open && <p>{label}</p>}
                </div>

                {open &&
                <div>
                  {navType === "up" ?
                      <div className="flex gap-2 items-center">
                        <span>{quantity}</span>
                        <IoIosArrowForward className="ml-auto w-4 h-4" />
                      </div>:
                      <div>
                        {/* <IoIosArrowDropdown /> */}
                        </div>}
                </div>

                }
              </Link>
            </li>
  )
}
