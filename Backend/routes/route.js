const express=require("express");
const router=express.Router();

const {reserve}=require("../controllers/reserve")
router.get("/",(req,res)=>{
    res.send("This is Home page")
});
router.post("/reserve",reserve);
module.exports=router;