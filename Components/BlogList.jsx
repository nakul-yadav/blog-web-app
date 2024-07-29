import React, { useEffect, useState } from 'react'
import { blog_data } from '@/Assets/assets'
import BlogItem from './BlogItem'
import axios from 'axios'

 const BlogList = () => {

    const [menu,setMenu]=useState("all");
    const [blogs,setBlog]=useState([])


    const fetchBlogs=async ()=>{
      const response=await axios.get("/api/blog")
      setBlog(response.data.blogs);
      console.log(response.data.blogs)
    }


    useEffect(()=>{
      fetchBlogs();
    },[])
  

  return (
    <div>
    <div className='flex justify-center gap-6 my-10'>
    <button onClick={()=>setMenu("all")} className={menu==="all"?'bg-black text-white py-1 px-4 rounded-sm':""}>All</button>
    <button  onClick={()=>setMenu("technology")} className={menu==="technology"?'bg-black text-white py-1 px-4 rounded-sm':""}>technology</button>
    <button onClick={()=>setMenu("startup")} className={menu==="startup"?'bg-black text-white py-1 px-4 rounded-sm':""}>startup</button>
    <button onClick={()=>setMenu("lifestyle")} className={menu==="lifestyle"?'bg-black text-white py-1 px-4 rounded-sm':""}>lifestyle</button>
    </div>
    <div className='flex flex-wrap justify-around  gap-1 gap-y-10 mb-16 xl:mx-24 '>
      {
        blogs.filter((item)=>menu==="all"?true:item.category===menu).map((item,index)=>{
         return  <BlogItem title={item.title} id={item._id}key={index} category={item.category} description={item.description} image={item.image}/>
        })
      }
    </div>
    </div>
  )
}

export default BlogList