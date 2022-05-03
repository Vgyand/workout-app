
import asyncHandler from "express-async-handler"
import ExerciseLog from "../../models/exerciseLogModel.js"
import Exercise from "../../models/exerciseModel.js"
// @desc Add new exerciseLog
// @route POST /api/users/exercises/log
// @access Private


export const addNewExerciseLog = asyncHandler(async (req, res) => {
    const { exerciseId, times } = req.body

    let timesArray = []

    const prevExercises = await ExerciseLog.find({ user: req.user._id, exercise: exerciseId }).sort('desc')


    if (prevExercises[0]) {
        timesArray = prevExercises[0].times
    } else {
        for (let i = 0; i < times; i++) {
            timesArray.push({
                weight: 0,
                repeat: 0
            })
        }

    }


    console.log(times)

    const exerciseLog = await ExerciseLog.create({
        user: req.user._id,
        exercise: exerciseId,
        times: timesArray
    })
    res.json(exerciseLog)
})