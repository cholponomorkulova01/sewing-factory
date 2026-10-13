import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { axiosInstantsUToken } from '../services/authApi'

const AddProduct = () => {
	const navigate = useNavigate()

	const [selectedImage, setSelectedImage] = useState(null)
	
	const [productData, setProductData] = useState({
		code: '',
		warehouse: '',
		seamstress: '',
		technologist: '',
		iron_worker: '',
		button_attacher: '',
		packer: '',
		is_active: false,
	})

	const [itemData, setItemData] = useState({
		id: '',
		name: '',
		color: '',
		size: '',
		slug: '',
	})

	const handleImageUpload = e => {
		const file = e.target.files[0]
		const reader = new FileReader()

		reader.onloadend = () => {
			const img = reader.result
			setProductData({ ...productData, img })
		}

		reader.readAsDataURL(file)
	}

	const handleProductSubmit = async e => {
		e.preventDefault()

		const newItemData = {
			name: itemData.name,
			color: itemData.color,
			size: itemData.size,
		}

		const requestData = {
			...productData,
			item: newItemData,
		}

		try {
			const token = sessionStorage.getItem('access_token')

			const config = {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}

			const productResponse = await axiosInstantsUToken.post(
				'/product/create/',
				requestData,
				config
			)
			setProductData(productResponse.data)
			navigate('/productList')
			console.log('Product created:', productResponse.data)
		} catch (error) {
			console.error('Product creation failed:', error)
		}
	}

	const handleItemSubmit = async e => {
		e.preventDefault()
		try {
			const itemResponse = await axios.post('/item/create/', itemData)
			setItemData(itemResponse.data)
			console.log('Item created:', itemResponse.data)
		} catch (error) {
			console.error('Item creation failed:', error)
			console.error('Response error:', error.response.data)
			console.error('Status code:', error.response.status)
			console.error('Request error:', error.request)
			console.error('Error:', error.message)
			console.error('Config:', error.config)
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
					<div className='md:w-[528px]'>
						{!selectedImage && (
							<input
								className='w-full h-[405px] border-[0.5px] border-black rounded-lg bg-white block text-white file:text-[20px] file:font-medium file:text-gray-800 cursor-pointer file:hidden'
								id='img'
								type='file'
								name='img'
								required
								onChange={e => {
									// const file = e.target.files[0]
									// setProductData({ ...productData, img: file })
									// setSelectedImage(URL.createObjectURL(file))
									handleImageUpload(e)
								}}
							/>
						)}

						{selectedImage && (
							<div className='w-full h-[405px] mb-4 relative'>
								<img
									src={selectedImage}
									alt='Selected'
									className='w-full h-full object-cover rounded-lg'
								/>
								<button
									onClick={() => {
										setSelectedImage(null)
										setProductData({ ...productData, img: null })
									}}
									className='absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs z-10'
								>
									Удалить
								</button>
							</div>
						)}
					</div>

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
											value={itemData.name}
											onChange={e => {
												setItemData({ ...itemData, name: e.target.value })
											}}
										/>
									</div>

									<div className='h-[0.5px] bg-gray-800 my-4 w-[416px]'></div>

									<div className='flex gap-20'>
										<label
											className='xs:text-[20px] text-medium text-gray-800 font-regular flexStart'
											htmlFor='color'
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
											value={itemData.color}
											onChange={e => {
												setItemData({ ...itemData, color: e.target.value })
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
											value={itemData.size}
											onChange={e => {
												setItemData({ ...itemData, size: e.target.value })
											}}
										/>
									</div>

									<div className='h-[0.5px] bg-gray-800 my-4 w-[416px]'></div>

									<div className='flex gap-14'>
										<label
											htmlFor='slug'
											className='xs:text-[20px] text-medium text-gray-800 font-regular flexStart'
										>
											Slug:
										</label>
										<input
											type='text'
											placeholder='Введите slug'
											className='w-[179px] h-[36px] outline-none border-[1px] border-gray-800 rounded-[6px] text-small pl-4'
											id='slug'
											name='slug'
											required
											value={itemData.slug}
											onChange={e => {
												setItemData({ ...itemData, slug: e.target.value })
											}}
										/>
									</div>

									<button onClick={handleItemSubmit}>Добавить товар</button>
								</form>

								<div className='flex gap-24'>
									<label
										className='xs:text-[20px] text-medium text-gray-800 font-regular flexStart'
										htmlFor='code'
									>
										Код:
									</label>
									<input
										type='number'
										placeholder='Введите код'
										className='w-[179px] h-[36px] outline-none border-[1px] border-gray-800 rounded-[6px] text-small pl-4'
										id='code'
										name='code'
										required
										value={productData.code}
										onChange={e => {
											setProductData({ ...productData, code: e.target.value })
										}}
									/>
								</div>

								<div className='h-[0.5px] bg-gray-800 my-4 w-[416px]'></div>

								<div className='flex gap-10'>
									<label
										className='xs:text-[20px] text-medium text-gray-800 font-regular flexStart'
										htmlFor='warehouse'
									>
										Склад:
									</label>
									<input
										type='text'
										placeholder='Введите склад'
										className='w-[179px] h-[36px] outline-none border-[1px] border-gray-800 rounded-[6px] text-small pl-4'
										id='warehouse'
										name='warehouse'
										required
										value={productData.warehouse}
										onChange={e => {
											setProductData({
												...productData,
												warehouse: e.target.value,
											})
										}}
									/>
								</div>

								<div className='h-[0.5px] bg-gray-800 my-4 w-[416px]'></div>
							</div>
						</div>

						<div>
							<h2 className='xs:text-[28px] text-20px'>Цена</h2>
							<div className='py-12'>
								<div className='flex gap-24'>
									<label
										htmlFor='technologist'
										className='xs:text-[20px] text-medium text-gray-800 font-regular flexStart'
									>
										Цена за технолога:
									</label>
									<input
										type='text'
										className='w-[78px] h-[36px] outline-none border-[1px] border-gray-800 rounded-[6px] text-small pl-4'
										id='technologist'
										name='technologist'
										required
										value={productData.technologist}
										onChange={e => {
											setProductData({
												...productData,
												technologist: e.target.value,
											})
										}}
									/>
								</div>

								<div className='h-[0.5px] bg-gray-800 my-4 w-[416px]'></div>

								<div className='flex gap-24'>
									<label
										htmlFor='seamstress'
										className='xs:text-[20px] text-medium text-gray-800 font-regular flexStart'
									>
										Цена за швею:
									</label>
									<input
										type='text'
										className='w-[78px] h-[36px] outline-none border-[1px] border-gray-800 rounded-[6px] text-small pl-4'
										id='seamstress'
										name='seamstress'
										required
										value={productData.seamstress}
										onChange={e => {
											setProductData({
												...productData,
												seamstress: e.target.value,
											})
										}}
									/>
								</div>

								<div className='h-[0.5px] bg-gray-800 my-4 w-[416px]'></div>

								<div className='flex gap-10'>
									<label
										htmlFor='button_attacher'
										className='xs:text-[20px] text-medium text-gray-800 font-regular flexStart'
									>
										Цена за пуговщика:
									</label>
									<input
										type='text'
										className='w-[78px] h-[36px] outline-none border-[1px] border-gray-800 rounded-[6px] text-small pl-4'
										id='button_attacher'
										name='button_attacher'
										required
										value={productData.button_attacher}
										onChange={e => {
											setProductData({
												...productData,
												button_attacher: e.target.value,
											})
										}}
									/>
								</div>

								<div className='h-[0.5px] bg-gray-800 my-4 w-[416px]'></div>

								<div className='flex gap-20'>
									<label
										htmlFor='iron_worker'
										className='xs:text-[20px] text-medium text-gray-800 font-regular flexStart'
									>
										Цена за утюжника:
									</label>
									<input
										type='text'
										className='w-[78px] h-[36px] outline-none border-[1px] border-gray-800 rounded-[6px] text-small pl-4'
										id='iron_worker'
										name='iron_worker'
										required
										value={productData.iron_worker}
										onChange={e => {
											setProductData({
												...productData,
												iron_worker: e.target.value,
											})
										}}
									/>
								</div>

								<div className='h-[0.5px] bg-gray-800 my-4 w-[416px]'></div>

								<div className='flex gap-14'>
									<label
										htmlFor='packer'
										className='xs:text-[20px] text-medium text-gray-800 font-regular flexStart'
									>
										Цена за упаковщика:
									</label>
									<input
										type='text'
										className='w-[78px] h-[36px] outline-none border-[1px] border-gray-800 rounded-[6px] text-small pl-4'
										id='packer'
										name='packer'
										required
										value={productData.packer}
										onChange={e => {
											setProductData({
												...productData,
												packer: e.target.value,
											})
										}}
									/>
								</div>

								<div className='h-[0.5px] bg-gray-800 my-4 w-[416px]'></div>

								<div className='flex gap-14'>
									<label
										htmlFor='is_active'
										className='xs:text-[20px] text-medium text-gray-800 font-regular flexStart'
									>
										Выберите статус:
									</label>
									<select
										className='w-[82px] h-[36px] border-[0.5px] border-black rounded-lg px-3 text-gray-900 font-medium text-small outline-none mb-4'
										id='is_active'
										name='is_active'
										required
										onChange={e =>
											setProductData({
												...productData,
												is_active: e.target.value === 'true' ? true : false,
											})
										}
										value={productData.is_active ? 'true' : 'false'}
									>
										<option value='true'>true</option>
										<option value='false'>false</option>
									</select>
								</div>
							</div>
						</div>
						<button
							className='bg-primary-blue text-white w-[187px] h-[40px] rounded-lg duration-500 hover:btn_primary_border'
							type='submit'
						>
							Добавить товар
						</button>
					</section>
				</form>
			</section>
		</>
	)
}

export default AddProduct
