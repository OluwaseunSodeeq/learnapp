import { FiEdit, FiCopy, FiTrash2 } from 'react-icons/fi';
import { Bell, Clock, SlidersHorizontal } from 'lucide-react';
import { FiBell, FiClock, FiSliders } from 'react-icons/fi';

export default function UsersRow({user}) {
    const { name, email, role, dateOfRegister, lastActivityDate } = user;

    return (
      <div className="w-full grid grid-cols-[1.5fr_1fr_2.5fr_1.5fr_1.5fr_1fr] py-3  text-gray-500">
        <div className='flex justify-center text-base '> <span>{name}</span></div>
        <div className='flex justify-center text-base '> <span>{role}</span></div>
        <div className='flex justify-center text-base '> <span>{email}</span></div>
        <div className='flex justify-center text-base '> <span>{dateOfRegister}</span></div>
        <div className='flex justify-center text-base '> <span>{lastActivityDate}</span></div>
        <div className='flex justify-center text-base  items-center gap-2 '>
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


// export default function UsersRow({user}) {
//     const { name, email, role, dateOfRegister, lastActivityDate } = user;

//   return (
//     <div className='bg-base100 flex justify-between items-center p-4 '>
//         <p className='text-base text-gray-500 '>{name}</p>
//         <p className='text-base text-gray-500 '>{role}</p>
//         <p className='text-base text-gray-500 '>{email}</p>
//         <p className='text-base text-gray-500 '>{dateOfRegister}</p>
//         <p className='text-base text-gray-500 '>{lastActivityDate}</p>
//         <div className='flex justify-between items-center gap-2'>
//             <div className='text-[12px] rounded-full'>
//                 <FiCopy className="  cursor-pointer text-gray-400 mr-2" />
//             </div>
//             <div className='text-[12px] rounded-full'>
//                 <FiEdit className="  cursor-pointer text-gray-400" />
//             </div>
//         </div>
//     </div>

//   )
// }