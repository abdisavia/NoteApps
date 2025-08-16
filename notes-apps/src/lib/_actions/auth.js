"use server"
import { SigninSchema, SignupSchema } from "@/lib/definitions";
import { createSession, destroySession, encrypt } from "@/lib/session";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import { hash, genSalt, compare,  } from "bcrypt";


import z from "zod";

const prisma = new PrismaClient();

export async function signup(state, formdata) {
    //validasi data
    const validatedFields = SignupSchema.safeParse({
        email: formdata.get("email"),
        username: formdata.get("username"),
        password: formdata.get("password"),
        confirmationPassword: formdata.get("confirmationPassword")
    })

    if (!validatedFields.success) {
        
        return z.treeifyError(validatedFields.error);
    }


    const salt = await genSalt(10);
    const encryptedPassword = await hash(validatedFields.data.password, salt);

    // Get user from the database
    let userId; 
    try {
        const result = await prisma.user.create({
            data: {
                email: validatedFields.data.email,
                username: validatedFields.data.username,
                password: encryptedPassword
            }
        })   
        userId = result.id;
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Terjadi masalah pada server"
        };
    }

    // make user session
    await createSession(userId);

    return {
        success: true,
        message:"Akun berhasil dibuat",
    }
}

export async function signin(state, formdata) {
    //validasi data
    const validatedFields = SigninSchema.safeParse({
        email: formdata.get("email"),
        password: formdata.get("password"),
    })

    if (!validatedFields.success) {
        return z.treeifyError(validatedFields.error);
    }
    
    console.log(validatedFields)
    // cari email yang sesuai
    let user; 
    try {
        const result = await prisma.user.findFirst({
            where: {
                email: validatedFields.data.email
            }
        })
        user = result;
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Terjadi masalah pada server"
        }
    }

    const passwordCompare = await compare(validatedFields.data.password, user.password);

    if (!passwordCompare) {
        return {
            success: false,
            message:"Username atau password salah"
        }
    }

    await createSession(user.id);

    return {
        success: true,
        message: "Login Berhasil"
    }
}

export async function logout() {
    await destroySession();
    redirect("/Auth/Signin");
}