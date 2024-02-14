const express = require('express');
const connecttodb = require('./db/connection');
const { Mongoose } = require('mongoose');
const userroute = require('./router/emprouter');

let app=express()
app.use(express.json())
app.use("/api/emp",userroute)


app.listen(4000,()=>{
    console.log("server is running at port no 4000")
})

connecttodb("mongodb://localhost:27017/emp")
console.log("connected to DB")

module.exports=app