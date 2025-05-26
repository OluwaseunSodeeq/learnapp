'use client'
import React, { useState } from 'react'
import CourseCard from './CourseCard'



 const courses = [
  {
    courseName: "React Essentials",
    facilitator: "Jane Doe",
    startDate: "2025-06-01",
    level: "Intermediate",
    description: "Learn the fundamentals of React, including hooks and component structure.",
    rate: 9,
    bookmark: true,
    studentStack: "Frontend"
  },
  {
    courseName: "Node.js & Express",
    facilitator: "John Smith",
    startDate: "2025-06-15",
    level: "Advanced",
    description: "Build scalable backend APIs using Node.js and Express framework.",
    rate: 8,
    bookmark: false,
    studentStack: "Backend"
  },
  {
    courseName: "Intro to HTML & CSS",
    facilitator: "Emily Green",
    startDate: "2025-06-10",
    level: "Beginner",
    description: "Understand the basics of building web pages with HTML and CSS.",
    rate: 7,
    bookmark: true,
    studentStack: "Frontend"
  },
  {
    courseName: "Full Stack Web Dev",
    facilitator: "Michael Lee",
    startDate: "2025-07-01",
    level: "Advanced",
    description: "Master both frontend and backend technologies to become a full stack dev.",
    rate: 10,
    bookmark: true,
    studentStack: "FullStack"
  },
  {
    courseName: "Docker & Kubernetes",
    facilitator: "Sophia White",
    startDate: "2025-07-10",
    level: "Advanced",
    description: "Learn containerization and orchestration using Docker and Kubernetes.",
    rate: 9,
    bookmark: false,
    studentStack: "DevOp"
  },
  {
    courseName: "Figma for UI Design",
    facilitator: "Laura Black",
    startDate: "2025-06-20",
    level: "Beginner",
    description: "Design user interfaces effectively using Figma and design systems.",
    rate: 8,
    bookmark: true,
    studentStack: "UI/UX"
  },
  {
    courseName: "Next.js Mastery",
    facilitator: "Chris Brown",
    startDate: "2025-06-18",
    level: "Intermediate",
    description: "Build full-featured web apps using Next.js framework.",
    rate: 9,
    bookmark: false,
    studentStack: "FullStack"
  },
  {
    courseName: "API Development",
    facilitator: "James Bond",
    startDate: "2025-06-22",
    level: "Intermediate",
    description: "Learn how to build, document and test RESTful APIs.",
    rate: 7,
    bookmark: true,
    studentStack: "Backend"
  },
  {
    courseName: "Vue.js Basics",
    facilitator: "Olivia Stone",
    startDate: "2025-06-25",
    level: "Beginner",
    description: "Start building dynamic interfaces using Vue.js.",
    rate: 6,
    bookmark: false,
    studentStack: "Frontend"
  },
  {
    courseName: "Database Design",
    facilitator: "Robert Gray",
    startDate: "2025-07-05",
    level: "Intermediate",
    description: "Design scalable and efficient database schemas.",
    rate: 8,
    bookmark: true,
    studentStack: "Backend"
  },
  {
    courseName: "UX Research Fundamentals",
    facilitator: "Angela Clark",
    startDate: "2025-07-08",
    level: "Beginner",
    description: "Learn how to conduct effective user research for better design.",
    rate: 7,
    bookmark: false,
    studentStack: "UI/UX"
  },
  {
    courseName: "CI/CD with GitHub Actions",
    facilitator: "Samuel Okoro",
    startDate: "2025-07-12",
    level: "Advanced",
    description: "Automate testing and deployment using GitHub Actions.",
    rate: 9,
    bookmark: true,
    studentStack: "DevOp"
  },
  {
    courseName: "Python for Web",
    facilitator: "Linda Bright",
    startDate: "2025-06-28",
    level: "Intermediate",
    description: "Use Python and Flask/Django to build web apps.",
    rate: 8,
    bookmark: false,
    studentStack: "Backend"
  },
  {
    courseName: "SASS and CSS Tricks",
    facilitator: "Tony Stark",
    startDate: "2025-06-30",
    level: "Intermediate",
    description: "Write cleaner and reusable styles with SASS.",
    rate: 6,
    bookmark: false,
    studentStack: "Frontend"
  },
  {
    courseName: "Advanced TypeScript",
    facilitator: "Steve Rogers",
    startDate: "2025-07-03",
    level: "Advanced",
    description: "Improve JavaScript code with strong typing using TypeScript.",
    rate: 9,
    bookmark: true,
    studentStack: "FullStack"
  },
  {
    courseName: "Product Thinking for Designers",
    facilitator: "Natasha Romanoff",
    startDate: "2025-06-26",
    level: "Intermediate",
    description: "Integrate product thinking into your design process.",
    rate: 8,
    bookmark: false,
    studentStack: "UI/UX"
  },
  {
    courseName: "Microservices Architecture",
    facilitator: "Bruce Banner",
    startDate: "2025-07-06",
    level: "Advanced",
    description: "Design systems using a microservices-based approach.",
    rate: 10,
    bookmark: true,
    studentStack: "Backend"
  },
  {
    courseName: "Responsive Web Design",
    facilitator: "Clara Thomas",
    startDate: "2025-07-01",
    level: "Beginner",
    description: "Make your websites look great on any device.",
    rate: 7,
    bookmark: false,
    studentStack: "Frontend"
  },
  {
    courseName: "GraphQL Fundamentals",
    facilitator: "Peter Parker",
    startDate: "2025-06-27",
    level: "Intermediate",
    description: "Learn how to build APIs using GraphQL.",
    rate: 8,
    bookmark: true,
    studentStack: "FullStack"}]

export default function CoursesCards() {
    const [view, setView] = useState(false);
    const [showAll, setShowAll] = useState(false);
    const viewAllHandler = () => setShowAll(true);
    const bookmarkHandler = () => setView(!view);
    const coursesToShow = showAll? courses :courses.slice(0,2);


    return (
        <div className='lg:w-[60.5%] shadow-xl/30 rounded-md'>
            <div className={`relative w-full overflow-hidden bg-base100 h-full bg-base-100 rounded-md`} >
            {/* <div className={`w-full flex flex-col gap-2 bg-base100 shadow-md`} > */}
               {/* Header */}
            <div className="flex justify-between items-center m-3 px-3">
                <h2 className="font-semibold text-lg text-gray-800">My courses</h2>
                <button className="text-orange text-sm font-medium hover:underline">
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
