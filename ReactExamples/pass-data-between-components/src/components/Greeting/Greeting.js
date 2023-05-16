import React from "react";

export const Greeting = ({name,displaySecret}) => {
    return(
        <div>
            <p>Hi, {name}!!!</p>
            {/*clicking button will update state of the parent component and show the secret in the parent component */}
            <button onClick={()=> displaySecret(1)}>Show Secret</button>
        </div>
    )
}