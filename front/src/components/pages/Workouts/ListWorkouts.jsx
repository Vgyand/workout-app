import { useNavigate } from 'react-router-dom'
import { useMutation, useQuery } from 'react-query'
import Loader from '../../ui/Loader'
import { $api } from '../../../api/api'
import Layout from '../../common/Layout'
import Alert from '../../ui/Alert/Alert'


const ListWorkouts = () => {
	const nav = useNavigate()

	const { data, isSuccess } = useQuery(
		'get workouts',
		() =>
			$api({
				url: `/workouts`,
			}),
		{
			refetchOnWindowFocus: false,
		}
	)

	const {
		mutate: createWorkoutLog,
		isLoading,
		isSuccess: isSuccessMutate,
		error,
	} = useMutation(
		'Create new workout log',
		({ workoutId }) =>
			$api({
				url: '/workouts/log',
				type: 'POST',
				body: { workoutId },
			}),
		{
			onSuccess(data) {
				nav(`/workout/${data._id}`)
			},
		}
	)

	return (
		<>
			<Layout />
			<div>
				{error && <Alert type='error' text={error} />}
				{isSuccessMutate && <Alert text='Workout log created' />}
				{isLoading && <Loader />}
				{isSuccess && (
					<div>
						{data.map((workout, idx) => (
							<div key={`workout ${idx}`}>
								<button
									aria-label='Create new workout'
									onClick={() =>
										createWorkoutLog({
											workoutId: workout._id,
										})
									}
								>
									<span>{workout.name}</span>
								</button>
							</div>
						))}
					</div>
				)}
				{isSuccess && data?.length === 0 && (
					<Alert type='warning' text='Workouts not found' />
				)}
			</div>
		</>
	)
}

export default ListWorkouts
