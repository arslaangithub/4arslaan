import React,{useContext,createContext} from "react";

const themecon=createContext("grey");

function Con(){
    const theme=useContext(themecon);
    return(
        <div style={{backgroundColor:theme , padding:'10px'}}>
            <p>theme:{theme}</p>
        </div>
    )
}

function Con2(){
    return(
    <themecon.Provider value="red">
        <Con/>
    </themecon.Provider>
    )
}
export default Con2;