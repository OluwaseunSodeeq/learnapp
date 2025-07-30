"use client";

import { Suspense } from "react";
import HeaderControls from "./HeaderControls";
import CoursesCourseCardList from "./CoursesCourseCardList";
import CoursesFooter from "./CoursesFooter";
import usePagination from "./usePagination";
import Wrapper from "./Wrapper";
import useToggleAsideContext from "../Contexts/asideContext/useToggleAsideContext";

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
  
   const {mobileView, mobileBreakpoint,tabletBreakpoint} = useToggleAsideContext();
   const  pageSize = mobileView ? 9 :  tabletBreakpoint > mobileBreakpoint ? 8 : 5;
   const { previousPage, nextPage, updatePage, currentPage, totalPages, paginatedData } = usePagination({ inputData: courses, pageSize });
   const data ={previousPage, nextPage,updatePage,currentPage,totalPages,paginatedData,}


   console.log("Tablet size:", mobileView );
   console.log( "Mobile:", mobileBreakpoint);
   return(
    <Wrapper>
    <div >
      <div className={`sticky top-[-16px] w-full md:left-[5rem]  right-0 z-10 bg-base100 px-4  `}>
        <HeaderControls />
      </div>

      <div className="relative overflow-y-auto w-full h-full ">
        <CoursesCourseCardList courses={paginatedData} />
      </div>

      <div className="sticky bottom-[-20px] w-full left-[18rem] right-0 bg-base100 md:px-8 lg:px-6 pt-3 pb-2">
        <CoursesFooter data={data} />
      </div>
    </div>
    </Wrapper>
   )

}

export default function PaginatedCourses() {
  return (
    <Suspense fallback={
            <div className={`relative w-full flex items-center justify-center h-full`}>
              <div className="loading loading-spinner loading-lg text-gray-900"></div>
            </div>
    }>
        <PaginatedCoursesContents/>
    </Suspense>
  );
}