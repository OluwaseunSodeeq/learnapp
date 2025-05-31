import UsersRow from "./UserRow";



export default function UsersRows({users}) {
  

  return (
    <div className='bg-base100 h-auto'>
        {users.map((user, index) => (
            <UsersRow user={user} key={index}  />
        ))}
    </div>

  )
}
