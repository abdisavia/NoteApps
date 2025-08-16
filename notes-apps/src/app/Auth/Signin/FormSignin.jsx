import dynamic from "next/dynamic"
import { useActionState, useState, useEffect } from "react";
import { signin } from "@/lib/_actions/auth";
import { useAuth } from "@/lib/Context/AuthContex";
import { redirect } from "next/navigation";

const DynamicInput = dynamic(() => import("@/components/input/index"), { ssr: false });


export default function FormSignIn() {
  const [credential, setCredentials] = useState({ email: "", password: "" });
  const [state, action, pending] = useActionState(signin, undefined);
  const { showPopUp } = useAuth();

  useEffect(() => {
    if (!state?.success) {
      return;
    }
    showPopUp(state);
    setTimeout(() => {
      redirect("/")
    },3100)
  },[state])
    
    
    return (
        <form className="relative bottom-0 row-span-4 flex justify-center items-center z-50 mt-40"
              action = {action}
              >
                <div className="w-auto">
                  {/* <Input name="csrfToken" type="hidden" iconPath="" className="my-5" defaultValue={getServerSideProps}/> */}
                  <DynamicInput name="email" type="email" iconPath="/img/entypo--email.svg" className="" setCredential={(value) => setCredentials(value)} credential={credential}/>
                  <p className="text-red-500 text-xs mt-1 md:w-[300px]">{ state?.properties?.email?.errors[0] }</p>
                  <DynamicInput name="password" type="password" iconPath="/img/solar_password-bold.svg" className="mt-5" setCredential={(value) => setCredentials(value)} credential={credential} />
                  <p className="text-red-500 text-xs mt-1 md:w-[300px]">{ state?.properties?.password?.errors[0] }</p>
                  <div className="flex mt-5">
                  <button type="submit" className="w-full h-[40px] bg-yellow-light text-cyan-dark text-center rounded-full font-bold px-[12px] py-[5px] mr-2 disabled:text-gray-500 disabled:opacity-50" disabled={ state?.success }>Sign in</button>
                  <button type="submit" className="relative w-auto h-[40px] bg-yellow-light text-cyan-dark text-center rounded-full font-bold px-[12px] py-[10px] flex items-center disabled:text-gray-500 disabled:opacity-50" disabled={ state?.success }>    
                    <img src="/img/LogoGoogle.svg" className="top-[10px] "/>
                  </button>
                </div>
                </div>
              </form>
    )
}