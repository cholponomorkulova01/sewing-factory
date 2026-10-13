import axios from 'axios'

const baseURL = process.env.REACT_APP_API_URL

export const apiInstance = axios.create({
	baseURL: baseURL,
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json',
	},
})
