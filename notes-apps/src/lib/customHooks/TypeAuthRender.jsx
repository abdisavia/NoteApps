"use client"

import { useState } from "react";


export default function useTypeRender() {
    const [type, setType] = useState("signin");
  
    const changeType = (val) => {
      setType(val);
    }
  
    return{
      type: type,
      changeType : changeType,
    }
  }