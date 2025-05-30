import React from 'react'
import UserProfileCard from './ProfileCard'

export default function UsersCards({users}) {

  return (
    <div className='bg-base100'>
        <h5 className='pl-10 font-bold '>100 users found</h5>
        <div className="p-10 flex justify-between flex-wrap gap-y-4 gap-x-2 items-center">
            {users.map((user,index) => <UserProfileCard key={index} userData={user}/>
            )}
        </div>
    </div>

  )
}
