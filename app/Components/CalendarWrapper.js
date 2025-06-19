'use client';

import React from 'react';
import { Calendar } from './Calendar';
import { CalendarSnackProvider } from '../Contexts/calendarSnack/CalendarSnackProvider';

export default function CalendarWrapper() {
  return (
    <div className="relative flex h-screen max-h-screen w-full flex-col items-center justify-center px-4 pt-4">
      <div className="relative mt-20 h-full overflow-auto">
        <CalendarSnackProvider>
          <Calendar />
        </CalendarSnackProvider>
      </div>
    </div>
  );
}
