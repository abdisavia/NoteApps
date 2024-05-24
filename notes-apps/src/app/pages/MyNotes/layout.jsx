// "use server";
"use client";
import { auth } from "@/app/auth"
import {redirect} from "next/navigation";
import AuthProvider from "@/lib/Context/AuthProvider";
import { getSession } from "next-auth/react";

export default  function Layout({children}){
    const data = getSession({
        event:"storage"
    })
    if(!data) redirect("/pages/Auth");
    return(
        <>
            {children}
        </>
    )
}