'use client';

import React from 'react';
import { Calendar } from './Calendar';
import { CalendarSnackProvider } from '../Contexts/calendarSnack/CalendarSnackProvider';

export default function CalendarWrapper() {
  return (
    <div className="relative flex h-screen max-h-screen w-full flex-col items-center justify-center px-4 bg-base100 shadow-xl ">
      <div className="relative  h-full overflow-auto">
        <CalendarSnackProvider>
          <Calendar />
        </CalendarSnackProvider>
      </div>
    </div>
  );
}
