"use client";
import { Suspense } from "react";
import UserPageContentWrapper from "../Components/UserPageContent";


export default  function Page(){
    return (
        <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
             <UserPageContentWrapper/>
        </Suspense>
    )
}
