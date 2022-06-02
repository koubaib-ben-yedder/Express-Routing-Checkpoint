import axios from "axios";
import { useEffect,useState } from "react";
import Route from "./route/route";
import Example from "./compoment/customodal";
function App() {
 
  const [msg,setMsg]=useState()
  const getData=async()=>{

    try {

     const {data}= await axios.get("http://localhost:5000/")

     console.log(data)
   
     setMsg(data)

   
      
    } catch (error) {
      
      console.error(error)

    }

  }
  useEffect(()=>{

    getData()

  },[])

  return (
    <div className="App">
     <Route />
     <Example data={msg}/>
    </div>
  );
}

export default App;
