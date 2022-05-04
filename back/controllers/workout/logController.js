
import asyncHandler from "express-async-handler"
import WorkoutsLog from "../../models/workoutLogModel.js"


// @desc Create new workout Log
// @route POST /api/users/workouts/log
// @access Private


export const createNewWorkoutLog = asyncHandler(async (req, res) => {


    const { workoutId } = req.body

    const workoutLog = await WorkoutsLog.create({
        user: req.user._id,
        workout: workoutId,

    })
    res.json(workoutLog)
})
