"use client";

import { Suspense } from "react";
import PaginatedCourses from "../Components/PaginatedCourses";
import DynamicWrapper from "../Components/DynamicWrapper";

export default function Page() {

  return (
    <DynamicWrapper>
    <Suspense fallback={<div className="relative flex w-full justify-center items-center h-screen">Loading...</div>}>
      <PaginatedCourses />
    </Suspense>
    </DynamicWrapper>
  );
}
