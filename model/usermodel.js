const mongoose = require('mongoose');

let userschema=new mongoose.Schema({
    Name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true

    },
    Mobile:{
        type:Number,
        require:true

    },
    Designation:{
        type:String,
        require:true

    },
    Gender:{
        type:String,
        require:true

    },
    Cource:{
        type:String,
        require:true

    },
    password:{
        type:String,
        require:true

    }
})

module.exports=mongoose.model("emp",userschema)