import mongoose from "mongoose";

const moveSchema = new mongoose.Schema({
    game: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Game',
        required: true
    },
    player:{
        type:String,
        enum: ['white', 'black'],
        required:true
    },
    moveNumber:{
    type:Number,
        required:true
    },
    notation:{
        type: String,
        required: true,
    }
},{timestamps:true})

const Move = mongoose.Model('Move', moveSchema)

module.exports = Move;