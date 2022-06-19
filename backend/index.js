const express=require("express")
const app=express()
require("dotenv").config()

const time=require("./middleware/time")

app.get("/",time,(req,res,next)=>{


    res.status(200).send({msg:"server work"})

    
    
   
})
const port= process.env.PORT || 4000
app.listen(port,(e)=>{

    if (e) throw e;
    console.log("listen in port "+port)

})
