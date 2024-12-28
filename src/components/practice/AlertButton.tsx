import { useState } from "react";
import Alert from "./Alert"

// Very Imp this here we are communicating two components using props

let AlertButton = () => {

    const[status, setStatus] = useState(false);

    return <>
    {status? <Alert setStatus2= {()=> setStatus(false)} visibility={true}/>: <></>}
    {/* {    Statement does not allow only expression allow here ternary is expression
        if (status == 1){
            return <Alert/>
        } else {
            return <Alert/>
        }
    }*/}
    
    <button onClick={() => setStatus(true)}> Alert</button>
    </>
}

export default AlertButton;