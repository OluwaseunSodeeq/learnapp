"use client"
import React from 'react'
import useToggleAsideContext from '../Contexts/asideContext/useToggleAsideContext';

export default function Wrapper({children}) {
    const {open} = useToggleAsideContext();
  return (
          <div className={`relative z-0 w-[40rem] lg:w-full h-full lg:left-0 ${open ? "md:left-[0rem] " : "left-[2rem] md:left-[5rem]"} `}>{children}</div>

  )
}
