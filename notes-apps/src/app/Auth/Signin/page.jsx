"use client"
import { useState,useEffect } from "react";
import useTypeRender from "@/lib/customHooks/TypeAuthRender";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const DynamicFormSignIn = dynamic(() => import("@/app/Auth/Signin/FormSignin"),{ssr:false})
const DynamicButton = dynamic(() => import("@/components/button/index"), {ssr:false})

export default function RenderSignin() {
  const [message, setMessage] = useState();
  const state = useTypeRender();
  const pathname = usePathname();

  return (
    <>
      <DynamicButton className="mt-5 row-span-1 mx-auto" initialPos={pathname} action={ state.changeType } />
        <div className="mx-auto max-w-[350px]">
              <div className={"relative row-span-2 transition-all duration-1000 top-5 mb-32"}>
                <div className="relative w-auto h-auto mx-auto flex justify-center">
                    <h1 className="relative z-20 w-[150px] text-center font-bold text-3xl px-2 py-1">Sign In</h1>
                    <div className="absolute w-[150px] h-7 top-4 bg-yellow-light z-10"></div>
                </div>
                <div className="relative w-auto h-auto mx-auto flex justify-center">
                    <h1 className="relative z-20 w-[300px] text-center text-3xl px-2 py-1">for explore more.</h1>
                    <div className="absolute w-[300px] h-7 top-4 bg-yellow-light z-10"></div>
                </div>
              </div>
              <DynamicFormSignIn/>
        </div>
    </>
    )
}
  
