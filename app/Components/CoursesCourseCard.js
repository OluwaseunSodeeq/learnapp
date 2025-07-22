import { FaStar, FaEllipsisV } from "react-icons/fa";
import Image from 'next/image';
import React from 'react'


export default function CoursesCourseCard({course}) {

  const { courseImage, facilitator, numberOfQuiz, numberOfLectures } = course;
  
  return (
    <div className="w-[300px] lg:w-[320px] bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.1)] overflow-hidden font-sans ">
      {/* Course Image */}
      <div className="px-4 ">
       <Image
        src={courseImage}
        alt="Course thumbnail"
        width={300}
        height={180}
        style={{ width: '100%', height: 'auto' }}
        className="rounded-sm object-cover"
      />
      </div>


      {/* Course Details */}
      <div className="p-4">
            <h2 className="text-[15px] font-semibold text-gray-900 leading-tight">
              Introduction of web UI
            </h2>
        <div className="flex justify-between items-start mb-2">
          <p className="text-xs text-gray-500 mt-1">By {facilitator}</p>
          <div className="flex flex-wrap gap-2 text-[11px] mt-2 text-gray-600">
          <span>{numberOfLectures} Lectures</span>
          <span>{numberOfQuiz} Quiz</span>
        </div>
          {/* <div className="flex items-center gap-2 text-gray-400 text-sm">
            <FaStar className="text-yellow-400" />
            <FaEllipsisV />
          </div> */}
        </div>
      </div>
    </div>
  );
}
