import { useState } from "react";

let ColourInput = () => {

    const [value, setValue] = useState('');
    
    // Only this param type [React.ChangeEvent<HTMLInputElement>] 
    // allowed for function in function component
    const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        console.log(value)

    }

    // in css we pass object structure for styling, thats why here also need to pass 
    // in object style <--- not sure asuming 
    const style ={
        border: "1px solid black",
        height : "50px",
        weight : "50px",
        backgroundColor: value // here in react background-color becomes backgroundColour
    };

    return <>
    {/* Here we cannot directly call the setValue we have to call function and inside we can 
    call. If i mention any method instead of declaring function i.e. onChange = {changeValue()}
    in this scenario this method will get call irrespective u clicked button or not */}
    <input type="text" value={value} onChange={changeValue} placeholder="type any colour"/>
    
    <div style={style}> 
           
    </div>

    </>
}

export default ColourInput;