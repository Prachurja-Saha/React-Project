import { useState } from "react"

const Calculator = () => {

    // React variable (using normal variable we can't modify/update value)
    // Here in react variable is state (using hook function we are modifing state)
    const[value, setValue] = useState('');
    const[result, setResult] = useState(0);
    const[operator, setOperator] = useState('');

    // const changeValue = (operator: string) => {
    //     setValue(value + operator)
    // }

    const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const checkValue = (s : string)=>{
        
        if(value[value.length -1] != s && value[0] != s){
            console.log(value+s);
            setValue(value+s);
        }
    }

    const calculateResult = () => { 
        try { 
            // Use eval to calculate the result 
            const evalResult = eval(value);  // Not working
            setResult(evalResult); 
            console.log(result); 
        } catch (error) { 
            setResult(0); 
            console.error("Invalid expression"); 
        } 
    };

    return <>

    {/* below code is called 2 way binding (updating value + showing in input) */}
    <input type="Text" onChange={changeValue} value={value}/>

    {/* onclick should only contain 2 function 
    1. which return and parameter is void 
    2. return is void and argument type parameter is React.ChangeEvent<HTMLInputElement> */}
     {/* In React, state updates are asynchronous. 
     This means that when you call setState, React doesn't immediately update the state. 
     Instead, it schedules a state update and re-renders the component later. This can 
     lead to situations where you don't see the updated state immediately after calling 
     setState. 
    <button onClick={()=> {setOperator("*"); checkValue();}}>*</button>*/}
    <button onClick={() => checkValue("*")}>*</button>
    <button onClick={() => checkValue("+")}>+</button>
    <button onClick={() => checkValue("-")}>-</button>
    <button onClick={() => checkValue("/")}>/</button>
    <button onClick={calculateResult}>submit</button>
    </>
}

export default Calculator;