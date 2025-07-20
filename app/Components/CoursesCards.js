'use client'
import React, { useState } from 'react'
import CourseCard from './DashboardCourseCard'
import { courses } from '../Data/courses';
import useToggleAsideContext from '../Contexts/asideContext/useToggleAsideContext';



 

export default function CoursesCards() {
    const {open} =  useToggleAsideContext();
    const [view, setView] = useState(false);
    const [showAll, setShowAll] = useState(false);
    const viewAllHandler = () => setShowAll(!showAll);
    const bookmarkHandler = () => setView(!view);
    const coursesToShow = showAll? courses :courses.slice(0,2);


    return (
        <div className={`relative w-[40rem] md:w-full lg:w-[60.5%] pr-5  h-auto lg:p-0  ${open ?"pl-5":" pl-5 md:pl-10"}`}>
            <div className={`relative w-full overflow-hidden bg-base100 h-full bg-base-100 rounded-md`} >
               {/* Header */}
            <div className="flex justify-between items-center m-3 px-3">
                <h2 className="font-semibold text-lg text-gray-800">My courses</h2>
                <button className="text-orange text-sm font-medium hover:underline" onClick={viewAllHandler}>
                View All
                </button>
            </div>

            <div className='flex flex-col gap-2 p-3'>
               {coursesToShow.map((course) => (
                <CourseCard course={course} bookmarkHandler={bookmarkHandler} key={course.courseName} />
                ))
            }
            </div>
        </div>
        </div>

    )


}
