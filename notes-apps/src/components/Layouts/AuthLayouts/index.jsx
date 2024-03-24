"use client"
import { motion } from "framer-motion";

export default function AuthLayouts({children, type="signin"}){
    return(
        <section className="relative w-full h-screen overflow-hidden  transition-all duration-1000">
            {children}
            <div className={"transition-all duration-1000 relative w-full ".concat(type == "signin" ? "top-[58%]" : "top-[50%]")}>
                {/* -10% - -70% */}
                <motion.div initial={{ x:"-70%" }} animate={{ x:["-70%","-10%","-70%"] }} transition={{ duration:20, repeat:Infinity }} className="absolute w-[1434px] bottom-0 z-10 top-[-130px]">
                    <img src="/img/Vector.svg" alt="" className=""/>
                </motion.div>
                <motion.div initial={{ x:"-10%" }} animate={{ x:["-10%","-70%","-10%"] }} transition={{ duration:25, repeat:Infinity }} className="absolute w-[1434px] bottom-0 z-10 top-[-110px]">
                    <img src="/img/Vector-1.svg" alt="" className="" />
                </motion.div>
            <div className={type == "signin" ? "transition-all duration-1000 relative top-[70%] w-full h-[400px] bg-cyan-dark z-30" : "transition-all duration-1000 relative top-[60%] w-full h-[501px] bg-cyan-dark z-30"}></div>
            </div>
        </section>
    )
}