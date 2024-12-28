import { useState } from "react";

interface AlertProp{
    visibility : boolean
    setStatus2 : () => void;
}

let Alert = ({visibility, setStatus2} : AlertProp)=>{

    const[cross, setCross] = useState(-1)

    return <>
    {visibility?<div> Alert <span onClick={() => {visibility = false; setStatus2();}}>Cross</span></div>:<></>}
    
    {/* <button type="button" class="btn btn-primary" id="liveAlertBtn">Show live alert</button> */}
    </>
}

export default Alert;