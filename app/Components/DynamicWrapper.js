"use client";
import React from 'react'
import useToggleAsideContext from '../Contexts/asideContext/useToggleAsideContext';

export default function DynamicWrapper({children}) {
    const{open} = useToggleAsideContext();
  return (
    <div className={`${open ? "w-[calc(100%-15rem)] ml-[15rem] 2xl:ml-[18rem] 2xl:w-[calc(100%-18rem)]" : "w-[1100px] mx-auto"}`} >{children}</div>
  )
}
