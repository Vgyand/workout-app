import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const exerciseSchema = mongoose.Schema({
    name: { type: String, required: true },
    times: {
        type: Number,
        required: true,
    },
    images: {
        type: String,
        required: true,
    }
},
    {
        minimize: false,
        timestamps: true
    })


const Exercise = mongoose.model('Exercise', exerciseSchema)

export default Exercise