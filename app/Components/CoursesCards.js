'use client'
import React, { useState } from 'react'
import CourseCard from './DashboardCourseCard'
import { courses } from '../Data/courses';



 

export default function CoursesCards() {
    const [view, setView] = useState(false);
    const [showAll, setShowAll] = useState(false);
    const viewAllHandler = () => setShowAll(!showAll);
    const bookmarkHandler = () => setView(!view);
    const coursesToShow = showAll? courses :courses.slice(0,2);


    return (
        <div className='lg:w-[60.5%] shadow-xl/30 rounded-md'>
            <div className={`relative w-full overflow-hidden bg-base100 h-full bg-base-100 rounded-md`} >
            {/* <div className={`w-full flex flex-col gap-2 bg-base100 shadow-md`} > */}
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
