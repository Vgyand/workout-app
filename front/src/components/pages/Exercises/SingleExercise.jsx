import { useEffect } from 'react'
import { useMutation, useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'

import debounce from 'lodash.debounce'

import { $api } from '../../../api/api'



const SingleExercise = () => {
	const { id } = useParams()
	const nav = useNavigate()


	const { data, isSuccess, refetch, isLoading } = useQuery(
		'get exercise',
		() =>
			$api({
				url: `/exercises/${id}`,
			})
	)

	console.log(data)


	return (
		<>
			<div>

				<h1>jija</h1>
			</div>
		</>
	)
}

export default SingleExercise
