import express from 'express'
import { createNewExerciseLog } from '../controllers/exercise/log/createController.js'
import { getExerciseLog } from '../controllers/exercise/log/getController.js'
import { updateCompleteExerciseLog, updateExerciseLog } from '../controllers/exercise/log/updateController.js'
import { createNewExercise, deleteExercise, getExercises, getSingleExercises, updateExercise } from '../controllers/exercise/mainController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(protect, createNewExercise)
router.route('/').put(protect, updateExercise)
router.route('/').delete(protect, deleteExercise)
router.route('/').get(protect, getExercises)
router.route('/:id').get(protect, getSingleExercises)

router.route('/log/completed').put(protect, updateCompleteExerciseLog)
router.route('/log').post(protect, createNewExerciseLog)
router.route('/log').put(protect, updateExerciseLog)
router.route('/log/:id').get(protect, getExerciseLog)


export default router