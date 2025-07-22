'use client';

import React from 'react';
import { Calendar } from './Calendar';
import { CalendarSnackProvider } from '../Contexts/calendarSnack/CalendarSnackProvider';

export default function CalendarWrapper() {
  return (
    <div>
 {/* <div className="relative flex h-screen max-h-screen w-full flex-col items-center justify-center px-4 bg-base100 shadow-xl pb-3 "> */}
 <div className="relative flex pt-5 h-auto w-full flex-col items-center justify-center px-4 bg-base100 shadow-xl pb-3 ">
      <div className="relative  h-full overflow-auto">
        <CalendarSnackProvider>
          <Calendar />
        </CalendarSnackProvider>
      </div>
    </div>
    <div className="fixed w-full mx-auto bottom-0 left-[18rem] pb-3 right-0 z-20 bg-base100 px-4 py-2">
        {/* <CoursesFooter data={data} /> */}
      </div>
    </div>
   
  );
}
