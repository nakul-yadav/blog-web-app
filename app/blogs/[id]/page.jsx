'use client'

import React, { useEffect, useState } from 'react'
import { assets, blog_data } from '@/Assets/assets'
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'
const page = ({params}) => {

    const [data,setData]=useState(null)
    const fetchBlogData=async ()=>{
       const response=await axios.get("/api/blog",{
        params:{
          id:params.id
        }
       })
       setData(response.data)
    }
    useEffect(()=>{
        fetchBlogData()
    },[])
  return (data?<>
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
   <div className='flex justify-between items-start'>
   <Link href='/'>
   <Image src={assets.logo} width={180} className='w-[130px] sm:w-auto'/>
   </Link>
   <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>Get started<Image src={assets.arrow}/></button>
   </div>
   <div className='text-center my-24'>
  <h1 className='text-2xl justify-center  sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
  <Image src={assets.profile_icon} className='mx-auto mt-6 border border-white rounded-full ' width={60} height={60}/>
  <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
   </div>
    </div>
    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
     <Image className='border-4 border-white '  src={data.image} width={1280} height={720} />
     <h1 className='my-8 text-[26px] font-semibold'>introduction:</h1>
     <p>{data.description}</p>
     <h3 className='my-5 text-[18px] font-semibold'>step1: hkjvh dfbrifb  wfiuf ufhuf uefjfgjjitg irdgjgjgjkskd jjfgjf jutjhgdkisjfrig ogo9</h3>
     <p className='my-3'>hnfhf iii thh wqodjfrujt idfjfri39opqewfuew ooiefj opopwej fhfeiuf cnweqofu qo9jh ir ieef ifr ioehfowho ioqef </p>
     <p className='my-3'>hnfhf iii thh wqodjfrujt idfjfri39opqewfuew ooiefj opopwej fhfeiuf cnweqofu qo9jh ir ieef ifr ioehfowho ioqef </p>
     <h3 className='my-5 text-[18px] font-semibold'>step2: hkjvh dfbrifb  wfiuf ufhuf uefjfgjjitg irdgjgjgjkskd jjfgjf jutjhgdkisjfrig ogo9</h3>
     <p className='my-3'>hnfhf iii thh wqodjfrujt idfjfri39opqewfuew ooiefj opopwej fhfeiuf cnweqofu qo9jh ir ieef ifr ioehfowho ioqef </p>
     <p className='my-3'>hnfhf iii thh wqodjfrujt idfjfri39opqewfuew ooiefj opopwej fhfeiuf cnweqofu qo9jh ir ieef ifr ioehfowho ioqef </p>
     <h3 className='my-5 text-[18px] font-semibold'>step3: hkjvh dfbrifb  wfiuf ufhuf uefjfgjjitg irdgjgjgjkskd jjfgjf jutjhgdkisjfrig ogo9</h3>
     <p className='my-3'>hnfhf iii thh wqodjfrujt idfjfri39opqewfuew ooiefj opopwej fhfeiuf cnweqofu qo9jh ir ieef ifr ioehfowho ioqef </p>
     <p className='my-3'>hnfhf iii thh wqodjfrujt idfjfri39opqewfuew ooiefj opopwej fhfeiuf cnweqofu qo9jh ir ieef ifr ioehfowho ioqef </p>
     <h3 className='my-5 text-[18px] font-semibold'>conclusion: hkjvh dfbrifb  wfiuf ufhuf uefjfgjjitg irdgjgjgjkskd jjfgjf jutjhgdkisjfrig ogo9</h3>
     <p className='my-3'>hnfhf iii thh wqodjfrujt idfjfri39opqewfuew ooiefj opopwej fhfeiuf cnweqofu qo9jh ir ieef ifr ioehfowho ioqef </p>
      <div className='my-24'>
      <p className='text-black font font-semibold my-4'>share  this article</p>
      <div className='flex'>
    <Image src={assets.facebook_icon} width={50}/>
    <Image src={assets.twitter_icon} width={50}/>
    <Image src={assets.googleplus_icon} width={50}/>
      </div>
      </div>
    </div>
    </>:<></>
  )
}

export default page