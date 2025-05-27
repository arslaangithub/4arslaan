import React,{useState} from "react";

function Ustate(){
    const [count,setcount]=useState(0);
    const Inc=()=>{
        setcount(count+1);
    }
    return(
        <div>
            <p>coutn:{count}</p>
            <button onClick={Inc}>clicme</button>
        </div>
    )
}
export default Ustate;