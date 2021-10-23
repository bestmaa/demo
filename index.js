const express=require("express")
const fs=require("fs")
const app=express()

// app.get("/data",(req,res)=>{
//     res.send("yese")
// })
app.get("/api/:data",(req,res)=>{
    let data=req.params.data
    fs.writeFileSync(`./data.js`,data)

    res.send("done")
})
app.get("/ok",(req,res)=>{

    res.send("ok")
})

const PORT=process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log(`serve Start ${PORT}`);
})