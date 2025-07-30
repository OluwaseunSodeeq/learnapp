"use client";
import { createContext, useEffect, useState } from 'react';

export const ToggleAsideContextData = createContext();

export function ToggleAsideContextProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const mobileBreakpoint = 480;
  const tabletBreakpoint = 768;
  const [screensize, setScreensize] = useState(0);

  // This use Effect is for Aside Component Toggling
   useEffect(()=>
    {
        if (typeof window !== undefined){
            const screenWidth = window.innerWidth;
            setScreensize(screenWidth);
            setOpen(screenWidth > tabletBreakpoint);
        }
    } ,[]);

     useEffect(()=>
    {
        if (typeof window !== undefined){
            const screenWidth = window.innerWidth;
            setMobileView(screenWidth > 768)
        }
    } ,[]);
  const toggleHamburger = () => setOpen(prev => !prev);

  return (
    <ToggleAsideContextData.Provider value={{ open, toggleHamburger,mobileView,mobileBreakpoint,tabletBreakpoint,screensize }}>
      {children}
    </ToggleAsideContextData.Provider>
  );
}
