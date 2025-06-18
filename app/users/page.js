"use client";
import { Suspense } from "react";
import UserPageContentWrapper from "../Components/UserPageContent";
import DynamicWrapper from "../Components/DynamicWrapper";


export default  function Page(){
    return (
        <DynamicWrapper>
        <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
             <UserPageContentWrapper/>
        </Suspense>
        </DynamicWrapper>
    )
}
