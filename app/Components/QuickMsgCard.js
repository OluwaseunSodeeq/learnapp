import Image from 'next/image'
import React from 'react'

export default function QuickMsgCard({message:msg}) {
  return (
          <li key={msg.id} className="flex items-center justify-between">
            {/* Left: Avatar and Message */}
            <div className="flex items-center gap-3">
              <Image
                src="/image.png"
                alt="user"
                className="w-10 h-10 rounded-full object-cover"
                width={40}
                height={40}
              />
              <div>
                <p className="font-medium text-sm text-gray-800">{msg.name}</p>
                <p className="text-xs text-gray-500 truncate w-44">{msg.message}</p>
              </div>
            </div>

            {/* Right: Time and Dot */}
            <div className="flex flex-col items-center">
              <span className="text-xs text-gray-700 font-medium">{msg.time}</span>
              <span className="w-2 h-2 rounded-full bg-red-500 mt-1"></span>
            </div>
          </li>
        
  )
}
