import React,{useRef} from "react";
function URef(){
    const inref=useRef(null);
    function handle(){
        inref.current.focus();
    }
    return(
        <div>
            <p>use ref</p>
            <input ref={inref} type="text"></input>
            <button onClick={handle}>press</button>
        </div>
    )
}
export default URef;