import { useState } from "react";
import Alert from "./Alert"

let AlertButton = () => {

    const[status, setStatus] = useState(-1);

    return <>
    {status == 1? <Alert/>: <></>}
    {/* {    Statement does not allow only expression allow here ternary is expression
        if (status == 1){
            return <Alert/>
        } else {
            return <Alert/>
        }
    }*/}
    <button onClick={() => setStatus(1)}> Altert</button>
    </>
}

export default AlertButton;