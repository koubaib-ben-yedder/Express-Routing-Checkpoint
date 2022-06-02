

const time=(req,res,next)=>{

    const  day=["sunday","monday","thusday","wednesday","thursday","friday","saturday"]

    console.log(day[new Date().getDay()] ,day[new Date().getDay()] ,new Date().getDate()<9 , new Date().getDate()>17)

    if (day[new Date().getDay()]=="saturday" || day[new Date().getDay()]=="sunday" && new Date().getDate()<9 || new Date().getDate()>17){
        console.log(day[new Date().getDay()-1]=="saturday" ,day[new Date().getDay()-1]=="sunday" ,new Date().getDate()<9 , new Date().getDate()>17)
        return res.status(200).set("Access-Control-Allow-Origin","*").send({msg:"server close"})

        
    }
    next()

  
 

}


module.exports=time