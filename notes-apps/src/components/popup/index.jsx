"use client"
import useShowPopup from "@/lib/customHooks/showPopup"


export default function MiniPopup({msg, shwPopup = false}) {
    return (
        <>
            <div className="peer">
                <input type="checkbox" name="" id="" className="hidden" checked={shwPopup} readOnly={true} />
            </div>
        <div className={"absolute right-5 bottom-5 flex items-center px-3 border-l-[5px] border-green-600 bg-green-300 shadow-xl rounded-xl w-[350px] h-[60px] z-50 transition-all duration-1000 not-peer-has-checked:translate-y-60 not-peer-has-checked:opacity-100 peer-has-checked"}>
            <div className="flex items-center w-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="oklch(0.627 0.194 149.214)" fillRule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z" clipRule="evenodd"/></svg>
                <p className=" text-sm font-bold ml-2 max-w-52 truncate text-green-600">{msg}</p>
            </div>
            <button className="flex justify-end items-center" onClick={() => changeShw(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024"><path fill="oklch(0.627 0.194 149.214)" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504L738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512L828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496L285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512L195.2 285.696a64 64 0 0 1 0-90.496"/></svg>
            </button>
        </div>
        </>
    )
}