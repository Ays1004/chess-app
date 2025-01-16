import mongoose from "mongoose";

const moveSchema = new mongoose.Schema({
    id:{
        type:String,
        required: true,
    },
    gameId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Game',
        required: true
    },
    from:{
        type: String,
        required:true,
    },
    to:{
        type: String,
        required:true,
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