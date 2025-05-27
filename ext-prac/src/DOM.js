import React,{useState} from "react";
function Dom(){
    const[count,setcount]=useState(0);
    function incr(){
        setcount(count+1);
    }

    return(
        <div>
            <p>count:{count}</p>
            <button onClick={incr}>click</button>

        </div>

    )
}
export default Dom;