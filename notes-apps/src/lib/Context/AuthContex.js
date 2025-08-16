"use client"
import { createContext, useContext, useState } from "react";
import MiniPopup from "@/components/popup";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [state, setState] = useState({
        status: false,
        message: "",
    })

    const showPopUp = (state) => {
        setState({
            status: state.success,
            message: state.message
        });
        console.log(state);
        setTimeout(() => {
            setState({
                status: false,
                message: "",
            })
        }, 3000);
    }

    return (
        <AuthContext.Provider value={{ showPopUp }}>
            <MiniPopup msg={ state.message } shwPopup={ state.status } />
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}