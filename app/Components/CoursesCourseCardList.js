import React from 'react'
// import Image from "next/image";
import CoursesCourseCard from './CoursesCourseCard';




export default function CoursesCourseCardList({courses}) {
    
  // CRACY SHORTCODE: Generates a list of courses with random data
    //     const courses = Array.from({ length: 50 }, (_, i) => ({
        //   id: i + 1,
        //   courseImage: `https://source.unsplash.com/random/300x200?sig=${i + 1}&education`,
        //   facilitator: [
            //     "Jane Doe", "John Smith", "Amara Peters", "Luis Gray", "Tolu Ayeni", "Eric Yuan",
            //     "Nia Roberts", "Emma Okafor", "Chen Wei", "Samantha James", "Damilola Bello",
            //     "Khalid Aminu", "Grace Kim", "Fiona Udoh", "Joshua Obi", "Liam Ade", "Sophia Wong"
            //   ][Math.floor(Math.random() * 17)],
            //   numberOfQuiz: Math.floor(Math.random() * 31) + 20,      // 20 to 50
            //   numberOfLectures: Math.floor(Math.random() * 21) + 10   // 10 to 30
//    }));
  
  return (
    <div className="relative py-7 lg:p-7 bg-base100 flex justify-between flex-wrap gap-2 lg:gap-3 place-items-center">
      {courses.map((course,index) => <CoursesCourseCard course={course} key={index}/>
      )}
    </div>
  );
}





