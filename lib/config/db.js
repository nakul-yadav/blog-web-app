import mongoose from 'mongoose'

const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://nakulyadav:Jaishreeram@cluster0.khlszvk.mongodb.net/next-blog-app').then(()=>console.log("db cionect"))
}

export default connectDB