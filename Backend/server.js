const express=require("express");
const cors=require("cors");
const app=express();
require("dotenv").config();
app.use(
    cors({
        origin: "*",
        
    })
  );
app.use(express.json());
const dbConnect=require("./config/database")
dbConnect();
const routes=require("./routes/route");
app.use("/api/v1",routes);


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${process.env.PORT}`)
})