"use client"
import { useState } from "react";

export default function useShowPopup() {
    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState("");

    const changeShowPopup = (value) => {
        setShowPopup(value);
    } 

    const changeMessagePopup = (msg) => {
        setMessage(msg);
    }

    return {
        msg:message,
        shwPopup:showPopup,
        changeMsg:changeMessagePopup,
        changeShw:changeShowPopup
    };
}