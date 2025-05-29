import React from 'react'
import { FaSearch } from 'react-icons/fa'

export default function SearchInput() {
  return (
    <div className="relative w-full max-w-xs">
        <input
          type="text"
          placeholder="Search by title"
          className="w-full text-gray-500 pl-10 pr-4 py-2 border rounded-sm text-sm border-orange outline-gray-500 focus:outline-orange "/>
        <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-sm text-orange" />
      </div>
  )
}
