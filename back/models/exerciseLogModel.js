import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema

const exerciseLogSchema = mongoose.Schema(
    {
        user: {
            type: ObjectId,
            ref: 'User',
            required: true
        },
        exercise: { type: ObjectId, ref: 'Exercise', required: true },
        completed: { type: Boolean, default: false },
        workoutLog: { type: ObjectId, ref: 'WorkoutLog', required: true },
        times: [{
            weight: { type: Number },
            repeat: { type: Number },
            completed: { type: Boolean, default: false },
        }]
    },
    {
        minimize: false,
        timestamps: true
    })


const ExerciseLog = mongoose.model('WorkoutLog', exerciseLogSchema)

export default ExerciseLog