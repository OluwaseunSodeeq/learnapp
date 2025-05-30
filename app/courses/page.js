"use client";

import { Suspense } from "react";
import PaginatedCourses from "../Components/PaginatedCourses";

export default function Page() {

  return (
    <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
      <PaginatedCourses />
    </Suspense>
  );
}
