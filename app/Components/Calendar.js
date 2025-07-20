'use client';
import { ChevronDown } from 'lucide-react';
import { SortAsc, SortDesc } from 'lucide-react';

import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { useSnack } from '../Contexts/calendarSnack/CalendarSnackProvider';
import { courses } from '../Data/courses';
// import CustomisedDropdown from './CustomiseDropDown';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const listOfCourses =  courses.map((course) => course.courseName).slice(0,5);

export function Calendar () {

const { createSnack } = useSnack();
  const [isOpen, setIsOpen] = useState(false);
  const today = useMemo(() => new Date(), []);
  const dayRefs = useRef([]);
  const [year, setYear] = useState(today.getFullYear());
  // const [curMonth, setCurMonth] = useState(today.getMonth());
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth());

  const monthOptions = useMemo(
    () => monthNames.map((month, index) => ({ name: month, value: `${index}` })),
    []
  );

  const courseOptions = useMemo(
    () => listOfCourses.map((course, index) => ({ name: course, value: `${index}` })),
    []
  );
    console.log(listOfCourses,monthNames);

  const scrollToDay = useCallback((monthIndex, dayIndex) => {
    const targetDayIndex = dayRefs.current.findIndex(
      (ref) =>
        ref?.getAttribute('data-month') === `${monthIndex}` &&
        ref?.getAttribute('data-day') === `${dayIndex}`
    );

    const targetElement = dayRefs.current[targetDayIndex];
    if (targetDayIndex === -1 || !targetElement) return;

    const container = document.querySelector('.calendar-container');
    const elementRect = targetElement.getBoundingClientRect();
    const is2xl = window.matchMedia('(min-width: 1536px)').matches;
    const offsetFactor = is2xl ? 3 : 2.5;

    const offset = container
      ? elementRect.top - container.getBoundingClientRect().top - (container.clientHeight / offsetFactor) + (elementRect.height / 2)
      : window.scrollY + elementRect.top - (window.innerHeight / offsetFactor) + (elementRect.height / 2);

    (container ?? window).scrollTo({ top: (container?.scrollTop ?? 0) + offset, behavior: 'smooth' });
  }, []);
// ====================

// Handle prev month
const handlePrevMonth = useCallback(() => {
  setSelectedMonth(prev => (prev === 0 ? 11 : prev - 1));
  if (selectedMonth === 0) {
    setYear(prev => prev - 1); // Go to previous year if on January
  }
}, [selectedMonth]);

// Handle next month
const handleNextMonth = useCallback(() => {
  setSelectedMonth(prev => (prev === 11 ? 0 : prev + 1));
  if (selectedMonth === 11) {
    setYear(prev => prev + 1); // Go to next year if on December
  }
}, [selectedMonth]);


  // const handlePrevYear = useCallback(() => setCurMonth((prev) => prev - 1), []);
  // const handleNextYear = useCallback(() => setCurMonth((prev) => prev + 1), []);

  const handleMonthChange = useCallback((event) => {

    const monthIndex = parseInt(event.target.value, 10);
    setSelectedMonth(monthIndex);
    scrollToDay(monthIndex, 1);
    setIsOpen(isOpen => !isOpen);

  }, [scrollToDay]);

  const handleTodayClick = useCallback(() => {
    setYear(today.getFullYear());
    scrollToDay(today.getMonth(), today.getDate());
  }, [scrollToDay, today]);

  useEffect(() => {
    handleTodayClick();
  },[handleTodayClick]);

  const handleDayClick = useCallback(
    (day, month, year) => {
      const snackMessage = `Clicked on ${monthNames[month]} ${day}, ${year}`;
      createSnack(snackMessage, 'success');
    },
    [createSnack]
  );


const generateCalendar = useMemo(() => {
  const days = [];
  const startDayOfWeek = new Date(year, selectedMonth, 1).getDay(); // Start day of selected month
  const daysInMonth = new Date(year, selectedMonth + 1, 0).getDate(); // Days in selected month

  // Fill preceding empty slots for alignment
  for (let i = 0; i < startDayOfWeek; i++) {
    days.push({ month: -1, day: null }); // Placeholder for empty cell
  }

  // Push actual days of the selected month
  for (let day = 1; day <= daysInMonth; day++) {
    days.push({ month: selectedMonth, day });
  }

  // Ensure full weeks (multiple of 7)
  const lastWeekDayCount = days.length % 7;
  if (lastWeekDayCount > 0) {
    const extraDaysNeeded = 7 - lastWeekDayCount;
    for (let day = 1; day <= extraDaysNeeded; day++) {
      days.push({ month: -1, day: null }); // Placeholder for empty cell
    }
  }

  const calendarWeeks = [];
  for (let i = 0; i < days.length; i += 7) {
    calendarWeeks.push(days.slice(i, i + 7));
  }

  return calendarWeeks.map((week, weekIndex) => (
    <div className="flex w-full" key={`week-${weekIndex}`}>
      {week.map(({ month, day }, dayIndex) => {
        const index = weekIndex * 7 + dayIndex;
        const isToday =
          month === selectedMonth &&
          today.getDate() === day &&
          today.getMonth() === selectedMonth &&
          today.getFullYear() === year;

        return (
          <div
            key={`${month}-${dayIndex}-${weekIndex}`}
            ref={(el) => (dayRefs.current[index] = el)}
            data-month={month}
            data-day={day}
            onClick={() => (day ? handleDayClick(day, selectedMonth, year) : null)}
            className={`relative z-10 m-[-0.5px] group aspect-square w-full grow cursor-pointer rounded-2 border font-medium transition-all hover:z-20 hover:border-cyan-400 sm:-m-px sm:size-20 sm:rounded-2xl sm:border-2 lg:size-24 lg:rounded-1 2xl:size-28 ${
              !day ? 'bg-transparent border-1 cursor-default' : ''
            }`}
          >
            {day && (
              <span
                className={`absolute left-1 top-1 flex size-5 items-center justify-center rounded-full text-xs sm:size-6 sm:text-sm lg:left-2 lg:top-2 lg:size-8 lg:text-base ${
                  isToday ? 'bg-blue-500 font-semibold text-white' : 'text-slate-800'
                }`}
              >
                {day}
              </span>
            )}
            {/* Optional: Add month name label in first week */}
            {day && weekIndex === 0 && day === 1 && (
              <span className="absolute bottom-0.5 left-0 w-full truncate px-1.5 text-sm font-semibold text-slate-300 sm:bottom-0 sm:text-lg lg:bottom-2.5 lg:left-3.5 lg:-mb-1 lg:w-fit lg:px-0 lg:text-xl 2xl:mb-[-4px] 2xl:text-2xl">
                {monthNames[selectedMonth]}
              </span>
            )}
          </div>
        );
      })}
    </div>
  ));
}, [year, selectedMonth, today, handleDayClick]);

  useEffect(() => {
    const calendarContainer = document.querySelector('.calendar-container');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const month = parseInt(entry.target.getAttribute('data-month'), 10);
            setSelectedMonth(month);
          }
        });
      },
      { root: calendarContainer, rootMargin: '-75% 0px -25% 0px', threshold: 0 }
    );

    dayRefs.current.forEach((ref) => {
      if (ref?.getAttribute('data-day') === '15') {
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    // <div className="no-scrollbar w-full calendar-container max-h-full overflow-y-scroll rounded-t-2xl bg-white pb-10 text-slate-800 border-2 shadow-xl">
    <div className="relative h-full scrollbar-hide overflow-y-scroll  pb-[4rem] shadow-4xl bg-base100">
    <div className="  bg-base100 pb-10 text-gray-800  shadow-xl">
      <div className=" w-full rounded-t-2xl bg-base100 px-5 sm:px-8 sm:pt-8">
        <div className="mb-4  w-full">
          <div className="flex flex-wrap gap-2 sm:gap-3">
           <Select name="month" value={`${selectedMonth}`} options={monthOptions} onChange={handleMonthChange} isOpen={isOpen} setIsOpen={setIsOpen} icon={ChevronDown} />
           <Select name="month" value={`${selectedMonth}`} options={courseOptions} onChange={handleMonthChange} isOpen={isOpen} setIsOpen={setIsOpen} icon={SortAsc} />
          </div>
          <div className="flex w-full mt-2.5 items-center justify-between">
            <div className='flex gap-1 text-orange cursor-pointer'onClick={handlePrevMonth}>
            <ChevronDown  className=" cursor-pointer p-1 transition-transform hover:text-orange rotate-[-270deg]"/>
            <span className='ml-2'>{monthNames[selectedMonth -1]}</span>
            </div>
            <h1 className="min-w-16 text-center text-lg font-semibold sm:min-w-20 sm:text-xl">{monthNames[selectedMonth]} {year}</h1>
            <div className='cursor-pointer flex gap-1 text-orange' onClick={handleNextMonth}>
            <span >{monthNames[selectedMonth + 1]}</span>
            <ChevronDown  className=" cursor-pointer p-1 transition-transform hover:text-orange rotate-[-90deg]"/>
            </div>
          </div>
        </div>
        <div className="grid w-full grid-cols-7 justify-between text-slate-500">
          {daysOfWeek.map((day, index) => (
            <div key={index} className="w-full border border-slate-200 py-2 text-center font-semibold">{day}</div>
          ))}
        </div>
      </div>
      <div className="w-full px-5 pt-4 sm:px-8 sm:pt-6">{generateCalendar}</div>
    </div>
    </div>
  );
};

const Select = ({ name, value, options = [], onChange, isOpen, setIsOpen, icon:Icon }) => {


  
  return (<div className="relative">
    {/* <CustomisedDropdown onChange={onChange} value={value} name={name} options={options}/> */}
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      onFocus={() => setIsOpen(true)}
      onBlur={() => setIsOpen(false)}

      className=" w-full appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-800 shadow-sm focus:ring-blue-500"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>{option.name}</option>
      ))}
    </select>
    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-1 sm:pr-2">
       <Icon className={`ml-3 h-5 w-5 transition-transform ${isOpen ? 'rotate-180 text-blue-500' : 'text-gray-500'}`}/>
      {/* <svg className="size-5 text-slate-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clipRule="evenodd" />
      </svg> */}
    </span>
  </div>
)};



// 'use client';

// import React, { useEffect, useMemo, useRef, useState } from 'react';
// import { useSnack } from '../Contexts/calendarSnack/snackprovider';

// const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// export const Calendar = () => {

//   const { createSnack } = useSnack();

  

//   const today = useMemo(() => new Date(), []);

//   const dayRefs = useRef([]);
//   const [year, setYear] = useState(new Date().getFullYear());
//   const [selectedMonth, setSelectedMonth] = useState(0);
//   const monthOptions = monthNames.map((month, index) => ({ name: month, value: `${index}` }));

//   const scrollToDay = (monthIndex, dayIndex) => {
//     const targetDayIndex = dayRefs.current.findIndex(
//       (ref) => ref && ref.getAttribute('data-month') === `${monthIndex}` && ref.getAttribute('data-day') === `${dayIndex}`
//     );

//     const targetElement = dayRefs.current[targetDayIndex];

//     if (targetDayIndex !== -1 && targetElement) {
//       const container = document.querySelector('.calendar-container');
//       const elementRect = targetElement.getBoundingClientRect();
//       const is2xl = window.matchMedia('(min-width: 1536px)').matches;
//       const offsetFactor = is2xl ? 3 : 2.5;

//       if (container) {
//         const containerRect = container.getBoundingClientRect();
//         const offset = elementRect.top - containerRect.top - (containerRect.height / offsetFactor) + (elementRect.height / 2);
//         container.scrollTo({ top: container.scrollTop + offset, behavior: 'smooth' });
//       } else {
//         const offset = window.scrollY + elementRect.top - (window.innerHeight / offsetFactor) + (elementRect.height / 2);
//         window.scrollTo({ top: offset, behavior: 'smooth' });
//       }
//     }
//   };

//   const handlePrevYear = () => setYear((prev) => prev - 1);
//   const handleNextYear = () => setYear((prev) => prev + 1);

//   const handleMonthChange = (event) => {
//     const monthIndex = parseInt(event.target.value, 10);
//     setSelectedMonth(monthIndex);
//     scrollToDay(monthIndex, 1);
//   };

//   const handleTodayClick = () => {
//     setYear(today.getFullYear());
//     scrollToDay(today.getMonth(), today.getDate());
//   };

//   // const handleDayClick = (day, month, year) => {
//   //   if (!onClick) return;
//   //   if (month < 0) {
//   //     onClick(day, 11, year - 1);
//   //   } else {
//   //     onClick(day, month, year);
//   //   }
//   // };

//   const generateCalendar = useMemo(() => {

//     const onClickHandler = (day, month, year) => {
//     const snackMessage = `Clicked on ${monthNames[month]} ${day}, ${year}`;
//     createSnack(snackMessage, 'success');
//   };

//     const handleDayClick = (day, month, year) => {
//     if (!onClickHandler) return;
//     if (month < 0) {
//       onClickHandler(day, 11, year - 1);
//     } else {
//       onClickHandler(day, month, year);
//     }
//   };

//     const daysInYear = () => {
//       const days = [];
//       const startDayOfWeek = new Date(year, 0, 1).getDay();

//       if (startDayOfWeek < 6) {
//         for (let i = 0; i < startDayOfWeek; i++) {
//           days.push({ month: -1, day: 32 - startDayOfWeek + i });
//         }
//       }

//       for (let month = 0; month < 12; month++) {
//         const daysInMonth = new Date(year, month + 1, 0).getDate();
//         for (let day = 1; day <= daysInMonth; day++) {
//           days.push({ month, day });
//         }
//       }

//       const lastWeekDayCount = days.length % 7;
//       if (lastWeekDayCount > 0) {
//         const extraDaysNeeded = 7 - lastWeekDayCount;
//         for (let day = 1; day <= extraDaysNeeded; day++) {
//           days.push({ month: 0, day });
//         }
//       }
//       return days;
//     };

//     const calendarDays = daysInYear();
//     const calendarWeeks = [];
//     for (let i = 0; i < calendarDays.length; i += 7) {
//       calendarWeeks.push(calendarDays.slice(i, i + 7));
//     }

//     return calendarWeeks.map((week, weekIndex) => (
//       <div className="flex w-full" key={`week-${weekIndex}`}>
//         {week.map(({ month, day }, dayIndex) => {
//           const index = weekIndex * 7 + dayIndex;
//           const isNewMonth = index === 0 || calendarDays[index - 1].month !== month;
//           const isToday = today.getMonth() === month && today.getDate() === day && today.getFullYear() === year;

//           return (
//             <div
//               key={`${month}-${day}`}
//               ref={(el) => (dayRefs.current[index] = el)}
//               data-month={month}
//               data-day={day}
//               onClick={() => handleDayClick(day, month, year)}
//               className={`relative z-10 m-[-0.5px] group aspect-square w-full grow cursor-pointer rounded-xl border font-medium transition-all hover:z-20 hover:border-cyan-400 sm:-m-px sm:size-20 sm:rounded-2xl sm:border-2 lg:size-36 lg:rounded-3xl 2xl:size-40`}
//             >
//               <span
//                 className={`absolute left-1 top-1 flex size-5 items-center justify-center rounded-full text-xs sm:size-6 sm:text-sm lg:left-2 lg:top-2 lg:size-8 lg:text-base ${
//                   isToday ? 'bg-blue-500 font-semibold text-white' : ''
//                 } ${month < 0 ? 'text-slate-400' : 'text-slate-800'}`}
//               >
//                 {day}
//               </span>
//               {isNewMonth && (
//                 <span className="absolute bottom-0.5 left-0 w-full truncate px-1.5 text-sm font-semibold text-slate-300 sm:bottom-0 sm:text-lg lg:bottom-2.5 lg:left-3.5 lg:-mb-1 lg:w-fit lg:px-0 lg:text-xl 2xl:mb-[-4px] 2xl:text-2xl">
//                   {monthNames[month]}
//                 </span>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     ));
//   }, [year,createSnack, today]);

//   useEffect(() => {
//     const calendarContainer = document.querySelector('.calendar-container');
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const month = parseInt(entry.target.getAttribute('data-month'), 10);
//             setSelectedMonth(month);
//           }
//         });
//       },
//       { root: calendarContainer, rootMargin: '-75% 0px -25% 0px', threshold: 0 }
//     );

//     dayRefs.current.forEach((ref) => {
//       if (ref && ref.getAttribute('data-day') === '15') {
//         observer.observe(ref);
//       }
//     });

//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   return (
//     <div className="no-scrollbar calendar-container max-h-full overflow-y-scroll rounded-t-2xl bg-white pb-10 text-slate-800 shadow-xl">
//       <div className="sticky -top-px z-50 w-full rounded-t-2xl bg-white px-5 pt-7 sm:px-8 sm:pt-8">
//         <div className="mb-4 flex w-full flex-wrap items-center justify-between gap-6">
//           <div className="flex flex-wrap gap-2 sm:gap-3">
//             <Select name="month" value={`${selectedMonth}`} options={monthOptions} onChange={handleMonthChange} />
//             <button onClick={handleTodayClick} className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-900 hover:bg-gray-100 lg:px-5 lg:py-2.5">Today</button>
//           </div>
//           <div className="flex w-fit items-center justify-between">
//             <button onClick={handlePrevYear} className="rounded-full border border-slate-300 p-1 transition-colors hover:bg-slate-100 sm:p-2">Prev</button>
//             <h1 className="min-w-16 text-center text-lg font-semibold sm:min-w-20 sm:text-xl">{year}</h1>
//             <button onClick={handleNextYear} className="rounded-full border border-slate-300 p-1 transition-colors hover:bg-slate-100 sm:p-2">Next</button>
//           </div>
//         </div>
//         <div className="grid w-full grid-cols-7 justify-between text-slate-500">
//           {daysOfWeek.map((day, index) => (
//             <div key={index} className="w-full border-b border-slate-200 py-2 text-center font-semibold">{day}</div>
//           ))}
//         </div>
//       </div>
//       <div className="w-full px-5 pt-4 sm:px-8 sm:pt-6">{generateCalendar}</div>
//     </div>
//   );
// };

// const Select = ({ name, value, options = [], onChange }) => (
//   <div className="relative">
//     <select
//       id={name}
//       name={name}
//       value={value}
//       onChange={onChange}
//       className="cursor-pointer rounded-lg border border-gray-300 bg-white py-1.5 pl-2 pr-6 text-sm font-medium text-gray-900 hover:bg-gray-100 sm:rounded-xl sm:py-2.5 sm:pl-3 sm:pr-8"
//     >
//       {options.map((option) => (
//         <option key={option.value} value={option.value}>{option.name}</option>
//       ))}
//     </select>
//     <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-1 sm:pr-2">
//       <svg className="size-5 text-slate-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//         <path fillRule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clipRule="evenodd" />
//       </svg>
//     </span>
//   </div>
// );
 // const generateCalendar = useMemo(() => {
  //   const days = [];
  //   const startDayOfWeek = new Date(year, 0, 1).getDay();

  //   if (startDayOfWeek < 6) {
  //     for (let i = 0; i < startDayOfWeek; i++) {
  //       days.push({ month: -1, day: 32 - startDayOfWeek + i });
  //     }
  //   }

  //   for (let month = 0; month < 12; month++) {
  //     const daysInMonth = new Date(year, month + 1, 0).getDate();
  //     for (let day = 1; day <= daysInMonth; day++) {
  //       days.push({ month, day });
  //     }
  //   }

  //   const lastWeekDayCount = days.length % 7;
  //   if (lastWeekDayCount > 0) {
  //     const extraDaysNeeded = 7 - lastWeekDayCount;
  //     for (let day = 1; day <= extraDaysNeeded; day++) {
  //       days.push({ month: 0, day });
  //     }
  //   }

  //   const calendarWeeks = [];
  //   for (let i = 0; i < days.length; i += 7) {
  //     calendarWeeks.push(days.slice(i, i + 7));
  //   }

  //   return calendarWeeks.map((week, weekIndex) => (
  //     <div className="flex w-full " key={`week-${weekIndex}`}>
  //       {week.map(({ month, day }, dayIndex) => {
  //         const index = weekIndex * 7 + dayIndex;
  //         const isNewMonth = index === 0 || days[index - 1].month !== month;
  //         const isToday = today.getMonth() === month && today.getDate() === day && today.getFullYear() === year;

  //         return (
  //           <div
  //             key={`${month}-${day}`}
  //             ref={(el) => (dayRefs.current[index] = el)}
  //             data-month={month}
  //             data-day={day}
  //             onClick={() => handleDayClick(day, month < 0 ? 11 : month, month < 0 ? year - 1 : year)}
  //             className="relative z-10 m-[-0.5px] group aspect-square w-full grow cursor-pointer rounded-xl border font-medium transition-all hover:z-20 hover:border-cyan-400 sm:-m-px sm:size-20 sm:rounded-2xl sm:border-2 lg:size-36 lg:rounded-3xl 2xl:size-40"
  //           >
  //             <span
  //               className={`absolute left-1 top-1 flex size-5 items-center justify-center rounded-full text-xs sm:size-6 sm:text-sm lg:left-2 lg:top-2 lg:size-8 lg:text-base ${
  //                 isToday ? 'bg-blue-500 font-semibold text-white' : ''
  //               } ${month < 0 ? 'text-slate-400' : 'text-slate-800'}`}
  //             >
  //               {day}
  //             </span>
  //             {isNewMonth && (
  //               <span className="absolute bottom-0.5 left-0 w-full truncate px-1.5 text-sm font-semibold text-slate-300 sm:bottom-0 sm:text-lg lg:bottom-2.5 lg:left-3.5 lg:-mb-1 lg:w-fit lg:px-0 lg:text-xl 2xl:mb-[-4px] 2xl:text-2xl">
  //                 {monthNames[month]}
  //               </span>
  //             )}
  //           </div>
  //         );
  //       })}
  //     </div>
  //   ));
  // }, [year, today, handleDayClick]);