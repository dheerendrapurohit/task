const express = require('express');
const {addemp,viewemp,updateuser,deleteuser} = require('../Controller/empcontroller');

let Router=express.Router()

Router.post("/addemp",addemp)
Router.get("/viewemp",viewemp)
Router.put("/updateuser/:id",updateuser)
Router.delete("/deleteuser/:id",deleteuser)


module.exports=Router