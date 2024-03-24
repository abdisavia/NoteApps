"use client"
import Input from "@/components/input"
import useTypeRender  from "@/lib/customHooks/TypeAuthRender"
import AuthLayout from "@/components/Layouts/AuthLayouts"
import ButtonTypeForm from "@/components/button";

export default function Auth() {
    const state = useTypeRender();

    return(
        <AuthLayout type={state.type}>
        <div className={"transition-all duration-1000 absolute z-40 w-full h-full top-0 grid p-5 ".concat(state.type == "signup"? "grid-rows-7" : "grid-rows-7")}>
          <ButtonTypeForm initialPos={"login"} action={state.changeType} className="mx-auto mt-5 row-span-1"/>
          {state.type == "signin"? <RenderSignin/> : <RenderSignup/>}
        </div>
      </AuthLayout>
    )
}

const RenderSignin = () => {
    return (
      <>
      <div className={"relative row-span-2 transition-all duration-1000 top-5"}>
        <div className="relative w-auto h-auto mx-auto flex justify-center">
            <h1 className="relative z-20 w-[150px] text-center font-bold text-3xl px-2 py-1">Sign In</h1>
            <div className="absolute w-[150px] h-7 top-4 bg-yellow-light z-10"></div>
        </div>
        <div className="relative w-auto h-auto mx-auto flex justify-center">
            <h1 className="relative z-20 w-[300px] text-center text-3xl px-2 py-1">for explore more.</h1>
            <div className="absolute w-[300px] h-7 top-4 bg-yellow-light z-10"></div>
        </div>
      </div>
            <form className="relative bottom-0 row-span-4 flex justify-center items-end z-50">
              <div className="w-auto">
                <Input name="username" iconPath="/img/iconamoon_profile-fill.svg" className="my-5"/>
                <Input name="password" type="password" iconPath="/img/solar_password-bold.svg"/>
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
      </>
    )
  }

  const RenderSignup = () => {
    return(
      <>
            <div className="transition-all duration-1000 row-span-2 ">
              <div className="relative w-auto h-auto mx-auto flex justify-center">
                  <h1 className="relative z-20 w-[150px] text-center font-bold text-3xl px-2 py-1">Sign Up</h1>
                  <div className="absolute w-[150px] h-7 top-4 bg-yellow-light z-10"></div>
              </div>
              <div className="relative w-auto h-auto mx-auto flex justify-center">
                  <h1 className="relative z-20 w-[300px] text-center text-3xl px-2 py-1">for explore more.</h1>
                  <div className="absolute w-[300px] h-7 top-4 bg-yellow-light z-10"></div>
              </div>
            </div>
            <form className="bottom-full row-span-4 flex justify-center items-end h-auto">
              <div className="w-auto h-auto ">
                <Input name="username" iconPath="/img/iconamoon_profile-fill.svg" />
                <Input name="password" type="password" iconPath="/img/solar_password-bold.svg" className="my-5"/>
                <Input name="Confirmation password" type="password" iconPath="/img/solar_password-bold.svg"/>
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
      </>
    )
  }