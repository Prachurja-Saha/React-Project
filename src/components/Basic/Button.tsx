import { ReactNode, useState } from "react";

interface ButtonProps{
  children : ReactNode
  className : string

  changeResult? : (name: string)=> string; // ? -> optional
}

function ButtonTest({children, className}: ButtonProps) {

    const [result, setResult] = useState('');
    console.log(result)
    return <>
    <button onClick={(e)=> setResult(children==null? "null":children.toString())} 
    type="button" className={"btn btn-"+className}>{children}</button>
    </>
}

export default ButtonTest;