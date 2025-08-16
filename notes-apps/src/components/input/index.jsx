"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Input({type="text",name="", iconPath, className="",setCredential,credential, defaultValue}) {
    const [position, setPosition] = useState("0%");
    const [text, setText] = useState("");

    const handlehover = (e) => {
        if(e.target.value != "") return;
        if(e.type == "mouseenter"){
            setPosition("-100%");
        }else {
            setPosition("0%");
        };
    }
    const handleChange = (e) => {
        setCredential({...credential,name: e.target.value})   
    }
    
    return(
        <div className={"w-[306px] h-[44px] p-[10px] flex border-b-2 border-cyan-dark ".concat(className).concat(" ").concat(type == "hidden" && type)}>
            <div className="relative me-[10px] w-[32px] h-full">
                <div className="relative bg-cyan-dark w-7 h-7 rounded-full p-2">
                    <Image 
                    src={iconPath}
                        // fill={true}
                        width={"30"}
                        height={"30"}
                    alt={name}
                    />
                </div>
            </div>
            <div className={"relative w-full h-full ".concat(type == "hidden" && type)}>
                <motion.div initial={{ y:0 }} animate={{ y:position, fontSize:"14px" }} className="absolute text-xl font-normal text-cyan-dark duration-100">{name}</motion.div>
                <input type={type} name={name} onMouseEnter={
                    (e) => {
                        e.preventDefault()
                        handlehover(e)
                    }} onFocus={() => setPosition("-100%")} onMouseLeave={
                        (e) => {
                            e.preventDefault();
                            handlehover(e);
                        }
                    } onChange={handleChange} className="bg-transparent relative w-full px-2 text-cyan-dark font-semibold" 
                    defaultValue={defaultValue} required/>
            </div>
        </div>
    );
}