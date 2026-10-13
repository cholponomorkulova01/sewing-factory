import { FaShoppingCart } from 'react-icons/fa'

export const NoProduct = () => {
	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<div className='text-center'>
				<FaShoppingCart className='text-6xl text-gray-500 mb-4' />
				<p className='text-lg text-gray-600 mb-2'>Нет товаров</p>
				<p className='text-sm text-gray-400'>
					Пожалуйста, добавьте товары для отображения
				</p>
			</div>
		</div>
	)
}
