import { useEffect } from 'react'
import { useMutation, useQuery } from 'react-query'
import Alert from '../../common/ui/Alert/Alert'
import { Link, useNavigate } from 'react-router-dom'
import style from './SingleWorkout.module.sass'
import { $api } from '../../../api/api'
import { useParams } from 'react-router-dom'
import Loader from '../../common/ui/Loader'
import Layout from '../../common/Layout'


const SingleWorkout = () => {

	const { id } = useParams()
	const nav = useNavigate()

	const { data, isSuccess, isLoading } = useQuery('get workout', () =>
		$api({
			url: `/workouts/${id}`,
		})
	)

	const { mutate: setWorkoutCompleted, error: errorCompleted } = useMutation(
		'Change log state',
		() =>
			$api({
				url: '/workouts/log/completed',
				type: 'PUT',
				body: { logId: id },
			}),
		{
			onSuccess() {
				nav('/workouts')
			},
		}
	)

	useEffect(() => {
		if (
			isSuccess &&
			data?.exercises &&
			data.exercises.length ===
			data.exercises.filter(log => log.completed).length &&
			data._id === id

		) {
			setWorkoutCompleted()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data?.exercises])


	return (
		<Layout>
			<div>
				<div >
					{isSuccess && (
						<div>
							<time>{data.minutes + ' min.'}</time>
							<h1>{data.name}</h1>
						</div>
					)}
				</div>
				<div>
					<div>
						{errorCompleted && <Alert type='error' text={errorCompleted} />}
					</div>
					{isLoading || (isSuccess && data._id !== id) ? (
						<Loader />
					) : (
						<div >
							{data.exercises.map((exLog, idx) => {
								return (
									<div key={`ex log ${idx}`} >
										<div>
											<Link to={`/exercises/${exLog.name}`}>
												<span>{exLog.name}</span>
											</Link>
										</div>
										{idx % 2 !== 0 && idx !== data.exercises.length - 1 && (
											<div></div>
										)}
									</div>
								)
							})}
						</div>
					)}

					{isSuccess && data?.length === 0 && (
						<Alert type='warning' text='Exercises not found' />
					)}
				</div>
			</div>

		</Layout>
	)
}

export default SingleWorkout
