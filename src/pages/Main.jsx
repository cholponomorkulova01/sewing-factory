import { useState, useEffect } from 'react'
import { axiosInstantsUToken } from '../services/authApi'
import { Link } from 'react-router-dom'
import profile_pic from '../img/profile-pic.svg'
import menuMeatballs from '../img/Menu-Meatballs.svg'
import Header from '../components/Header'

const Main = () => {
	const [workshop, setWorkshop] = useState([])

	useEffect(() => {
		axiosInstantsUToken
			.get('/workshop/')
			.then(res => {
				setWorkshop(res.data)
			})
			.catch(error => {
				console.log(error)
			})
	}, [])

	return (
		<div>
			<Header />
			<div className='padding-container max-container'>
				{workshop?.map(item => (
					<div
						className='border-[0.5px] border-[#555555] xs:rounded-lg rounded-[4px] px-4 py-4 my-10 flex flex-col xl:flex-row xl:items-center xl:justify-between'
						key={item?.id}
					>
						<div className='flex items-center mb-6 lg:mb-0 xs:gap-6 gap-3'>
							<img
								src={profile_pic}
								alt='profile'
								className='xs:w-[75px] xs:h-[75px] w-[48px] h-[48px] cursor-pointer border-[0.5px] border-gray-700 rounded-full p-[2px]'
							/>
							<div>
								<h1 className='cursor-pointer xs:text-secondary-medium text-medium font-regular'>
									{item?.name}
								</h1>
								<p className='cursor-pointer text-gray-600 xs:text-[20px] text-small font-regular'>
									{item?.phone_number}
								</p>
							</div>
						</div>

						<div className='flexBetween gap-24'>
							<div>
								<Link
									to='/employeeProfile'
									className='bg-gray-100 py-3 px-4 xs:py-2 text-medium font-regular shadow-md rounded-lg'
								>
									Подробнее
								</Link>
							</div>

							<div>
								<Link
									to={`/edit-workshop/${item?.id}`}
									className='bg-gray-100 py-3 px-4 xs:py-2 text-medium font-regular shadow-md rounded-lg mr-4'
								>
									Редактировать
								</Link>
							</div>

							<div>
								<img
									src={menuMeatballs}
									alt='icon'
									className='cursor-pointer xs:w-[28px] h-[5px] w-[25px]'
								/>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Main
