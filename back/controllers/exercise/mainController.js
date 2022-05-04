// @desc create new exercises
// @route POST /api/users/exercise
// @access Private

import asyncHandler from "express-async-handler"
import Exercise from "../../models/exerciseModel.js"

export const createNewExercise = asyncHandler(async (req, res) => {
    const { name, times, image } = req.body

    const exercise = await Exercise.create({
        name, times, image
    })
    res.json(exercise)
})


