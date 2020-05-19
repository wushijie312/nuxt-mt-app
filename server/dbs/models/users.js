import mongoose from 'mongoose'
const Schema=mongoose.Schema
const UserSchema=new Schema({
    username:{
        type:String,
        unique:true,
        reqire:true
    },
    paddword:{
        type:String,
        reqire:true
    },
    email:{
        type:String,
        reqire:true
    }
})
export default mongoose.model('User',UserSchema);