import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { axiosInstantsUToken } from '../services/authApi'

const Material = () => {

    const navigate = useNavigate()

    const token = sessionStorage.getItem("access_token");
	
	const [materialData, setMaterialData] = useState({
		name: '',
		unit: '',
		color: '',
		weight: '',
		length: '',
		count: '',
		size: '',
		other: '',
	})

	const handleProductSubmit = async e => {
		e.preventDefault()

		try {
			const materialResponse = await axiosInstantsUToken.post(
				'/material/create/',  {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  },
			)
			setMaterialData(materialResponse.data)
			navigate('/materialList')
			console.log('Product created:', materialResponse.data)
		} catch (error) {
			console.error('Product creation failed:', error)
		}
	}

    return (
        <>
			<Header />

			<section className='padding-container max-container'>
				<form
					className='flex flex-col md:flex-row md:gap-12 my-12'
					onSubmit={handleProductSubmit}
				>
					<section className='md:pl-12 md:pt-0 pt-12'>
						<div>
							<h2 className='xs:text-[28px] text-20px'>Описание</h2>
							<div className='py-12'>
								<form>
									<div className='flex gap-24'>
										<label
											className='xs:text-[20px] text-medium text-gray-800 font-regular flexStart'
											htmlFor='name'
										>
											Название:
										</label>
										<input
											type='text'
											placeholder='Введите название'
											className='w-[179px] h-[36px] outline-none border-[1px] border-gray-800 rounded-[6px] text-small pl-4'
											id='name'
											name='name'
											required
											value={materialData.name}
											onChange={e => {
												setMaterialData({ ...materialData, name: e.target.value })
											}}
										/>
									</div>

									<div className='h-[0.5px] bg-gray-800 my-4 w-[416px]'></div>

									<div className='flex gap-20'>
										<label
											className='xs:text-[20px] text-medium text-gray-800 font-regular flexStart'
											htmlFor='unit'
										>
											единица
										</label>
										<input
											type='text'
											placeholder='Введите единицу'
											className='w-[179px] h-[36px] outline-none border-[1px] border-gray-800 rounded-[6px] text-small pl-4'
											id='unit'
											name='unit'
											required
											value={materialData.unit}
											onChange={e => {
												setMaterialData({ ...materialData, unit: e.target.value })
											}}
										/>
									</div>

									<div className='h-[0.5px] bg-gray-800 my-4 w-[416px]'></div>

									<div className='flex gap-14'>
										<label
											htmlFor='size'
											className='xs:text-[20px] text-medium text-gray-800 font-regular flexStart'
										>
											Размер:
										</label>
										<input
											type='text'
											placeholder='Введите размер'
											className='w-[179px] h-[36px] outline-none border-[1px] border-gray-800 rounded-[6px] text-small pl-4'
											id='size'
											name='size'
											required
											value={materialData.size}
											onChange={e => {
												setMaterialData({ ...materialData, size: e.target.value })
											}}
										/>
									</div>

									<div className='h-[0.5px] bg-gray-800 my-4 w-[416px]'></div>

									<div className='flex gap-14'>
										<label
											htmlFor='color'
											className='xs:text-[20px] text-medium text-gray-800 font-regular flexStart'
										>
											Цвет:
										</label>
										<input
											type='text'
											placeholder='Введите цвет'
											className='w-[179px] h-[36px] outline-none border-[1px] border-gray-800 rounded-[6px] text-small pl-4'
											id='color'
											name='color'
											required
											value={materialData.color}
											onChange={e => {
												setMaterialData({ ...materialData, color: e.target.value })
											}}
										/>
									</div>

                                    <div className='flex gap-14'>
										<label
											htmlFor='weight'
											className='xs:text-[20px] text-medium text-gray-800 font-regular flexStart'
										>
											weight:
										</label>
										<input
											type='text'
											placeholder='Введите weight'
											className='w-[179px] h-[36px] outline-none border-[1px] border-gray-800 rounded-[6px] text-small pl-4'
											id='weight'
											name='weight'
											required
											value={materialData.weight}
											onChange={e => {
												setMaterialData({ ...materialData, weight: e.target.value })
											}}
										/>
									</div>

                                    <div className='flex gap-14'>
										<label
											htmlFor='other'
											className='xs:text-[20px] text-medium text-gray-800 font-regular flexStart'
										>
											other:
										</label>
										<input
											type='text'
											placeholder='Введите other'
											className='w-[179px] h-[36px] outline-none border-[1px] border-gray-800 rounded-[6px] text-small pl-4'
											id='other'
											name='other'
											required
											value={materialData.other}
											onChange={e => {
												setMaterialData({ ...materialData, other: e.target.value })
											}}
										/>
									</div>

                                    <div className='flex gap-14'>
										<label
											htmlFor='length'
											className='xs:text-[20px] text-medium text-gray-800 font-regular flexStart'
										>
											weilengthght:
										</label>
										<input
											type='text'
											placeholder='Введите length'
											className='w-[179px] h-[36px] outline-none border-[1px] border-gray-800 rounded-[6px] text-small pl-4'
											id='weight'
											name='length'
											required
											value={materialData.length}
											onChange={e => {
												setMaterialData({ ...materialData, length: e.target.value })
											}}
										/>
									</div>

                                    <div className='flex gap-14'>
										<label
											htmlFor='count'
											className='xs:text-[20px] text-medium text-gray-800 font-regular flexStart'
										>
											count:
										</label>
										<input
											type='text'
											placeholder='Введите count'
											className='w-[179px] h-[36px] outline-none border-[1px] border-gray-800 rounded-[6px] text-small pl-4'
											id='count'
											name='count'
											required
											value={materialData.count}
											onChange={e => {
												setMaterialData({ ...materialData, count: e.target.value })
											}}
										/>
									</div>

									<button onClick={handleProductSubmit}>Добавить товар</button>
								</form>
							</div>
						</div>		
					</section>
				</form>
			</section>
		</>
    )
}

export default Material