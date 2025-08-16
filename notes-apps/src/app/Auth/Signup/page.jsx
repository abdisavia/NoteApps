"use client"
import useTypeRender from "@/lib/customHooks/TypeAuthRender";
import ButtonTypeForm from "@/components/button";
import { motion } from "framer-motion";
import { redirect, usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const DynamicButton = dynamic(() => import("@/components/button/index"), { ssr: false });
const DynamicFormSignup = dynamic(() => import("@/app/Auth/Signup/FormSignup"), { ssr: false });

export default function RenderSignup() {
  const state = useTypeRender();
  const pathname = usePathname();

    return(
      <>
        <DynamicButton className="mt-5 row-span-1 mx-auto" initialPos={pathname} action={ state.changeType } />
        <div className="transition-all duration-1000 row-span-2 mt-2">
          <div className="relative w-auto h-auto mx-auto flex justify-center">
              <h1 className="relative z-20 w-[150px] text-center font-bold text-2xl px-2 py-1">Sign Up</h1>
              <div className="absolute w-[150px] h-7 top-4 bg-yellow-light z-10"></div>
          </div>
          <div className="relative w-auto h-auto mx-auto flex justify-center row-span-2 ">
              <h1 className="relative z-20 w-[250px] text-center text-xl px-2 py-1">for explore more.</h1>
              <div className="absolute w-[250px] h-7 top-4 bg-yellow-light z-10"></div>
          </div>
        </div>
        <DynamicFormSignup/>
      </>
    )
  }