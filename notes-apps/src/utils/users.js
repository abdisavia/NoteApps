import { PrismaClient } from "@prisma/client";

export async function getUserFromDB(email, password){
    const prisma = PrismaClient();
    try{

        const user = await prisma.user.findUnique({
            where : {
                email : email
            }
        })

        return user;
    }catch (e){
        console.log("error at getUserFromDB" + e);
    }

    
}