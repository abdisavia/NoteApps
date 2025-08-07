"use client"
import useTypeRender  from "@/lib/customHooks/TypeAuthRender"
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";


export default function AuthLayout({children}) {
  const state = useTypeRender();
  const pathname = usePathname();


  return (
      <div className="lg:grid lg:grid-cols-3 lg:border-cyan-dark lg:gap-2 lg:shadow-xl lg:container lg:mx-auto  lg:p-2 lg:rounded-2xl  lg:max-h-screen-lg  lg:overflow-hidden">
            <img src="/img/bg-auth.jpg" alt="bg" className="hidden lg:block col-span-2 h-[600px] my-auto lg:rounded-xl w-full object-cover object-center" />
            <div className="relative mx-auto max-w-[350px] lg:max-w-screen-lg w-full h-screen lg:rounded-xl lg:h-full overflow-hidden  transition-all duration-1000">
                <div className={"transition-all duration-1000 absolute z-40 w-full h-full top-0 grid p-5  max-w-[350px]".concat(pathname == "/Auth/Signup"? "grid-rows-7" : "grid-rows-7")}>
                  
                  <div>{children}</div>
                </div>
                <div className={"transition-all duration-1000 relative w-full ".concat(pathname == "/Auth/Signin" ? "top-[58%]" : "top-[50%]")}>
                      {/* -10% - -70% */}
                      <motion.div initial={{ x:"-70%" }} animate={{ x:["-70%","-10%","-70%"] }} transition={{ duration:20, repeat:Infinity }} className="absolute w-[1434px] bottom-0 z-10 top-[-130px]">
                          <img src="/img/Vector.svg" alt="" className=""/>
                      </motion.div>
                      <motion.div initial={{ x:"-10%" }} animate={{ x:["-10%","-70%","-10%"] }} transition={{ duration:25, repeat:Infinity }} className="absolute w-[1434px] bottom-0 z-10 top-[-110px]">
                          <img src="/img/Vector-1.svg" alt="" className="" />
                      </motion.div>
                  <div className={pathname == "/Auth/Signin" ? "transition-all duration-1000 relative top-[70%] w-full h-[400px] bg-cyan-dark z-30" : "transition-all duration-1000 relative top-[60%] w-full h-[501px] bg-cyan-dark z-30"}></div>
                </div>
            </div>
        </div>
        
    )
}
  
const initialState = {
  message: "",
  status: "Success",
}




