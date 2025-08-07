import dynamic from "next/dynamic"
import { handleSignin } from "../AuthService";
import { useState } from "react";

const DynamicInput = dynamic(() => import("@/components/input/index"), { ssr: false });


export default function FormSignIn() {
    const [credential, setCredentials] = useState({email:"", password:""});
    
    
    return (
        <form className="relative bottom-0 row-span-4 flex justify-center items-end z-50"
              action = {handleSignin}
              >
                <div className="w-auto">
                  {/* <Input name="csrfToken" type="hidden" iconPath="" className="my-5" defaultValue={getServerSideProps}/> */}
                  <DynamicInput name="email" type="email" iconPath="/img/iconamoon_profile-fill.svg" className="my-5" setCredential={(value) => setCredentials(value)} credential={credential}/>
                  <DynamicInput name="password" type="password" iconPath="/img/solar_password-bold.svg" setCredential={(value) => setCredentials(value)} credential={credential}/>
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