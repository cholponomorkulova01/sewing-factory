import { useQuery } from '@tanstack/react-query'
import { Loader } from '../../../components/Loader'
import { useForm } from 'react-hook-form'
import { fetchStock, createStock } from '../../../api/api'
import { useState } from 'react'

export const Stock = () => {
	const [showForm, setShowForm] = useState(false)
	const {
		data: stockData,
		isLoading,
		isError,
		refetch,
	} = useQuery({
		queryKey: ['stocks'],
		queryFn: fetchStock,
	})

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm()

	const onSubmit = async data => {
		try {
			setShowForm(false)
			await createStock(data)
			refetch()
			reset()
		} catch (error) {
			console.error('Ошибка при создании элемента:', error)
		}
	}

	return (
		<section className='p-8'>
			<h1 className='text-3xl font-semibold mb-6'>Склад</h1>
			{showForm ? (
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='mb-8 flex flex-col w-1/3 mx-auto'
				>
					<label htmlFor='warehouse' className='block mb-2'>
						Warehouse:
					</label>
					<input
						type='number'
						id='warehouse'
						name='warehouse'
						{...register('warehouse', { required: 'Warehouse is required' })}
						className='border rounded p-2 mb-4'
					/>
					{errors.warehouse && (
						<p className='text-red-500'>{errors.warehouse.message}</p>
					)}
					<label htmlFor='raw_material' className='block mb-2'>
						Raw Material:
					</label>
					<input
						type='number'
						id='raw_material'
						name='raw_material'
						{...register('raw_material', {
							required: 'Raw Material is required',
						})}
						className='border rounded p-2 mb-4'
					/>
					{errors.raw_material && (
						<p className='text-red-500'>{errors.raw_material.message}</p>
					)}
					<label htmlFor='quantity' className='block mb-2'>
						Quantity:
					</label>
					<input
						type='number'
						id='quantity'
						name='quantity'
						{...register('quantity')}
						className='border rounded p-2 mb-4'
					/>
					{errors.quantity && (
						<p className='text-red-500'>{errors.quantity.message}</p>
					)}
					<button
						type='submit'
						className='bg-blue-500 text-white font-bold py-2 px-4 rounded'
					>
						Add Stock
					</button>
				</form>
			) : (
				<button
					className='bg-blue-500 text-white font-bold py-2 px-4 rounded'
					onClick={() => setShowForm(true)}
				>
					Create Stock
				</button>
			)}
			{isLoading && <Loader />}
			{isError && <p>Error fetching data</p>}
			{stockData && (
				<div>
					{stockData?.map(item => (
						<div key={item.id} className='border rounded p-4 my-4 shadow-md'>
							<p>ID: {item.id}</p>
							<p>Warehouse: {item.warehouse}</p>
							<p>Raw Material: {item.raw_material}</p>
							<p>Quantity: {item.quantity}</p>
						</div>
					))}
				</div>
			)}
		</section>
	)
}
