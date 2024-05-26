const user=require("../models/user");
exports.reserve=async (req,res)=>{
    const {firstName,lastName,email,phone,time,date}=req.body;
    try{
    const savedUser=await user.create({firstName,lastName,email,phone,time,date});
    await savedUser.save();
    res.status(200).json({
        message:"Reservation Created Succesfully",
        data:savedUser
    });
    }catch(err){
        res.status(500).json({
            message:"Internal Server Error",
            data:err
            
        }); 
    }
}
