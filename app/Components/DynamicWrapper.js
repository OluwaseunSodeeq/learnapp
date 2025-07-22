"use client";
import React from 'react'
import useToggleAsideContext from '../Contexts/asideContext/useToggleAsideContext';

export default function DynamicWrapper({children}) {

    const{open} = useToggleAsideContext();
  return (

    // <div className={`relative h-auto ${open ? "w-[calc(100%-15rem)] ml-[15rem] 2xl:ml-[18rem] 2xl:w-[calc(100%-18rem)] mx-auto" : " md:w-[47rem] mx-auto lg:w-[1100px]"}`} >
    <div className={`relative h-auto ${open ? "w-[calc(100%-15rem)] ml-[15rem] 2xl:ml-[18rem] 2xl:w-[calc(100%-18rem)] mx-auto" : " md:w-[47rem] mx-auto lg:w-[1100px]"}`}>
      {children}
    </div>
  )
}

