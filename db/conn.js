import mongoose from 'mongoose';

const connectDB=()=>{
    try {
        mongoose.connect("mongodb://localhost:27017/ss");
        console.log("Connected to db");
    } catch (error) {
        console.log("db connection error");
    }
}
export default connectDB;