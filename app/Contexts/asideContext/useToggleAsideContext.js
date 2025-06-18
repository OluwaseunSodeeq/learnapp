"use client";
import { useContext } from "react";
import { ToggleAsideContextData } from "./ToggleAsideContext";

function useToggleAsideContext() {
  const context = useContext(ToggleAsideContextData);
  if (context === undefined)
    throw new Error("useToggleAsideContext must be used within a ToggleAsideContextProvider");
  return context;
}

export default useToggleAsideContext;

