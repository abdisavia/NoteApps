"use server"
import { SignupSchema } from "@/lib/definitions";
import { createSession, encrypt } from "@/lib/session";
// import prisma from "@/lib/prisma";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import { hash, genSalt } from "bcrypt";


import z from "zod";

const prisma = new PrismaClient();

export async function signup(state, formdata) {
    //validasi data
    const validatedFields = SignupSchema.safeParse({
        email: formdata.get("email"),
        password: formdata.get("password"),
    })

    if (formdata.get("Confirmation password") != formdata.get("password")) {
        return {
            inputs:"Confirmation password",
            errors:"harap masukkan konfirmasi password yang sama dengan password"
        }
    }

    if (!validatedFields.success) {
        return z.treeifyError(validatedFields.error);
    }


    const salt = await genSalt(10);
    const encryptedPassword = await hash(formdata.get("password"), salt);

    // Get user from the database
    try {
        await prisma.user.create({
            data: {
                email: formdata.get("email"),
                username: "test",
                password: encryptedPassword
            }
        })   
        // redirect("/Auth/Signup");
    } catch (error) {
        console.log(error);
        return;
    }

    // await createSession()
}