import { NextRequest, NextResponse } from "next/server";
import db from "../../../models/index";

export async function POST(request: NextRequest){
    const data = await db.User.create({name:"nisarg1",email:"nisarg@gmail.com",moblieNo:"1234567895"});

    console.log(data);
   return NextResponse.json(data)
}