
// Also called integrating api, AXIOS is tool helps to call external api
// API data comes in the form of promises

import axios from "axios";
import { useState } from "react";


const AxiosTest = () => {

    const [data, setData] = useState([]);
   

    const retriveDate = async () => {
  
        const result = await axios.get("https://picsum.photos/v2/list");
        setData(result.data);
        //console.log(data[0].url);
                
    }
    

    return <>
    
    <button style={{width: "20%", height: "50px", fontSize:"20px", backgroundColor:"lightyellow", borderEndEndRadius:"10px"}}
     onClick={retriveDate}
    > Get ALL </button>
    <div>

         
        {data.map((elm, index)=> 
        <img src={elm.url} alt="Sample"/>)
         }
      
      
        <div> 
          <h1>Test Image</h1> 
         <img src="https://via.placeholder.com/400x200/ff7f50/333333?text=Sample+Image" alt="Sample" /> 
        </div>
       
    </div>
    </>
}

export default AxiosTest;