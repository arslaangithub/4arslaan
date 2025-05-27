import React,{useState,useEffect} from "react";

function Ueffect(){
    const [sec,setsec]=useState(0);
    useEffect(()=>{
        const interval=setInterval(()=>{
            setsec(sec=>sec+1)
        },1000)
        return ()=>clearInterval(interval)
    },[])
    return <p>Timer:{sec}s</p>
}
export default Ueffect;