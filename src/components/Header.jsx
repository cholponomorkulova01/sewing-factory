import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { adminNavLinks } from '../constants'
import close from '../img/Close.svg'
import notif from '../img/Notification.svg'
import logout from '../img/logout.svg'
import menu from '../img/menu.svg'
import profile_pic from '../img/profile-pic.svg'
import { axiosInstantsUToken } from '../services/authApi'

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false)
	const navigate = useNavigate()

	const handleLogout = async () => {
		await axiosInstantsUToken.post('/logout/', {
			refresh_token: sessionStorage.getItem('refresh_token'),
		})
		sessionStorage.removeItem('access_token')
		sessionStorage.removeItem('refresh_token')
		navigate('/')
	}

	return (
		<header className='relative z-30 py-6 shadow-md overflow-hidden'>
			<nav className='max-container padding-container flexBetween'>
				<div
					className='cursor-pointer z-10'
					onClick={() => setMenuOpen(!menuOpen)}
				>
					{menuOpen ? (
						<img
							className='fixed left-60 top-8'
							src={close}
							width={19}
							height={19}
							alt='#'
						/>
					) : (
						<img
							src={menu}
							alt='menu'
							className='sm:w-[29px] sm:h-[25px] w-[19px] h-[16px]'
						/>
					)}
				</div>

				<div className='flexBetween 560:gap-12 gap-4'>
					<img
						src={notif}
						alt='icon'
						className='cursor-pointer sm:w-[18px] sm:h-[21px] w-[13px] h-[15px]'
					/>
					<div className='flexBetween gap-4'>
						<img
							src={profile_pic}
							alt='profile'
							className='sm:w-[40px] sm:h-[40px] w-[30px] h-[30px] cursor-pointer'
						/>
						<div className='340:block hidden'>
							<div className='flex gap-2'>
								<h1 className='sm:text-medium text-small'>Оморкулова</h1>
								<h1 className='sm:text-medium text-small'>Чолпонай</h1>
							</div>
							<p className='text-gray-500 sm:text-medium text-small'>
								Директор
							</p>
						</div>
					</div>

					<img
						src={logout}
						alt='icon'
						width={20}
						height={20}
						className='cursor-pointer sm:w-[20px] sm:h-[20px] w-[14px] h-[14px]'
						onClick={handleLogout}
					/>
				</div>

				{menuOpen && (
					<div
						className='fixed top-0 left-0 w-screen h-screen bg-gray-800 opacity-50 cursor-pointer'
						onClick={() => setMenuOpen(false)}
					></div>
				)}

				{menuOpen && (
					<ul className='fixed flex flex-col gap-6 top-0 left-0 w-[287px] h-screen bg-[#F6F8FA] border-[0.5px] border-gray-500 py-20'>
						{adminNavLinks?.map(link => (
							<div key={link.key}>
								<Link
									className='text-[18px] px-6 hover:text-primary-blue duration-500'
									to={link.href}
								>
									{link.text}
								</Link>
							</div>
						))}
					</ul>
				)}
			</nav>
		</header>
	)
}

export default Header
