"use server"  
import { signIn } from "@/auth";
import { PrismaClient, Prisma } from "@prisma/client";
import { redirect } from "next/navigation";


export async function handleSignin(credentials){
    try{
        console.log(await signIn("credentials", credentials));

    }catch(e){
        console.log(e);
    }
    console.log(credentials);
    return { 
        message:"Login Berhasil",
        status: "success"
    }
}

export async function handleSignup(formData){
    const prisma = PrismaClient();
    try{
        //check if user already exist
        const user = await prisma.user.findUnique({
            where:{
                email:formData.get("email")
            }
        })
        // if user exist then return to registration form and send error message
        if(user){
            return { 
                message : "email sudah digunakan",
                status : "error"
            }
        }
        //check if password and confirmpassword same

        //save to database
    }catch(e){

    }
}

export async function cekSession (e){
  const session = await auth();
  return session
}