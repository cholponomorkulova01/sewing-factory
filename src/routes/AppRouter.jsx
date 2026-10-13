import { Navigate, useRoutes } from 'react-router-dom'
import AddProduct from '../pages/AddProduct'
import AdminProfile from '../pages/AdminProfile'
import Balance from '../pages/Balance'
import EditEmployee from '../pages/EditEmployee'
import Employee from '../pages/Employee'
import EmployeeProfile from '../pages/EmployeeProfile'
import { Login } from '../pages/Login'
import Main from '../pages/Main'
import NotFound from '../pages/NotFound'
import ProductInfo from '../pages/ProductInfo'
import ProductList from '../pages/ProductList'
import Register from '../pages/Register'
import { PasswordReset } from '../pages/PasswordReset'
import FillEmployeeProfile from '../pages/FillEmployeeProfile'
import TechProfile from '../pages/TechProfile'
import { PasswordUpdate } from '../pages/PasswordUpdate'
import { Transactions, NewTransaction } from '../pages/Transactions'
import { EditWorkshop } from '../pages/EditWorkshop'
import { Stock } from '../pages/Stock'

export const AppRouter = () => {
	return useRoutes([
		{
			path: '/',
			element: <Navigate to='/login' replace />,
		},
		{
			path: '/login',
			element: <Login />,
		},
		{
			path: '/reset-password',
			element: <PasswordReset />,
		},
		{
			path: '/password-update',
			element: <PasswordUpdate />,
		},
		{
			path: '/employeeProfile',
			element: <EmployeeProfile />,
		},
		{
			path: '/employee',
			element: <Employee />,
		},
		{
			path: '/register',
			element: <Register />,
		},
		{
			path: '/productList',
			element: <ProductList />,
		},
		{
			path: '/product/:id',
			element: <ProductInfo />,
		},
		{
			path: '/addProduct',
			element: <AddProduct />,
		},
		{
			path: '/main',
			element: <Main />,
		},
		{
			path: '/balance',
			element: <Balance />,
		},
		{
			path: '/editEmployee',
			element: <EditEmployee />,
		},
		{
			path: '/adminProfile',
			element: <AdminProfile />,
		},
		{
			path: '/transactions',
			element: <Transactions />,
		  },
		  {
			path: '/edit-workshop/:id',
			element: <EditWorkshop />,
		  },
		{
			path: '/404',
			element: <NotFound />,
		},
		{
			path: '/new-transactions',
			element: <NewTransaction />,
		  },
		{
			path: '/stock',
			element: <Stock />,
		  },
		  {
			path: '/fillEmployeeProfile',
			element: <FillEmployeeProfile />,
		},
		{
			path: '/techProfile',
			element: <TechProfile />,
		},
		{
			path: '*',
			element: <Navigate to='404' />,
		},
	])
}
