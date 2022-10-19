import express from 'express';
import connectDB from './db/conn.js';
import User from './models/user.js';
const app = express();

app.use(express.json());

app.post("/add",async(req,res)=>{
    let data = new User(req.body);
    let result = await data.save();
    console.log("added");
    res.send(result);
    
})


app.get("/list",async(req,res)=>{
    let data =await User.find(req.body);
    res.send(data);
    console.log(data);
})



app.delete("/delete/:_id",async(req,res)=>{
    let data = await User.deleteOne(req.params);
    res.send(data);
    console.log("deleted");
})



app.put("/update/:_id",async(req,res)=>{
    let data = await User.updateOne(req.params,{ $set: req.body});
    res.send(data);
    console.log("updated");
})








app.listen(1000,()=>{
    connectDB();
    console.log("Server running")
})