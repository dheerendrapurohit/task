const express = require('express');
const usercollection = require('../model/usermodel');

let addemp=async(req,res)=>{
    try{
        let {Name,Email,Mobile,Designation,Gender,Cource}=req.body;
    let addedemp=await usercollection.create({Name,Email,Mobile,Designation,Gender,Cource})
    res.json({error:false,message:"user add successfully",data:addedemp})
    }
    catch{
        res.json({error:true,message:"erroe"})
    }
}





let viewemp=async(req,res)=>{
    let userdata=await usercollection.find()
    return res.status(200).json({data:userdata})

}

let updateuser=async(req,res)=>{
    try{
        let{id}=req.params;
        let{Name}=req.body
        let upadateduser=await usercollection.findByIdAndUpdate({_id:id},{Name})
        if(!upadateduser){
            res.status(404).json({error:true, message:"no user found"})
        }
        res.status(201).json({error:false,message:"user updated successfully",data:upadateduser})
    }
    catch(err){
        res.status(404).json({error:true, message:"error"})
    }
}

let deleteuser=async(req,res)=>{
    let {id}=req.params
    let deleteduser=await usercollection.findByIdAndDelete({_id:id})
    res.json({error:false,message:"user deleted successfully",data:deleteduser})
}


module.exports={addemp,viewemp,updateuser,deleteuser}