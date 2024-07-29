import connectDB from "@/lib/config/db";

import { NextResponse } from "next/server";
import fs from 'fs'
import BlogModel from "@/lib/models/BlogModel";


const LoadDB=async()=>{
    await connectDB();
}

LoadDB();


//api for getting blog data
export async function GET(request){
    const blogId=request.nextUrl.searchParams.get("id");
    if(blogId){
        const blog=await BlogModel.findById(blogId)
        return NextResponse.json(blog)  
    }
    else{
    const blogs=await BlogModel.find({})
    return NextResponse.json({blogs})
    }
}

// api endpoint to delete
export async function DELETE(request){
    const id=request.nextUrl.searchParams.get("id");
    const blog=await BlogModel.findById(id);
    fs.unlink(`./public${blog.image}`,()=>{})
    await BlogModel.findByIdAndDelete(id)
    return NextResponse.json({msg:"blog deleted"});
}

// api for storing blog data
export async function POST(request){
    const formData=await request.formData();
    const timestamp=Date.now();

    const image=formData.get('image');
    const imageByteData=await image.arrayBuffer();
    const buffer=Buffer.from(imageByteData);

    const path=`./public/${timestamp}_${image.name}`;
    await fs.writeFile(path,buffer,(err)=>{
     if(err){
        console.log("error")
     }
    });
    const imgUrl=`/${timestamp}_${image.name}`;
    const blogData={
        title:`${formData.get('title')}`,
        description:`${formData.get('description')}`,
        category:`${formData.get('category')}`,
        author:`${formData.get('author')}`,
        image:`${imgUrl}`,
        authorImage:`${formData.get('authorImage')}`,

    }

    await BlogModel.create(blogData);
    console.log("blog saved")
    return NextResponse.json({success:true,msg:"blog added"})

}
