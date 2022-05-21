import { useEffect } from 'react'
import { useMutation, useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'

import { $api } from '../../../api/api'



const SingleExercise = () => {
	const { id } = useParams()


	const { data } = useQuery(
		'get exercise',
		() =>
			$api({
				url: `/exercises/${id}`,
			})
	)

	const { data2 } = useQuery(
		'get log',
		() =>
			$api({
				url: `/exercises/log/${id}`,
			})
	)
	console.log(data)


	return (
		<>
			<div>
				<h1>{data.name}<br />
					{data.times}</h1>
			</div>
		</>
	)
}

export default SingleExercise
