import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import form_bg_center from '../img/form-bg-center.svg'
import form_bg_regis_right from '../img/form-bg-regis-right.svg'
import { axiosInstantsUToken } from '../services/authApi'

const Register = () => {
	const navigate = useNavigate()

	const [formData, updateFormData] = useState({
		username: '',
		password: '',
		password2: '',
		phone_number: '',
		role: '',
		first_name: '',
		last_name: '',
	})

	const handleChange = e => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		})
	}

	const handleFormSubmit = e => {
		e.preventDefault()
		console.log(formData)

		axiosInstantsUToken
			.post(`/register/`, {
				username: formData.username,
				first_name: formData.username,
				last_name: formData.last_name,
				password2: formData.password2,
				phone_number: formData.phone_number,
				role: formData.role,
				password: formData.password,
			})
			.then(res => {
				navigate('/employeeProfile')
				console.log(res)
				console.log(res.data)
			})
	}

	return (
		<>
			<section className='relative overflow-hidden'>
				<img
					src={form_bg_center}
					alt='img'
					className='absolute top-0 left-0 w-full h-full object-cover z-20'
				/>
				<div className='flex justify-center relative z-30'>
					<form
						className='bg-white sm:w-[584px] sm:h-auto w-[351px] h-auto border-[0.5px] border-black sm:rounded-2xl rounded-lg flex flex-col items-center mt-[150px]'
						onSubmit={handleFormSubmit}
					>
						<h2 className='sm:text-large text-[20px] font-medium sm:mt-12 mt-6'>
							Зарегистрировать сотрудника
						</h2>
						<div>
							<label
								className='block text-gray-600 sm:text-medium text-[15px] font-medium mb-2 mt-4'
								htmlFor='first_name'
							>
								Имя
							</label>
							<input
								className={`sm:w-[416px] w-[327px] h-[41px] border-[0.5px] border-black rounded-lg px-3 text-gray-900 font-medium text-small outline-none`}
								id='first_name'
								type='text'
								name='first_name'
								placeholder='Введите имя'
								required
								onChange={handleChange}
								value={formData.first_name}
							/>
						</div>
						<div>
							<label
								className='block text-gray-600 sm:text-medium text-[15px] font-medium mb-2 mt-4'
								htmlFor='last_name'
							>
								Фамилия
							</label>
							<input
								className={`sm:w-[416px] w-[327px] h-[41px] border-[0.5px] border-black rounded-lg px-3 text-gray-900 font-medium text-small outline-none`}
								id='last_name'
								type='text'
								name='last_name'
								placeholder='Введите фамилию'
								required
								onChange={handleChange}
								value={formData.last_name}
							/>
						</div>
						<div>
							<label
								className='block text-gray-600 sm:text-medium text-[15px] font-medium mb-2 mt-4'
								htmlFor='username'
							>
								ИНН
							</label>
							<input
								className={`sm:w-[416px] w-[327px] h-[41px] border-[0.5px] border-black rounded-lg px-3 text-gray-900 font-medium text-small outline-none mb-4`}
								id='username'
								type='number'
								name='username'
								placeholder='Введите ИНН'
								required
								minLength={14}
								onChange={handleChange}
								value={formData.username}
							/>
						</div>

						<div>
							<label
								className='block text-gray-600 sm:text-medium text-[15px] font-medium mb-2'
								htmlFor='phone_number'
							>
								Номер телефона
							</label>
							<input
								className='sm:w-[416px] w-[327px] h-[41px] border-[0.5px] border-black rounded-lg px-3 text-gray-900 font-medium text-small outline-none mb-4'
								id='phone_number'
								type='number'
								name='phone_number'
								placeholder='Введите номер телефона'
								required
								onChange={handleChange}
								value={formData.phone_number}
							/>
						</div>

						<div>
							<label
								className='block text-gray-600 sm:text-medium text-[15px] font-medium mb-2'
								htmlFor='role'
							>
								Роль
							</label>
							<select
								className='sm:w-[416px] w-[327px] h-[41px] border-[0.5px] border-black rounded-lg px-3 text-gray-900 font-medium text-small outline-none mb-4'
								id='role'
								name='role'
								required
								onChange={handleChange}
								value={formData.role}
								defaultValue=''
							>
								<option value='' disabled hidden>
									Выберите роль
								</option>
								<option id='technologist'>technologist</option>
								<option id='seamstress'>seamstress</option>
								<option id='iron_worker'>iron_worker</option>
								<option id='button_attacher'>button_attacher</option>
								<option id='packer'>packer</option>
								<option id='Warehouseman'>Warehouseman</option>
								<option id='Cutter'>Cutter</option>
							</select>
						</div>

						<div>
							<label
								className='block text-gray-600 sm:text-medium text-[15px] font-medium mb-2'
								htmlFor='password'
							>
								Пароль
							</label>
							<div className='relative'>
								<input
									className={`sm:w-[416px] w-[327px] h-[41px] border-[0.5px] border-black rounded-lg px-3 text-gray-900 font-medium text-small outline-none mb-4`}
									id='password'
									type='password'
									name='password'
									placeholder='Введите пароль'
									required
									minLength={8}
									value={formData.password}
									onChange={handleChange}
								/>
							</div>
						</div>

						<div>
							<label
								className='block text-gray-600 sm:text-medium text-[15px] font-medium mb-2'
								htmlFor='password2'
							>
								Подтвердите пароль
							</label>
							<div className='relative'>
								<input
									className={`sm:w-[416px] w-[327px] h-[41px] border-[0.5px] border-black rounded-lg px-3 text-gray-900 font-medium text-small outline-none mb-4`}
									id='password2'
									type='password'
									name='password2'
									placeholder='Подтвердите пароль'
									required
									minLength={8}
									value={formData.password2}
									onChange={handleChange}
								/>
							</div>
						</div>

						<button
							className='btn_primary_blue_regis hover:btn_primary_border cursor-pointer'
							type='submit'
						>
							Зарегистрировать
						</button>

						<Link
							to='/login'
							className='sm:text-small text-[12px] font-medium underline pb-4'
						>
							Уже есть аккаунт? Войти
						</Link>
					</form>
				</div>
				<img
					src={form_bg_regis_right}
					alt='img'
					className='absolute top-0 right-0 sm:w-[1000px] sm:h-[1100px] w-[600px] h-[600px] object-cover z-10'
				/>
			</section>
		</>
	)
}

export default Register
