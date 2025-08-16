// "use client"
// import { motion } from "framer-motion";
import useShowPopup from "@/lib/customHooks/showPopup";
import MiniPopup from "@/components/popup";
import { AuthProvider } from "@/lib/Context/AuthContex";


export default async function Layout({ children }) {
  // console.log(param);
  return (
    <div className="relative flex justify-center h-screen items-center overflow-hidden">
      <AuthProvider>
        <div className="lg:grid lg:grid-cols-3  lg:shadow-xl lg:container m-2 lg:gap-2 lg:mx-auto  lg:rounded-2xl    lg:h-[600px] border-4 border-white">
            <img src="/img/bg-auth.jpg" alt="bg" className="hidden lg:block col-span-2 h-[590px]  lg:rounded-xl w-full object-cover object-center" />
            <div className="relative grid justify-center mx-auto max-w-[350px] lg:max-w-screen-lg w-full h-[600px] lg:rounded-xl lg:h-[590px] overflow-hidden  transition-all duration-1000">
                <div className={"transition-all duration-1000 z-40 w-full h-full top-0 flex justify-center p-1  max-w-[350px]"}>
                  <div>{children}</div>
                </div>
            </div>
        </div>
      </AuthProvider>
    </div>
        
    )
}
  
const initialState = {
  message: "",
  status: "Success",
}




