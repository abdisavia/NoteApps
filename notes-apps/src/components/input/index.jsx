"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Input({type="text",name="", iconPath, className=""}) {
    const [position, setPosition] = useState("0%");
    const [text, setText] = useState("");

    const handlehover = (e) => {
        setPosition("-100%")
    }
    const handleChange = (e) => {
        e.preventDefault
        setText(e.target.value);
        return;
    }
    return(
        <div className={"w-[306px] h-[44px] p-[10px] flex border-b-2 border-white ".concat(className)}>
            <div className="relative me-[10px] w-[32px] h-full">
                <Image 
                src={iconPath}
                fill={true}
                alt={name}
                />
            </div>
            <div className="relative w-full h-full ">
                <motion.div initial={{ y:0 }} animate={{ y:position, fontSize:"14px" }} className="absolute text-xl font-normal text-white">{name}</motion.div>
                <input type={type} name={name} onMouseEnter={
                    (e) => {
                        e.preventDefault
                        handlehover(e)
                    }} onFocus={() => setPosition("-100%")} onChange={handleChange} className="bg-transparent relative w-full px-2 text-white"/>
            </div>
        </div>
    );
}