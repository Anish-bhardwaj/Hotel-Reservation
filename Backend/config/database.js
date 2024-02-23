const mongoose=require("mongoose");
require("dotenv").config();
const dbConnect=()=>{
    mongoose.connect(process.env.MONGOURL)
    .then(()=>{
        console.log("DB Connection Succesfull")
    })
    .catch((err)=>{
        console.log("Error in Database Connection ",err)
    })
}
module.exports=dbConnect;