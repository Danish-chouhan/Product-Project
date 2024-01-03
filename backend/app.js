const express = require("express")
const path = require("path")

const app = express()
app.use(express.static(path.join(__dirname,"../frontend/")))
app.use(express.urlencoded({extended : false}))
app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname,"../frontend/index.html"))
})

app.listen(3000,()=>{
    console.log("working on http://localhost:3000/");
})

