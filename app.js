const express=require('express')
const app=express()
app.use(express.json())
const port=4000;
const router=require("./routes")
app.use("/",router)
app.listen(port,()=>{
    console.log("app is listening on port "+port)

})

module.exports=app;



