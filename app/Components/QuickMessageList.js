import React from 'react'
import QuickMsgCard from './QuickMsgCard';

export default function QuickMessageList() {

  const messages = [
    {
      id: 1,
      name: "Alex Pirs",
      time: "10:30",
      message: "I am sorry, sir probably I can’t attend...",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Kris Bannet",
      time: "10:30",
      message: "I am sorry, sir probably I can’t attend...",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Amanda Pirs",
      time: "10:30",
      message: "I am sorry, sir probably I can’t attend...",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: 4,
      name: "Iren Man",
      time: "10:30",
      message: "I am sorry, sir probably I can’t attend...",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 5,
      name: "Amanda Pirs",
      time: "10:30",
      message: "I am sorry, sir probably I can’t attend...",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: 6,
      name: "Alex Pirs",
      time: "10:30",
      message: "I am sorry, sir probably I can’t attend...",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  ];

  return (
    <div className='lg:w-[39.5%] rounded-md'  >
    <div className="relative w-full bg-base100 h-full p-4 rounded-md shadow-xl/30">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg text-gray-800">Quick Message</h2>
        <button className="text-orange text-sm font-medium hover:underline">
          View All
        </button>
      </div>

      {/* Message List */}
      <ul className="space-y-5 pr-3">
        {messages.map((message)=>(
            <QuickMsgCard message={message} key={message.id} />
        ))}
      </ul>
    </div>
    </div>
  );
}
