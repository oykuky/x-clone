import React from 'react'
import { SearchIcon } from '../../../../public/icons'

const Search = () => {
  return (
    <div className='bg-inputGray py-1 px-2 flex items-center rounded-full'>
        <SearchIcon/>
        <input
          type="text"
          placeholder="Search"
          className="outline-none text-textGray rounded-lg p-1 bg-transparent placeholder:pl-1" />
    </div>
  )
}

export default Search