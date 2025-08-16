import dynamic from "next/dynamic";
import { useActionState } from "react";
import { signup } from "@/lib/_actions/auth";
import { useState, useEffect } from "react";
import useShowPopup from "@/lib/customHooks/showPopup";
import MiniPopup from "@/components/popup";
import { useAuth } from "@/lib/Context/AuthContex";
import { redirect } from "next/navigation";

const DynamicInput = dynamic(() => import("@/components/input/index", {ssr:false}))


export default function FormSignUp() {
  const [state, action, pending] = useActionState(signup, {});
  const [credential, setCredentials] = useState("");
  const {showPopUp} = useAuth();
  useEffect(() => {
    if (!state?.success) {
      return;
    }
    showPopUp(state);
    setTimeout(() => {
      redirect("/");
    }, 3100)
  },[state])


  return (
    <>
      <form className=" row-span-4 flex justify-center items-center h-[400px] mt-8"
      action={action}>
        <div className="w-auto h-auto">
          <DynamicInput name="email" type="email" setCredential={setCredentials} iconPath="/img/entypo--email.svg"/>
          <p className="text-red-500 text-xs mt-1 md:w-[300px]">{ state?.properties?.email?.errors[0] }</p>
          <DynamicInput name="username" type="text" setCredential={ setCredentials } iconPath="/img/iconamoon_profile-fill.svg" className="mt-5"/>
          <p className="text-red-500 text-xs mt-1 md:w-[300px]">{ state?.properties?.username?.errors[0] }</p>
          <DynamicInput name="password" type="password" setCredential={ setCredentials } iconPath="/img/solar_password-bold.svg" className="mt-5"/>
          <p className="text-red-500 text-xs mt-1 md:w-[300px]">{ state?.properties?.password?.errors[0] }</p>
          <DynamicInput name="confirmationPassword" type="password" setCredential={ setCredentials } iconPath="/img/solar_password-bold.svg" className="mt-5"/>
          <p className="text-red-500 text-xs mt-1 md:w-[300px]">{ state?.properties?.confirmationPassword?.errors[0] }</p>
          <div className="flex mt-5">
            <button type="submit" className="w-full h-[40px] bg-yellow-light text-cyan-dark text-center rounded-full font-bold px-[12px] py-[5px] mr-2">Sign Up</button>
            <button type="submit" className="relative w-auto h-[40px] bg-yellow-light text-cyan-dark text-center rounded-full font-bold px-[12px] py-[10px] flex items-center ">    
              <img src="/img/LogoGoogle.svg" className="top-[10px] "/>
            </button>
          </div>
        </div>
      </form>
    </>
  )
}