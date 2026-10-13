import { apiInstance } from './api-instants'
import { axiosInstantsUToken } from '../services/authApi'

const token = sessionStorage.getItem('access_token')

export const fetchWorkOrders = async () => {
	try {
		const response = await apiInstance.get('/workorder')
		return response.data
	} catch (error) {
		throw new Error(error.message)
	}
}

export const fetchWalletTransactions = async () => {
	const fetchWallet = await axiosInstantsUToken.get('/wallet/', {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
	return fetchWallet.data.transactions
}

export const fetchStock = async () => {
	const response = await axiosInstantsUToken.get('/warehousematerial/', {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
	return response.data
}

export const createStock = async data => {
	const response = await axiosInstantsUToken.post(
		'/warehousematerial/create/',
		data,
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	)
	return response.data
}

export const updateStock = async (id, data) => {
	const response = await axiosInstantsUToken.put(
		`/warehousematerial/${id}/`,
		data,
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	)
	return response.data
}
