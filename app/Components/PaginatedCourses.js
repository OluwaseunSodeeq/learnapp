"use client";

import { Suspense } from "react";
import HeaderControls from "./HeaderControls";
import CoursesCourseCardList from "./CoursesCourseCardList";
import CoursesFooter from "./CoursesFooter";
import usePagination from "./usePagination";

const courses = [
  {
    courseImage: "/image.png",
    facilitator: "Jon Pierson",
    numberOfQuiz: 25,
    numberOfLectures: 18
  },
  {
    courseImage: "/image.png",
    facilitator: "Kris Bannet",
    numberOfQuiz: 32,
    numberOfLectures: 24
  },
  {
    courseImage: "/image.png",
    facilitator: "Iren Man",
    numberOfQuiz: 46,
    numberOfLectures: 29
  },
  {
    courseImage: "/image.png",
    facilitator: "Emily Stone",
    numberOfQuiz: 22,
    numberOfLectures: 12
  },
  {
    courseImage: "/image.png",
    facilitator: "Liam Woods",
    numberOfQuiz: 50,
    numberOfLectures: 30
  },
  {
    courseImage: "/image.png",
    facilitator: "Chloe Tan",
    numberOfQuiz: 40,
    numberOfLectures: 25
  },
  {
    courseImage: "/image.png",
    facilitator: "Noah Carter",
    numberOfQuiz: 30,
    numberOfLectures: 15
  },
  {
    courseImage: "/image.png",
    facilitator: "Mia Zhang",
    numberOfQuiz: 35,
    numberOfLectures: 22
  },
  {
    courseImage: "/image.png",
    facilitator: "Ethan James",
    numberOfQuiz: 27,
    numberOfLectures: 18
  },
  {
    courseImage: "/image.png",
    facilitator: "Sophia Lee",
    numberOfQuiz: 42,
    numberOfLectures: 20
  },
  {
    courseImage: "/two.png",
    facilitator: "Jon Pierson",
    numberOfQuiz: 25,
    numberOfLectures: 18
  },
  {
    courseImage: "/two.png",
    facilitator: "Kris Bannet",
    numberOfQuiz: 32,
    numberOfLectures: 24
  },
  {
    courseImage: "/two.png",
    facilitator: "Iren Man",
    numberOfQuiz: 46,
    numberOfLectures: 29
  },
  {
    courseImage: "/two.png",
    facilitator: "Emily Stone",
    numberOfQuiz: 22,
    numberOfLectures: 12
  },
  {
    courseImage: "/two.png",
    facilitator: "Liam Woods",
    numberOfQuiz: 50,
    numberOfLectures: 30
  },
  {
    courseImage: "/two.png",
    facilitator: "Chloe Tan",
    numberOfQuiz: 40,
    numberOfLectures: 25
  },
  {
    courseImage: "/two.png",
    facilitator: "Noah Carter",
    numberOfQuiz: 30,
    numberOfLectures: 15
  },
  {
    courseImage: "/two.png",
    facilitator: "Mia Zhang",
    numberOfQuiz: 35,
    numberOfLectures: 22
  },
  {
    courseImage: "/two.png",
    facilitator: "Ethan James",
    numberOfQuiz: 27,
    numberOfLectures: 18
  },
  {
    courseImage: "/one.png",
    facilitator: "Sophia Lee",
    numberOfQuiz: 42,
    numberOfLectures: 20
  },
  {
    courseImage: "/one.png",
    facilitator: "Jon Pierson",
    numberOfQuiz: 25,
    numberOfLectures: 18
  },
  {
    courseImage: "/one.png",
    facilitator: "Kris Bannet",
    numberOfQuiz: 32,
    numberOfLectures: 24
  },
  {
    courseImage: "/one.png",
    facilitator: "Iren Man",
    numberOfQuiz: 46,
    numberOfLectures: 29
  },
  {
    courseImage: "/one.png",
    facilitator: "Emily Stone",
    numberOfQuiz: 22,
    numberOfLectures: 12
  },
  {
    courseImage: "/one.png",
    facilitator: "Liam Woods",
    numberOfQuiz: 50,
    numberOfLectures: 30
  },
  {
    courseImage: "/one.png",
    facilitator: "Chloe Tan",
    numberOfQuiz: 40,
    numberOfLectures: 25
  },
  {
    courseImage: "/one.png",
    facilitator: "Noah Carter",
    numberOfQuiz: 30,
    numberOfLectures: 15
  },
  {
    courseImage: "/one.png",
    facilitator: "Mia Zhang",
    numberOfQuiz: 35,
    numberOfLectures: 22
  },
  {
    courseImage: "/one.png",
    facilitator: "Ethan James",
    numberOfQuiz: 27,
    numberOfLectures: 18
  },
  {
    courseImage: "/one.png",
    facilitator: "Sophia Lee",
    numberOfQuiz: 42,
    numberOfLectures: 20
},
// ...
// Keep adding until you reach 50
];

function PaginatedCoursesContents(){

   const  pageSize = 9;
   const { previousPage, nextPage, updatePage, currentPage, totalPages, paginatedData } = usePagination({ inputData: courses, pageSize });
   const data ={previousPage, nextPage,updatePage,currentPage,totalPages,paginatedData,}

   return(

    <div className="relative h-full pt-[3.5rem] pb-[4rem]">
      <div className="fixed top-[4rem] left-[18rem] right-0 z-20 bg-base100 px-4 pt-2">
        <HeaderControls />
      </div>

      <div className="overflow-y-auto h-full">
        <CoursesCourseCardList courses={paginatedData} />
      </div>

      <div className="fixed bottom-0 left-[18rem] right-0 z-20 bg-base100 px-4 py-2">
        <CoursesFooter data={data} />
      </div>
    </div>
   )

}

export default function PaginatedCourses() {
  return (
    <Suspense fallback={
            <div className="flex items-center justify-center h-full">
              <div className="loading loading-spinner loading-lg text-gray-900"></div>
            </div>
    }>
        <PaginatedCoursesContents/>
    </Suspense>
  );
}