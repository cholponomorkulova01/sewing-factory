import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { productStatus } from '../constants'
import hicon2 from '../img/Hicon2.svg'
import menuMeatballs from '../img/Menu-Meatballs.svg'
import search_icon from '../img/Search.svg'
import profile_pic from '../img/profile-pic.svg'
import { axiosInstantsUToken } from '../services/authApi'

const AdminProfile = () => {
	const navigate = useNavigate()
	const [employee, setEmployee] = useState()
	const [admin, setAdmin] = useState([])
	const [wallet, setWallet] = useState([])

	useEffect(() => {
		const token = sessionStorage.getItem('access_token')

		const fetchUserProfile = async () => {
			try {
				const profileResponse = await axiosInstantsUToken.get(
					'/users/profile/',
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				)
				setAdmin(profileResponse.data)
				console.log(profileResponse.data)

				// Можете добавить проверку роли и использовать navigate внутри этого блока
				// if(role === 'director'){
				//     navigate('/adminProfile')
				// } else {
				//     navigate('/employeeProfile')
				// }
			} catch (error) {
				console.error(error)
			}

			try {
				const usersResponse = await axiosInstantsUToken.get('/users/', {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				setEmployee(usersResponse.data)
				console.log(usersResponse.data)
			} catch (error) {
				console.error(error)
			}

			try {
				const fetchWallet = await axiosInstantsUToken.get('/wallet/', {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				setWallet(fetchWallet.data)
			} catch (e) {
				console.log(e)
			}
		}

		fetchUserProfile()
	}, [])

	const handleDelete = username => {
		const token = sessionStorage.getItem('access_token')

		axiosInstantsUToken
			.delete(`/users/${username}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then(res => {
				window.location.reload()
				navigate('/employee')
				console.log(res.data)
			})
			.catch(error => {
				console.error('Delete error:', error)
			})
	}

	return (
		<>
			<div>
				<Header />
				<div className='mt-12 padding-container max-container'>
			
					<div className='mt-12'>
						<h1 className='xs:text-[28px] text-[20px] font-medium'>
							Список сотрудников
						</h1>

						<div className='560:flexBetween block border-[0.5px] border-[#555555] rounded-lg px-4 py-4 my-12'>
							<div className='bg-white border-[0.5px] border-[#555555] 340:w-[260px] w-[230px] h-[40px] flexStart rounded-[6px] 560:mb-0 mb-4'>
								<img src={search_icon} alt='#' className='p-4 cursor-pointer' />
								<input
									type='text'
									placeholder='Искать сотрудника по имени'
									className='outline-none w-full text-small font-regular'
								/>
							</div>

							<div className='560:flexBetween flexStart gap-[6px]'>
								<img src={hicon2} alt='icon' className='cursor-pointer' />
								<Link
									to='/register'
									className='flexBetween bg-primary-blue text-white text-medium font-medium py-2 px-6 xs:rounded-[6px] rounded-[4px] duration-500 hover:btn_primary_border cursor-pointer w-[150px]'
								>
									<FontAwesomeIcon icon={faPlus} />
									<button>Добавить</button>
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div className='flex flex-col items-center justify-around padding-container max-container'>
					{employee?.map(item => (
						<div
							className='w-full border-[0.5px] border-[#555555] xs:rounded-lg rounded-[4px] px-4 py-4 my-10 flex flex-col xl:flex-row xl:items-center xl:justify-between'
							key={item.id}
						>
							<div className='flex items-center mb-6 lg:mb-0 xs:gap-6 gap-3'>
								<img
									src={profile_pic}
									alt='profile'
									className='xs:w-[75px] xs:h-[75px] w-[48px] h-[48px] cursor-pointer border-[0.5px] border-gray-700 rounded-full p-[2px]'
								/>
								<div>
									<div className='340:flexBetween block gap-2'>
										<h1 className='cursor-pointer xs:text-secondary-medium text-medium font-regular'>
											{item.last_name}
										</h1>
										<h1 className='cursor-pointer xs:text-secondary-medium text-medium font-regular'>
											{item.first_name}
										</h1>
									</div>
									<p className='cursor-pointer text-gray-600 xs:text-[20px] text-small font-regular'>
										{item.username}
									</p>
								</div>
							</div>

							<div className='flexCenter sm:gap-28 xs:gap-6 gap-4'>
								<div className='text-center mb-6 lg:mb-0'>
									<h1 className='xs:text-secondary-medium text-medium font-medium'>
										{item.role}
									</h1>
									<p className='text-gray-600 xs:text-[20px] text-small font-regular'>
										{item.work_status}
									</p>
								</div>

								<div className='text-center mb-6 lg:mb-0'>
									<p className='text-gray-600 xs:text-[20px] text-small font-regular'>
										{item.work_status}
									</p>
								</div>
							</div>

							<div className='flexBetween gap-24'>
								<div className='flexBetween gap-4'>
									<Link
										to='/employeeProfile'
										className='bg-gray-100 py-3 px-4 xs:py-2 text-medium font-regular shadow-md rounded-lg'
									>
										Подробнее
									</Link>
									<Link
										to={`/editEmployee${item.username}`}
										className='bg-green-700 text-white py-3 px-4 xs:py-2 text-medium font-regular shadow-md rounded-lg'
									>
										Изменить
									</Link>
									<button
										onClick={() => handleDelete(item.username)}
										className='bg-red-700 text-white py-3 px-4 xs:py-2 text-medium font-regular shadow-md rounded-lg'
									>
										Удалить
									</button>
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
		</>
	)
}

export default AdminProfile
