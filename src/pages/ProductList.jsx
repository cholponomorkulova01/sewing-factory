import Header from '../components/Header'
import menuMeatballs from '../img/Menu-Meatballs.svg'
import { productDetails } from '../constants'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import t_shirt from '../img/t-shirt.svg'
import { Link } from 'react-router-dom'
import { useEffect, useState, Fragment } from 'react'
import { axiosInstantsUToken } from '../services/authApi'
import { NoProduct } from '../shared/NoProduct/NoProduct'

const ProductList = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const token = sessionStorage.getItem('access_token')
				if (token) {
					const config = {
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}

					const res = await axiosInstantsUToken.get('/product/', config)
					setProducts(res.data)
				}
			} catch (error) {
				console.error(error)
			}
		}

		fetchProducts()
	}, [])

	return (
		<>
			<Header />
			<div className='padding-container max-container'>
				<div className='mt-12'>
					<div className='xs:flexBetween block'>
						<h1 className='xs:text-[28px] text-[20px] font-medium'>
							Список товаров
						</h1>

						<Link
							to='/addProduct'
							className='flexBetween bg-primary-blue text-white xs:text-medium text-small font-medium xs:w-[135px] xs:h-[39px] w-[108px] h-[31px] rounded-lg duration-500 hover:btn_primary_border cursor-pointer xs:my-0 my-6 xs:px-4 px-2'
						>
							<FontAwesomeIcon icon={faPlus} />
							<button>Добавить</button>
						</Link>
					</div>
				</div>

				<div>
					<div className='flex flex-col lg:flex-row lg:gap-[148px] gap-8 mt-12'>
						{productDetails?.map(item => (
							<h1
								className='xs:text-[18px] text-[12px] text-gray-600'
								key={item?.id}
							>
								{item?.title}
							</h1>
						))}
					</div>
					<div className='max-container padding-container h-[1px] bg-gray-700 my-4'></div>
					{products?.length === 0 ? (
						<NoProduct />
					) : (
						products?.map(item => (
							<div key={item?.id}>
								<div className='px-4 py-4 my-6 flex flex-col lg:flex-row lg:items-center lg:justify-between'>
									<div className='flex items-center mb-6 lg:mb-0 gap-6'>
										<img
											src={t_shirt}
											alt='product'
											className='xs:w-[75px] xs:h-[85px] w-[56px] h-[63px] cursor-pointer'
										/>
										<h1 className='cursor-pointer xs:text-secondary-medium text-[15px] font-regular'>
											{item?.name}
										</h1>
									</div>

									<div className='flexCenter sm:gap-28 xs:gap-6 gap-4'>
										<div className='text-center mb-6 lg:mb-0'>
											<h1 className='xs:text-secondary-medium text-[15px] font-regular'>
												{item?.code}
											</h1>
										</div>

										<div className='h-[40px] lg:hidden block border-dashed border-[0.5px] border-black'></div>

										<div className='text-center mb-6 lg:mb-0'>
											<h1 className='xs:text-secondary-medium text-[15px] font-regular'>
												{item?.seamstress}
											</h1>
										</div>
									</div>

									<div className='flexBetween gap-28'>
										<div>
											<button className='bg-gray-100 w-[108px] xs:h-[43px] h-[37px] text-medium font-regular shadow-md rounded-lg'>
												Подробнее
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
								<div className='max-container padding-container h-[0.5px] bg-gray-700 my-4'></div>
							</div>
						))
					)}
				</div>
			</div>
		</>
	)
}

export default ProductList
