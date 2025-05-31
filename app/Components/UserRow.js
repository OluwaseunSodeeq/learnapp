import { FiEdit, FiCopy, FiTrash2 } from 'react-icons/fi';
import { Bell, Clock, SlidersHorizontal } from 'lucide-react';
import { FiBell, FiClock, FiSliders } from 'react-icons/fi';


export default function UsersRow({user}) {
    const { name, email, role, dateOfRegister, lastActivityDate } = user;

  return (
    <div className='bg-base100 flex justify-between items-center p-4 '>
        <p className='text-base text-gray-500 '>{name}</p>
        <p className='text-base text-gray-500 '>{role}</p>
        <p className='text-base text-gray-500 '>{email}</p>
        <p className='text-base text-gray-500 '>{dateOfRegister}</p>
        <p className='text-base text-gray-500 '>{lastActivityDate}</p>
        <div className='flex justify-between items-center gap-2'>
            <div className='text-[12px] rounded-full'>
                <FiCopy className="  cursor-pointer text-gray-400 mr-2" />
            </div>
            <div className='text-[12px] rounded-full'>
                <FiEdit className="  cursor-pointer text-gray-400" />
            </div>
        </div>
    </div>

  )
}