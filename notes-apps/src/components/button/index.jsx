"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";


export default function ButtonTypeForm({initialPos, className, action}) {
    const [clsBtnSignup, setclsBtnSignup] = useState("relative z-20 text-xs font-bold w-full h-full rounded-full text-white");
    const [clsBtnSignin, setclsBtnSignin] = useState("relative z-20 text-xs font-bold w-full h-full rounded-full text-black");
    const [clsBtnBg, setClsBtnBg] = useState("0%");
    const [initialPosition, setInitialPosition] = useState();

    useEffect(() => {
        if(initialPos == "signin"){
            setInitialPosition("0%");
        }else{
            setInitialPosition("100%");
        }
    },[])

    const position = (active) => {
        if(active == "signin"){
            setclsBtnSignin("relative z-20 text-xs font-bold w-full h-full rounded-full text-black");
            setclsBtnSignup("relative z-20 text-xs font-bold w-full h-full rounded-full text-white");
            setClsBtnBg("0%");
        }else{
            setclsBtnSignin("relative z-20 text-xs font-bold w-full h-full rounded-full text-white");
            setclsBtnSignup("relative z-20 text-xs font-bold w-full h-full rounded-full text-black");
            setClsBtnBg("100%");
        }
    };

    return(
        <div className={"relative w-[219px] h-[42px] p-[6px] bg-cyan-dark rounded-full ".concat(className)}>
            <div className="relative grid grid-cols-2 h-full transition duration-100">
                <button type="button" onClick={() => {position("signin"); action("signin")}} className={clsBtnSignin}>Sign in</button>
                <button type="button" onClick={() => {position("signup"); action("signup")}} className={clsBtnSignup}>Sign up</button>
                <motion.div initial={{ x:initialPosition }} animate={{ x:clsBtnBg }} className={"absolute w-1/2 h-full top-0 rounded-full bg-white z-10"}></motion.div>
            </div>
        </div>
    )
}
