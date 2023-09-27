import Team from '@/app/models/Team'
import connect from '@/app/utils/db'
// import connect from '@/utils/db'
import { NextResponse } from 'next/server'


export const GET = async (request:any) => {

  try {
    await connect()

    const team = await Team.find()

    return new NextResponse(JSON.stringify(team), {status: 200})
    
  } catch (error) {
    return new NextResponse("Database Error", {status: 500})
  }
}