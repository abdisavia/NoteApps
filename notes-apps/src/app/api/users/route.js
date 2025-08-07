import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req){
    try{
        const request = new Request(req);
        // const {email,password} = req.json();
        // const {email,password} = await request.json();
        const users = await prisma.user.findMany({
            where:{
                email:email
            }
        })
        // const res = new NextResponse();
        // return res.json(users);
    
        if(users.length > 0){
            const isPasswordMatch = await bcrypt.compare(password,users[0].password);
            if(isPasswordMatch){
                return Response.json({"users":users},{status:200,statusText:"Signin Success"});
            }
            return Response.json({"users":{}},{status:400,statusText:"Wrong password"})
        } 
        return Response.json({"users":{}},{status:404,statusText:"User not found"});
    }catch(e){
        return Response.json(e.message);
    }
    
}
