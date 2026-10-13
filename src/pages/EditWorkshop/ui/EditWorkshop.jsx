import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { axiosInstantsUToken } from '../../../services/authApi'

export const EditWorkshop = () => {
	const navigate = useNavigate()
	const onSubmit = async data => {
		try {
			const accessToken = sessionStorage.getItem('access_token')
			await axiosInstantsUToken.put(`/workshop/${id}/`, data, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			})
			navigate('/main')
		} catch (error) {
			console.error('Ошибка при обновлении:', error)
		}
	}

	const fetchData = async () => {
		try {
			const accessToken = sessionStorage.getItem('access_token')
			const response = await axiosInstantsUToken.get('/workshop/', {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			})
			const workshopData = response.data
			setValue('name', workshopData[0].name)
			setValue('phone_number', workshopData[0].phone_number)
			return workshopData
		} catch (error) {
			console.error('Ошибка при загрузке данных:', error)
		}
	}

	const { id } = useParams()
	const { data: workshopData } = useQuery({
		queryKey: ['workshop'],
		queryFn: fetchData,
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm()

	return (
		<section className='p-8'>
			<h1 className='text-3xl font-semibold mb-6'>Редактирование цеха</h1>
			{workshopData && (
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='mb-4'>
						<label
							className='block text-gray-700 text-sm font-bold mb-2'
							htmlFor='name'
						>
							Название цеха
						</label>
						<input
							{...register('name', {
								required: true,
								maxLength: 100,
								minLength: 1,
							})}
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='name'
							type='text'
							placeholder='Введите название цеха'
							defaultValue={workshopData.name}
						/>
						{errors.name && (
							<p className='text-red-500 text-xs italic'>
								Это поле обязательно для заполнения
							</p>
						)}
					</div>
					<div className='mb-4'>
						<label
							className='block text-gray-700 text-sm font-bold mb-2'
							htmlFor='phone_number'
						>
							Номер телефона
						</label>
						<input
							{...register('phone_number', {
								required: true,
								maxLength: 15,
								minLength: 1,
							})}
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='phone_number'
							type='text'
							placeholder='Введите номер телефона'
							defaultValue={workshopData.phone_number}
						/>
						{errors.phone_number && (
							<p className='text-red-500 text-xs italic'>
								Это поле обязательно для заполнения
							</p>
						)}
					</div>
					<button
						type='submit'
						className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
					>
						Обновить
					</button>
				</form>
			)}
		</section>
	)
}
