const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const { urlencoded } = require("express")
const app=express()
app.use(express.json())
app.use(urlencoded())
mongoose.connect(("mongodb://localhost:27017/mytodo-prt"),{
    useNewUrlParser: true
},()=>console.log("DB is connected"))
//schema
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
//model
const User=new mongoose.Model("User",userSchema)
//routes
app.get("/get",(req,res)=>{
    res.send({message:"created"})
})
//login
app.post("/",(req,res,user)=>{
  const {emai,password}=req.body
  if(user){
    if({emai:emai}){
     res.send({message:"logined successfully"})
    }
  }else{
    res.send({message:"User doesnot exist"})
  }
 
})
//register
app.post("/",(req,res)=>{
   const {name,emai,password}=req.body
   
})