import React from 'react'
import Image from 'next/image' 
import { assets } from '@/Assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useState } from 'react'

 const Header = () => {

const [email,setEmail]=useState("")

const onSubmitHandler=async (e)=>{
e.preventDefault();
const formData=new FormData();
formData.append('email',email)
const response=await axios.post('/api/email',formData)
if(response.data.success){
  toast.success(response.data.message)
  setEmail("")
}
else{
  toast.error("error")
}
}

  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
     <div className='flex justify-between item-center'>
          <Image src={assets.logo} width={180} className='w-[130px] sm:w-auto'/>
          <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-1  border-black'>Get started<Image src={assets.arrow}/></button>
      </div>
      <div className='text-center my-8'>
        <h1 className='text-3xl sm:text-5xl font-medium'>Latest blogs</h1>
        <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>hii this dummy testing of blogs so just chill</p>
        <form  onSubmit={onSubmitHandler} className='flex justify-between max-w-[500px] scale-75  sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]' action=''>
      <input type='email'  onChange={(e)=>setEmail(e.target.value)} value={email}   placeholder='enter your mail' className='pl-4 outline-none'/>
      <button type='submit' className='border-1 border-black py-4 px-4 sm:px-8 active:bg-grey-600 active::text-white'>subscrbe</button>
        </form>
      </div>
    </div>
  )
}


export default Header