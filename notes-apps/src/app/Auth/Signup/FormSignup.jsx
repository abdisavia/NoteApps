import dynamic from "next/dynamic";
import { handleSignup } from "../AuthService";
import Input from "@/components/input";

const DynamicInput = dynamic(() => import("@/components/input/index", {ssr:false}))


export default function FormSignUp() {
    return (
        <form className="bottom-full row-span-4 flex justify-center items-end h-auto mt-20"
        onSubmit={handleSignup} 
        method="POST">
          <div className="w-auto h-auto ">
            <DynamicInput name="email" type="email" iconPath="/img/iconamoon_profile-fill.svg" />
            <DynamicInput name="password" type="password" iconPath="/img/solar_password-bold.svg" className="my-5"/>
            <DynamicInput name="Confirmation password" type="password" iconPath="/img/solar_password-bold.svg"/>
            <button type="submit" className="w-full h-[40px] bg-white text-cyan-dark text-center rounded-full font-bold px-[12px] py-[5px] mb-2 mt-5">Sign In</button>
            <button type="submit" className="relative w-full h-[40px] bg-white text-cyan-dark text-center rounded-full font-bold px-[12px] py-[10px] flex items-center ">    
              <img src="/img/LogoGoogle.svg" className="absolute top-[10px] "/>
              <div className="h-full w-full text-center">
                Sign In with google
              </div>
            </button>
            <p className="text-center text-white mt-2">Your adventure begins with<br/>a simple login</p>
          </div>
        </form>
    )
}