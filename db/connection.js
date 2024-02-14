const mongoose = require('mongoose');

let connecttodb=(url)=>{
    mongoose.connect(url)
}

module.exports=connecttodb