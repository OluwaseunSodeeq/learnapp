import React from 'react'
import SearchInput from './SearchInput'
import FilterButton from './FilterButton'
import useToggleAsideContext from '../Contexts/asideContext/useToggleAsideContext';

export default function HeaderUserControls({buttonArray}) {
  const {mobileView} = useToggleAsideContext();
  const user = "users"
  const filterHandler = ()=> console.log("Filter Handler Clicked!")
  return (
    <div className='flex justify-between items-center gap-4'>
      {mobileView && <SearchInput />}
      <div className='flex justify-between items-center gap-6 '> {
        buttonArray.map((value, index) => (
          <FilterButton type={user} value={value} index={index} key={index} filterHandler={filterHandler}/>
        ))
        }</div>
    </div>
  )
}
