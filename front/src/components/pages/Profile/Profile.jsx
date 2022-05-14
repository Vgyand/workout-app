import Counters from '../../common/ui/Counters/Counters'
import { useQuery } from 'react-query'
import { $api } from '../../../api/api'
import Layout from '../../common/Layout'
import style from './Profile.module.sass'

const Profile = () => {
	const { data, isSuccess } = useQuery(
		'home page counters',
		() =>
			$api({
				url: '/users/profile',
			}),
		{
			refetchOnWindowFocus: false,
		}
	)


	return (

		<Layout>
			<div>
				<div className={style.profile}>
					<h1>
						Profile
					</h1>
					{isSuccess && <h1>{data.email}</h1>}

				</div>
				{isSuccess && (
					<Counters
						minutes={data.minutes}
						workouts={data.workouts}
						kgs={data.kgs}
					/>
				)}
			</div>
		</Layout>
	)
}

export default Profile
