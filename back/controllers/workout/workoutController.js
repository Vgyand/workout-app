// @desc create new workout
// @route POST /api/workouts
// @access Private

import asyncHandler from "express-async-handler"
import Workout from "../../models/workoutModel.js"

export const createNewWorkout = asyncHandler(async (req, res) => {
    const { name, exerciseIds } = req.body

    const workout = await Workout.create({
        name,
        exercises: exerciseIds
    })
    res.json(workout)
})


// @desc Get new workout
// @route POST /api/workouts/:id
// @access Private

export const getWorkout = asyncHandler(async (req, res) => {
    const workout = await Workout.findById(req.params.id).populate('exercises').lean()

    const minutes = Math.ceil(workout.exercises.length * 3.7)
    res.json({ ...workout, minutes })
})


// @desc Update workout
// @route PUT /api/workouts
// @access Private


export const updateWorkout = asyncHandler(async (req, res) => {
    const { name, exerciseIds, workoutId } = req.body


    const workout = await Workout.findById(workoutId)

    if (!workout) {
        res.status(404)
        throw new Error('trenya ne naiden')
    }

    workout.name = name
    workout.exercises = exerciseIds


    const updatedWokrout = await workout.save()

    res.json(updatedWokrout)
})