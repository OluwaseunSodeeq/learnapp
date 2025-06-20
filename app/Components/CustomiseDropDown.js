import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react'; // You can install `lucide-react` or use any other icon library

export default function CustomisedDropdown({ value, onChange,options }) {


  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selected = value
   console.log('selected', selected);
  return (
    <div ref={ref} className="relative w-48">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between rounded-lg border border-gray-300 bg-white px-3 py-3 text-sm font-medium text-gray-900 shadow-sm transition hover:bg-gray-50"
      >
        {selected ? selected : 'Select Month'}
        <ChevronDown
          className={`ml-2 h-5 w-5 transition-transform ${isOpen ? 'rotate-180 text-blue-500' : 'text-gray-500'}`}
        />
      </button>

      {isOpen && (
        <ul className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-gray-300 bg-white py-1 text-sm shadow-lg">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={`cursor-pointer px-4 py-2 transition hover:bg-gray-100 ${
                value === option.value ? 'bg-gray-100 font-semibold' : ''
              }`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
