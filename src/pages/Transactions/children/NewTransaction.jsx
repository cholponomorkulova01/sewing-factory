import { useForm } from 'react-hook-form'

export const NewTransaction = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const onSubmit = data => {
		console.log(data)
	}

	return (
		<section className='p-8'>
			<h1 className='text-3xl font-semibold mb-6'>Добавить новую транзакцию</h1>

			<form
				onSubmit={handleSubmit(onSubmit)}
				className='bg-white shadow-md rounded-lg p-6'
			>
				<div className='mb-4'>
					<label
						htmlFor='wallet'
						className='block text-gray-700 text-sm font-bold mb-2'
					>
						Выберите кошелек
					</label>
					<select
						id='wallet'
						name='wallet'
						className='border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:border-blue-500'
						{...register('wallet', { required: true })}
					>
						<option value='wallet1'>Кошелек 1</option>
						<option value='wallet2'>Кошелек 2</option>
					</select>
					{errors.wallet && (
						<span className='text-red-500'>
							Поле "Выберите кошелек" обязательно для заполнения
						</span>
					)}
				</div>

				<div className='mb-4'>
					<label
						htmlFor='amount'
						className='block text-gray-700 text-sm font-bold mb-2'
					>
						Сумма
					</label>
					<input
						type='number'
						id='amount'
						name='amount'
						className='border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:border-blue-500'
						{...register('amount', { required: true })}
					/>
					{errors.amount && (
						<span className='text-red-500'>
							Поле "Сумма" обязательно для заполнения
						</span>
					)}
				</div>

				<div className='mb-4'>
					<label
						htmlFor='description'
						className='block text-gray-700 text-sm font-bold mb-2'
					>
						Описание
					</label>
					<textarea
						id='description'
						name='description'
						rows='4'
						className='border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:border-blue-500 resize-none'
						{...register('description')}
					></textarea>
				</div>

				<button
					type='submit'
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
				>
					Добавить транзакцию
				</button>
			</form>
		</section>
	)
}
