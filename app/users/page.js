"use client";

import { Suspense } from "react";
import PaginatedUsers from "../Components/PaginatedUser";

export default  function Page(){
    return (
      <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
       <PaginatedUsers/>
      </Suspense>
    )
}