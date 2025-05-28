import React from 'react'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'
export default function NavListItems({data}) {


    const {href,label,quantity,Icon, isActive,navType} = data

  return (
    <li key={href} className={`${isActive ? "border-r-orange border-r-4 rounded-xl": ""} w-[15rem]  `}>
              <Link
                href={href}
                className={`flex items-center justify-between gap-3 pl-6 py-3 text-base font-medium transition-all rounded-sm ${
                  isActive ? "bg-gray-50 text-gray-800" : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                }`}
              >

                <div className="flex gap-3">
                <Icon className={`w-6 h-6 transition-all ${isActive ? "text-orange" : "text-gray-400 group-hover:text-brand-600"}`} />
                <p>{label}</p>
                </div>

                {navType === "up" ? <div className=" flex gap-2 items-center">
                      <span>{quantity}</span>
                      <IoIosArrowForward className="ml-auto w-4 h-4" />
                </div>: <div></div>}

              </Link>
            </li>
  )
}
