// import { NextResponse } from "next/server";
// import connect from "@/utils/db";
// import Post from "@/models/Post";

// export const GET = async (request, { params }) => {
//   const { id } = params;

//   try {
//     await connect();

//     const post = await Post.findById(id);

//     return new NextResponse(JSON.stringify(post), { status: 200 });
//   } catch (err) {
//     return new NextResponse("Database Error", { status: 500 });
//   }
// };

// export const DELETE = async (request, { params }) => {
//   const { id } = params;

//   try {
//     await connect();

//     await Post.findByIdAndDelete(id);

//     return new NextResponse("Post has been deleted", { status: 200 });
//   } catch (err) {
//     return new NextResponse("Database Error", { status: 500 });
//   }
// };

//---1

// import { NextResponse } from 'next/server'

// export const GET = async (request) => {
  
//   return new NextResponse("It work!", {status: 200})
// }

//---2
import Post from '@/app/models/Post'
import connect from '@/app/utils/db'
// import connect from '@/utils/db'
import { NextResponse } from 'next/server'
export const GET = async (request:any) => {

  try {
    await connect()

    const posts = await Post.find()

    return new NextResponse(JSON.stringify(posts), {status: 200})
    
  } catch (error) {
    return new NextResponse("Database Error", {status: 500})
  }
}