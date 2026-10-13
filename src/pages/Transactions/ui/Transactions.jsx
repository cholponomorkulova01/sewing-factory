import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchWalletTransactions } from '../../../api/api'
import { Loader } from '../../../components/Loader'
export const Transactions = () => {
	const {
		data: wallet,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ['wallet'],
		queryFn: fetchWalletTransactions,
	})

	const [expandedDescription, setExpandedDescription] = useState('')

	const handleDescriptionExpand = description => {
		setExpandedDescription(description)
	}

	return (
		<section className='p-8'>
			<h1 className='text-3xl font-semibold mb-6'>Транзакции</h1>

			<div className='bg-white shadow-md rounded-lg overflow-hidden'>
				<div className='overflow-x-auto'>
					<table className='min-w-full divide-y divide-gray-200'>
						<thead className='bg-gray-50'>
							<tr>
								<th className='py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
									Дата
								</th>
								<th className='py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
									Тип
								</th>
								<th className='py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
									Сумма
								</th>
								<th className='py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
									Статус
								</th>
								<th className='py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
									Описание
								</th>
							</tr>
						</thead>
						<tbody className='divide-y divide-gray-200 text-sm font-light'>
							{isLoading ? (
								<tr>
									<td colSpan='4'>Loading...</td>
								</tr>
							) : isError ? (
								<tr>
									<td colSpan='4'>Error fetching data</td>
								</tr>
							) : (
								wallet?.map((transaction, index) => (
									<tr key={index} className='hover:bg-gray-100'>
										<td className='py-3 px-6 whitespace-nowrap'>
											{new Date(transaction?.date).toLocaleDateString()}
										</td>
										<td className='py-3 px-6 text-left'>Приход</td>
										<td className='py-3 px-6 text-left'>
											{transaction?.amount} руб.
										</td>
										<td className='py-3 px-6 text-left'>Завершена</td>
										<td className='py-3 px-6 text-left'>
											{expandedDescription === transaction?.description ? (
												<>
													{transaction?.description}
													<button
														onClick={() => setExpandedDescription('')}
														className='text-blue-500 hover:underline focus:outline-none'
													>
														Скрыть
													</button>
												</>
											) : (
												<>
													{transaction?.description.slice(0, 10)}{' '}
													{transaction?.description.length > 50 && '...'}
													<button
														onClick={() =>
															handleDescriptionExpand(transaction?.description)
														}
														className='text-blue-500 hover:underline focus:outline-none'
													>
														Показать полностью
													</button>
												</>
											)}
										</td>
									</tr>
								))
							)}
						</tbody>
					</table>
				</div>
			</div>
			<button className='mt-0 md:mt-2 ml-2'>
				<Link
					className='block w-full md:inline-block md:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
					to='/new-transactions'
				>
					Добавить транзакцию
				</Link>
			</button>
		</section>
	)
}
