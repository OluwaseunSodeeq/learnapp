"use client"
import React from 'react'
import { HiArrowUp, HiArrowDown } from "react-icons/hi";
import useToggleAsideContext from '../Contexts/asideContext/useToggleAsideContext';



export default function InfoCards() {
    const cards = [
        {title:"New students",value:"658",icon:HiArrowUp,percent:"10.5",text:"last period"},
        {title:"Average hours",value:"8h 30min",icon:HiArrowDown,percent:"2.7",text:"last period"},
        {title:"Active courses",value:"2,456",icon:HiArrowDown,percent:"1.5",text:"last period"},
        {title:"Completed",value:"90%",icon:HiArrowUp,percent:"6.1",text:"last period"},
    ]
    const {open} =  useToggleAsideContext();
  return (
    <div className={`relative w-[40rem] md:w-full flex flex-wrap lg:justify-between items-center  gap-2 md:gap-3 lg:gap-2  h-auto lg:pl-0 ${open ?"pl-5":" pl-5 md:pl-10"}`}>{cards.map(({title,value,icon:Icon,percent,text})=>{

        return (
         <div key={title} className='w-[272px] lg:w-[250px] shadow-2xl bg-base100  px-3 pt-1 pb-1 xl:py-2.5 rounded-[6px] cursor-pointer'>
            <p className='text-light-ash text-base font-medium'>{title}</p>
            <div className='flex items-center justify-between xl:gap-8'>

                <p className='font-bold text-black lg:text-base text-nowrap xl:text-2xl'>{value}</p>

                <div className='flex flex-col'>
                    <div className='text-orange text-base flex items-center'>
                        <Icon/>
                        <span >{percent} %</span>
                    </div>
                    <p className='text-light-ash text-[18px] text-nowrap'>{text}</p>
                </div>

            </div>
        </div>)
    })}</div>
  )
}
