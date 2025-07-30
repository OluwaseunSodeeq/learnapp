"use client"
import React, { useState } from 'react'
import QuickMsgCard from './QuickMsgCard';
import useToggleAsideContext from '../Contexts/asideContext/useToggleAsideContext';

 const messages = [
    {
      id: 1,
      name: "Oluwaseun Sodeeq",
      time: "10:30",
      message: "I am sorry, sir probably I can’t attend, due to some personal reasons i wouldn't love to discuss.",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: 2,
      name: "Alex Pirs",
      time: "10:30",
      message: "I am sorry, sir probably I can’t attend, due to some personal reasons i wouldn't love to discuss",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: "Kris Bannet",
      time: "10:30",
      message: "I am sorry, sir probably I can’t attend, due to some personal reasons i wouldn't love to discuss",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 4,
      name: "Amanda Pirs",
      time: "10:30",
      message: "I am sorry, sir probably I can’t attend, due to some personal reasons i wouldn't love to discuss",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: 5,
      name: "Iren Man",
      time: "10:30",
      message: "I am sorry, sir probably I can’t attend, due to some personal reasons i wouldn't love to discuss",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 6,
      name: "Amanda Pirs",
      time: "10:30",
      message: "I am sorry, sir probably I can’t attend, due to some personal reasons i wouldn't love to discuss",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: 7,
      name: "Alex Pirs",
      time: "10:30",
      message: "I am sorry, sir probably I can’t attend, due to some personal reasons i wouldn't love to discuss",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
     {
      id: 8,
      name: "Alex Pirs",
      time: "10:30",
      message: "I am sorry, sir probably I can’t attend, due to some personal reasons i wouldn't love to discuss",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 9,
      name: "Kris Bannet",
      time: "10:30",
      message: "I am sorry, sir probably I can’t attend, due to some personal reasons i wouldn't love to discuss",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 10,
      name: "Amanda Pirs",
      time: "10:30",
      message: "I am sorry, sir probably I can’t attend, due to some personal reasons i wouldn't love to discuss",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: 11,
      name: "Iren Man",
      time: "10:30",
      message: "I am sorry, sir probably I can’t attend, due to some personal reasons i wouldn't love to discuss",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 12,
      name: "Amanda Pirs",
      time: "10:30",
      message: "I am sorry, sir probably I can’t attend, due to some personal reasons i wouldn't love to discuss",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: 13,
      name: "Alex Pirs",
      time: "10:30",
      message: "I am sorry, sir probably I can’t attend, due to some personal reasons i wouldn't love to discuss",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  ];
export default function QuickMessageList() {
   const { open } = useToggleAsideContext();
   const [showAll, setShowAll] = useState(false);
   const viewAllHandler = () => setShowAll(!showAll);
   const messagesToShow = showAll? messages : messages.slice(0,6);

 

  return (
    // <div className={`relative w-[30rem] md:w-[80%] pr-7  lg:w-[39.5%]  h-auto lg:p-0  ${open ?"pl-5":" pl-5 md:pl-10 rounded-md"}`}>
    <div className={`relative w-[40rem] md:w-full pr-7  lg:w-[40%]  h-auto lg:p-0  ${open ?"pl-5":" pl-5 md:pl-10 rounded-md"}`}>
    <div className="relative w-full bg-base100 h-full p-4 rounded-md shadow-xl/30">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg text-gray-800">Quick Message</h2>
        <button className="text-orange text-sm font-medium hover:underline" onClick={viewAllHandler}>
          View All
        </button>
      </div>

      {/* Message List */}
      <ul className="space-y-5 pr-3">
        {messagesToShow .map((message)=>(
            <QuickMsgCard message={message} key={message.id} />
        ))}
      </ul>
    </div>
    </div>
  );
}
