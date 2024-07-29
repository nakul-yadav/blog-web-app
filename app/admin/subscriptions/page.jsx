'use client'
import React from 'react'


 const page = () => {
  return (
    <div className='flex-1 pt-5 px-5 '>
<h1>All subscription</h1>
<div className='relative max-w-[600px] h-[80vh]  overflow-x-auto mt-4 border border-gray-400 scrollbar-hide'>
<table className='w-full text-sm text-gray-500'>
  <thead className='text-xs text-left text-gray-700 uppercase bg-gray-50'>
    <tr>
      <th scope="col" className='px-6 py-3'>
      email-subscription
      </th>

      <th scope="col" className=' px-6 py-3'>
      date
      </th>
      <th scope="col" className='px-6 py-3'>
      action
      </th>
    </tr>
      </thead>
  <tbody>
    <subTableItem/>
  </tbody>
</table>
</div>
    </div>
  )
}


export default page