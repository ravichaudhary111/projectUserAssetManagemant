const express=require("express");
const dotenv=require("dotenv")
const userRoute=require("./router/user.routes");
const app=express();

const PORT=process.env.PORT || 3000
dotenv.config(); 

app.use(express.json());
app.use("/",userRoute);

require('./dbConnection/db');

app.listen(PORT,()=>{
    console.log(`listening app server ${PORT}`)
})