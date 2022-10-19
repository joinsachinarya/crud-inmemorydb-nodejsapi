import mongoose from "mongoose";

const newUserSchema = mongoose.Schema(
    {
        name:{type:String,required:true},
        age:Number
    }
)

const User = mongoose.model('users',newUserSchema);
export default User;
