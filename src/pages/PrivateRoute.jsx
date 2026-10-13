import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
	return sessionStorage.getItem('valid') ? children : <Navigate to='/' />
}

export default PrivateRoute
