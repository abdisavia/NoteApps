import dynamic from "next/dynamic";
import { handleSignup } from "../AuthService";
import Input from "@/components/input";
import { useActionState } from "react";
import { signup } from "@/app/_actions/auth";
import { useState } from "react";

const DynamicInput = dynamic(() => import("@/components/input/index", {ssr:false}))


export default function FormSignUp() {
  const [state, action, pending] = useActionState(signup, undefined);
  const [credential, setCredentials] = useState("");
  return (
      <form className="bottom-full row-span-4 flex justify-center items-end h-auto mt-20"
      action={action}>
        <div className="w-auto h-auto ">
          <DynamicInput name="email" type="email" setCredential={setCredentials} iconPath="/img/iconamoon_profile-fill.svg" />
          <p className="text-red-500 text-xs mt-1 md:w-[300px]">{ state?.properties?.email?.errors[0] }</p>
          <DynamicInput name="password" type="password" setCredential={ setCredentials } iconPath="/img/solar_password-bold.svg" className="mt-5"/>
          <p className="text-red-500 text-xs mt-1 md:w-[300px]">{ state?.properties?.password?.errors[0] }</p>
          <DynamicInput name="Confirmation password" type="password" setCredential={ setCredentials } iconPath="/img/solar_password-bold.svg" className="mt-5"/>
          <p className="text-red-500 text-xs mt-1 md:w-[300px]">{ state?.errors }</p>
          {/* <input type="text" name="test" className="border-2 border-black"/> */}
          <button type="submit" className="w-full h-[40px] bg-white text-cyan-dark text-center rounded-full font-bold px-[12px] py-[5px] mb-2 mt-5">Sign In</button>
          <button type="submit" className="relative w-full h-[40px] bg-white text-cyan-dark text-center rounded-full font-bold px-[12px] py-[10px] flex items-center ">    
            <img src="/img/LogoGoogle.svg" className="absolute top-[10px] "/>
            <div className="h-full w-full text-center">
              Sign In with google
            </div>
          </button>
        </div>
      </form>
  )
}