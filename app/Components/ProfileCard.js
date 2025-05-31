'use client';
import { FaPen, FaTrash } from 'react-icons/fa';
import Image from 'next/image';

export default function UserProfileCard({ userData }) {
  const { name, email,role,registrationDate,lastActivityDate } = userData; 

  return (
    <div className="bg-100 shadow-md rounded-lg p-4 w-full max-w-xs border border-gray-200">
      <div className="flex items-center gap-4 mb-3 border-b border-gray-300 pb-2">
        <Image
          src='/image.png'
          alt={name}
          width={50}
          height={50}
          className="rounded-full w-12 h-12 object-cover cursor-pointer"
        />
        <div>
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-lg font-semibold text-gray-500">{role}</p>
        </div>
      </div>

      <div className="">
        <span className='text-sm text-gray-600 font-bold'>Email</span>
        <h4 className="text-[20px] italic text-gray-500 font-bold">{email}</h4>
        <div className="flex justify-between mt-2">

              <div>
                <span className='text-sm text-gray-600 mb-3 font-semibold'>Registration</span>
                <p className="font-medium text-gray-800">{registrationDate}</p>
              </div>

              <div>
                <span className='text-sm text-gray-600 mb-3 font-semibold'>Last Activity</span>
                <p className="font-medium text-gray-800">{lastActivityDate}</p>
              </div>
        </div>

      </div>

      <div className="flex gap-5 text-orange mt-2">
        <FaPen className="cursor-pointer hover:text-orange" />
        <FaTrash className="cursor-pointer hover:text-orange" />
      </div>
    </div>
  );
}
