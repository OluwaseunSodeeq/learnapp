"use client";
import { createContext, useEffect, useState } from 'react';

export const ToggleAsideContextData = createContext();

export function ToggleAsideContextProvider({ children }) {
  const [open, setOpen] = useState(false);

   useEffect(()=>
    {
        if (typeof window !== undefined){
            const screenWidth = window.innerWidth;
            setOpen(screenWidth > 768)
        }
    } ,[]);

  const toggleHamburger = () => setOpen(prev => !prev);

  return (
    <ToggleAsideContextData.Provider value={{ open, toggleHamburger }}>
      {children}
    </ToggleAsideContextData.Provider>
  );
}
