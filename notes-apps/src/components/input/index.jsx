"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Input({type="text",name="", iconPath, className="",setCredential,credential, defaultValue}) {
    const [position, setPosition] = useState("0%");
    const [text, setText] = useState("");

    const handlehover = (e) => {
        setPosition("-100%")
    }
    const handleChange = (e) => {
        if(name == "email"){
            setCredential({...credential,email: e.target.value})
        }else{
            setCredential({...credential,password:e.target.value})
        }
    }
    return(
        <div className={"w-[306px] h-[44px] p-[10px] flex border-b-2 border-white ".concat(className).concat(" ").concat(type == "hidden" && type)}>
            <div className="relative me-[10px] w-[32px] h-full">
                <Image 
                src={iconPath}
                fill={true}
                alt={name}
                />
            </div>
            <div className={"relative w-full h-full ".concat(type == "hidden" && type)}>
                <motion.div initial={{ y:0 }} animate={{ y:position, fontSize:"14px" }} className="absolute text-xl font-normal text-white">{name}</motion.div>
                <input type={type} name={name} onMouseEnter={
                    (e) => {
                        e.preventDefault()
                        handlehover(e)
                    }} onFocus={() => setPosition("-100%")} onChange={handleChange} className="bg-transparent relative w-full px-2 text-white" 
                    defaultValue={defaultValue} required/>
            </div>
        </div>
    );
}