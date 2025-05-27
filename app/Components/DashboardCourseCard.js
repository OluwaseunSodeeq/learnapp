// components/UICourseCard.jsx

// import { AiBookMark } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { BsBookmark } from "react-icons/bs";
import Image from "next/image";

export default function DashboardCourseCard({course,bookmarkHandler}) {

    const { courseName, facilitator, startDate, level, description, rate,bookmark,studentStack } = course;
  return (
    <div className="relative flex   bg-base100 rounded-xl shadow-md border-gray-300 border" >

      {/* Icons at top-right */}
      <div className="absolute top-3 right-3 flex items-center space-x-2 text-gray-500">
       <BsBookmark className={`text-lg cursor-pointer ${bookmark ? 'text-yellow-300' : 'text-gray-500'}`} onClick={bookmarkHandler} />
        <HiOutlineDotsHorizontal className="text-xl cursor-pointer text-gray-500 rotate-90 " />
      </div>

      {/* Image */}
      <Image
        className="w-1/4 object-cover"
        src="/one.png"
        alt="Course thumbnail"
        width={100}
        height={100}
      />

      {/* Content */}
      <div className="p-4 flex flex-col justify-between w-3/4">
        <div>

          <h2 className="text-lg font-semibold text-black">
            {courseName}
          </h2>
          <p className="text-sm text-gray-500">By {facilitator}</p>

        </div>

        <p className="text-sm text-gray-600 my-2">
         {description.length > 100 ? description.slice(0, 100) + '...' : description}
        </p>

        <div className="flex justify-between items-center mt-2">
        <div className="flex gap-2 text-xs text-gray-700 ">
          <span className="bg-base1000 px-3 py-1 rounded-full border-gray-300 border">{startDate}</span>
          <span className="bg-base1000 px-3 py-1 rounded-full border-gray-300 border">Level: {level}</span>
          <span className="bg-base1000 px-3 py-1 rounded-full border-gray-300 border">Type: {studentStack}</span>
        </div>

        <div className="flex items-center">
          <AiFillStar className="text-yellow-400 text-base mr-1" />
          <span className="text-sm font-medium text-gray-800">{rate}.0</span>
        </div>
        </div>
      </div>
    </div>
  );
}
