import { NextResponse } from "next/server"
import { conn } from "@/libs/mysql";

export async function GET(){
    // return NextResponse.json({message:"Hello Word"});
    const result = await conn.query('SELECT NOW()')
    console.log(result)
    return NextResponse.json({message: result[0] ['NOW()']});
}