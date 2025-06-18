"use client";

import { Suspense } from "react";
import PaginatedUsers from "../Components/PaginatedUser";
import DynamicWrapper from "../Components/DynamicWrapper";

export default  function Page(){
    return (
      <DynamicWrapper>
      <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
       <PaginatedUsers/>
      </Suspense>
      </DynamicWrapper>
    )
}