// js advance

const express=require("express");
const app=express()
app.use(express.json())

const fs =require("fs")
const users=[{
    name:"John",
    kidneys:[{
        healthy:false
    }]
}];


app.get("/get",(req,res)=>{
    const johnKidneys=users[0].kidneys;
    const numberofkidneys=johnKidneys.length;
    let numberofhealthykidneys=0;
    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {
            numberofhealthykidneys += 1;
        }
        
    }
    const numberofUnhealthykidneys=numberofkidneys - numberofhealthykidneys;
    res.json({
        numberofkidneys,
        numberofhealthykidneys,
        numberofUnhealthykidneys
    })
})

app.post("/",(req,res)=>{
    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"Done"
    })
})

app.put("/",(req,res)=>{
    for (let i = 0; i < users[0].kidneys.length; i++) {
            users[0].kidneys[i].healthy = true;
    
    }
    res.json({
        msg:"Done"
    })
})

function isThereATleastOneUnhealthyKidneys(){
    let atleastOneUnhealthyKidney=false;
    for (let i = 0; i < users[0].kidneys.length; i++) {
       if (!users[0].kidneys[i].length) {
          atleastOneUnhealthyKidney=true;
       }
        
    }

    return atleastOneUnhealthyKidney;
}

app.delete("/",(req,res)=>{
    if (isThereATleastOneUnhealthyKidneys) {
        
    
    const newKidneys=[];
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].healthy) {
            newKidneys.push({
                healthy:true
            })
        }
        
    }

    users[0].kidneys=newKidneys;
    res.json({
        msg:"done"
    })
}else{
    res.status(411).json({
        msg:"no unhealthy kidneys"
    })
}
})


app.get("/file/:fileName",(req,res)=>{
    const name=req.params.fileName
    console.log(name)
    fs.readFile(name,"utf-8",function(err,data){
        res.json({
            data
        })
    })
})


app.listen(3000)