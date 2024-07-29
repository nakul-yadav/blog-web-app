'use client'
import BlogTableItem from '@/Components/adminComponents/BlogTableItem'
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';

 const page = () => {
const [admin,setAdmin]=useState([])

const fetchBlog=async()=>{
const response=await axios.get("/api/blog");
setAdmin(response.data.blogs)
}


const deleteBlog=async(mongoId)=>{
  const response=await axios.delete("/api/blog",{
    params:{
      id:mongoId
    }
  });
  toast.success(response.data.msg);
  fetchBlog();
  }

useEffect(()=>{
fetchBlog();
},[])

  return (
    <div className='flex-1 pt-5 px-5 '>
   <h1>All blogs</h1>
   <div className='relative h-[80vh] max-w-[850px] overflow-x auto mt-4 border border-gray-400 scrollbar-hide'>
    <table className='w-full text-sm text-gray-500'>
   <thead className='text-sm text-wrap-gray-700 text-left uppercase bg-gray-50'>
    <tr>
      <th scope="col" className='hidden sm:block px-6 by-3 '>Author name</th>
      <th scope="col" className=' px-6 by-3 '>blog title</th>
      <th scope="col" className=' px-6 by-3 '>Date</th>
      <th scope="col" className=' px-6 by-3 '>action</th>
    </tr>
   </thead>
   <tbody >
   {
    admin.map((item,index)=>{
      return <BlogTableItem key={index} mongoId={item._id} title={item.title}  author={item.author}  authorImage={item.authorImage} date={item.date} deleteBlog={deleteBlog}/>
    })
   }
   </tbody>
   
    </table>
   </div>
    </div>
  )
}

export default page
