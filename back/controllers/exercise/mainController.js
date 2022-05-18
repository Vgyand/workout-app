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


// @desc delete exercises
// @route DELETE /api/exercises
// @access Private



export const deleteExercise = asyncHandler(async (req, res) => {
    const { exerciseId } = req.body


    const exercise = await Exercise.findById(exerciseId)

    if (!exercise) {
        res.status(404)
        throw new Error('yproj ne naiden')
    }

    await exercise.remove()

    res.json({ message: 'ypr ydaloeno' })
})


// @desc Get exercises
// @route get /api/exercises
// @access Private

export const getExercises = asyncHandler(async (req, res) => {
    const exercises = await Exercise.find({})

    res.json(exercises)
})


// @desc Get exercises
// @route get /api/exercises/:id
// @access Private

export const getSingleExercises = asyncHandler(async (req, res) => {
    const exercise = await Exercise.find({ name: req.params.id })
    console.log(req.params.id)

    res.json(exercise)
})