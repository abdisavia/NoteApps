"use client"
import Auth from "./Auth/layout";
import RenderSignin from "./Auth/Signin/page";
import dynamic from "next/dynamic";

const DynamicSignInForm = dynamic(() => import("./Auth/Signin/page"), {ssr:false});

export default function Home() {  
  return ( 
    // {cookiesStore}
    <DynamicSignInForm/>
  );
}
