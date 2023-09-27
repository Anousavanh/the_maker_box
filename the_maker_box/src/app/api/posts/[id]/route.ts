// import { NextResponse } from "next/server";
// import connect from "@/utils/db";
// import Post from "@/models/Post";

// export const GET = async (request) => {
//   const url = new URL(request.url);

//   const username = url.searchParams.get("username");

//   try {
//     await connect();

//     const posts = await Post.find(username && { username });

//     return new NextResponse(JSON.stringify(posts), { status: 200 });
//   } catch (err) {
//     return new NextResponse("Database Error", { status: 500 });
//   }
// };

// export const POST = async (request) => {
//   const body = await request.json();

//   const newPost = new Post(body);

//   try {
//     await connect();

//     await newPost.save();

//     return new NextResponse("Post has been created", { status: 201 });
//   } catch (err) {
//     return new NextResponse("Database Error", { status: 500 });
//   }
// };

//---
import Post from '@/app/models/Post'
import connect from '@/app/utils/db'
// import connect from '@/utils/db'
import { NextResponse } from 'next/server'
interface Params {
    id: string,
}

export const GET = async (request, {params}: {params: Params}) => {

    const{ id } = params

  try {
    await connect()

    const post = await Post.findById(id)

    return new NextResponse(JSON.stringify(post), {status: 200})
    
  } catch (error) {
    return new NextResponse("Database Error", {status: 500})
  }
}