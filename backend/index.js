const express=require("express")
const app=express()
require("dotenv").config()
const cors=require("cors")
const time=require("./middleware/time")

app.get("/",time,(req,res,next)=>{


    res.status(200).set("Access-Control-Allow-Origin","*").send({msg:"server work"})

    
    
   
})
app.use(cors({
    origin:"http://localhost:3000"
}))

const port= process.env.PORT || 4000
app.listen(port,(e)=>{ 

    if (e) throw e;
    console.log("listen in port "+port)

})
