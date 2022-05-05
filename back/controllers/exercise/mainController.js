// @desc create new exercises
// @route POST /api/exercise
// @access Private

import asyncHandler from "express-async-handler"
import Exercise from "../../models/exerciseModel.js"

export const createNewExercise = asyncHandler(async (req, res) => {
    const { name, times, imageIndex } = req.body

    const exercise = await Exercise.create({
        name, times, imageIndex
    })
    res.json(exercise)
})

// @desc update exercises
// @route PUT /api/exercises
// @access Private



export const updateExercise = asyncHandler(async (req, res) => {
    const { name, times, imageIndex, exerciseId } = req.body


    const exercise = await Exercise.findById(exerciseId)

    if (!exercise) {
        res.status(404)
        throw new Error('yproj ne naiden')
    }

    exercise.name = name
    exercise.times = times
    exercise.image = imageIndex


    const updatedExercise = await exercise.save()

    res.json(updatedExercise)
})
