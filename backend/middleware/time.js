

const time=(req,res,next)=>{

    const  day=["monday","thusday","wednesday","thursday","friday","saturday","sunday"]

   
    if (day[new Date().getDay()-1]=="saturday" || day[new Date().getDay()-1]=="sunday" && new Date().getDate()<9 || new Date().getDate()>17){
        console.log(day[new Date().getDay()-1]=="saturday" ,day[new Date().getDay()-1]=="sunday" ,new Date().getDate()<9 , new Date().getDate()>17)
        return res.status(400).send({msg:"server close "})

        
    }
    next()

  
 

}


module.exports=time