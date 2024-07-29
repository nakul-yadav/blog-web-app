import React from 'react'

const subTableItem = () => {
  return (
    <tr className='bg-white border-b text-left'>
    <th scope='row' className='px-6  py-4  font-medium text-gray-900 whitespace-normal'>
 {email?email:"no email"}
    </th>
    <td className='px-6 py-4'>{"31 july 2024"}</td>
    <td  className='px-6 py-4 cursor-pointer'>x</td>
    </tr>
  )
}

export default subTableItem