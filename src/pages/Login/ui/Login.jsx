import logobg from '../../../img/logoBg.png'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { LoginRequest } from '../model/LoginRequest'
import logo from '../../../img/logo.svg'

export const Login = () => {
	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const onSubmit = data => {
		LoginRequest(data, navigate)
	}

    return (
        <section>
            <div className="flex h-screen">
                <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
                    <div className="relative">
                        <img src={logobg} alt="Задний фон логина" className='w-screen h-screen'/>
                        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
                        <div className="absolute top-20 left-20 z-20">
                            <img src={logo} alt=""/>
                        </div>
                        <p className="absolute top-20 left-36 z-10 text-[#E0E3E8] font-extrabold text-[1.875rem]">
                            KGPROM
                        </p>
                        <p className="absolute bottom-1/4 left-20 text-white font-extrabold text-xl z-10">
                            Автоматизация и управление <br/> швейным производством
                        </p>
                    </div>
                </div>
                <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
                    <div className="max-w-md w-full p-6 bg-white rounded-2xl">
                        <h1 className="text-3xl font-semibold mb-6 text-black text-left">Войти</h1>
                        <h2 className="text-sm font-semibold mb-6 text-gray-500 text-left">Еще нет аккаунта? <Link
                            to='/' className='text-[#459CED]'>Зарегистрироваться</Link></h2>
                        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Логин</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    {...register('username', {
                                        required: 'Логин обязателен',
                                        pattern: {
                                            value: /^[1-2]\d{13}$/,
                                            message: 'Логин должен состоять из 14 цифр и начинаться с числа 1 или 2',
                                        },
                                    })}
                                    className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                                />
                                {errors.email && (
                                    <span className="text-red-500 text-sm inline-block mt-1 h-5">
        {errors.email.message}
    </span>
                                )}

                            </div>
                            <div>
                                <label htmlFor="password"
                                       className="block text-sm font-medium text-gray-700">Пароль</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    {...register('password', {
                                        required: 'Пароль обязателен',
                                        minLength: {
                                            value: 8,
                                            message: 'Минимальная длина пароля - 8 символов',
                                        },
                                    })}
                                    className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                                />
                                {errors.password && (
                                    <span className="text-red-500 text-sm inline-block mt-1 h-5">
        {errors.password.message}
    </span>
                                )}


                            </div>
                            <div>
                                <Link to='/reset-password' className='text-[#459CED]'>Забыли пароль?</Link>
                            </div>
                            <div>
                                <button type="submit"
                                        className="w-full bg-[#459CED] text-white p-2 rounded-md hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">Войти
                                </button>
                            </div>
                        </form>
                        <div className="mt-4 flex items-center">
                            <div className="border-t border-gray-300 flex-1"></div>
                            <p className="mx-4 text-gray-500">или</p>
                            <div className="border-t border-gray-300 flex-1"></div>
                        </div>
                        <div className="mt-4 flex flex-col lg:flex-row items-center justify-between">
                            <div className="w-full lg:w-1/2 mb-2 lg:mb-0">
                                <button type="button"
                                        className="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-md hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4"
                                         id="google">
                                        <path fill="#fbbb00"
                                              d="M113.47 309.408 95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"></path>
                                        <path fill="#518ef8"
                                              d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"></path>
                                        <path fill="#28b446"
                                              d="m416.253 455.624.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"></path>
                                        <path fill="#f14336"
                                              d="m419.404 58.936-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"></path>
                                    </svg>
                                    Войти через Google
                                </button>
                            </div>
                            <div className="w-full lg:w-1/2 ml-0 lg:ml-2">
                                <button type="button"
                                        className="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-md hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none">
                                        <path fill="url(#a)" d="M9 18A9 9 0 1 0 9 0a9 9 0 0 0 0 18Z"/>
                                        <path fill="#C1DAEA"
                                              d="m6.092 9.658 1.068 2.955s.133.277.276.277c.143 0 2.27-2.212 2.27-2.212L12.07 6.11 6.13 8.895l-.038.763Z"/>
                                        <path fill="#9CC6D9"
                                              d="m7.508 10.416-.205 2.178s-.086.668.581 0a18.497 18.497 0 0 1 1.307-1.182l-1.683-.996Z"/>
                                        <path fill="#fff"
                                              d="m6.111 9.763-2.196-.715s-.262-.107-.178-.348c.018-.05.053-.092.158-.165.486-.34 9.008-3.402 9.008-3.402s.24-.081.382-.028c.065.025.107.053.142.155.012.037.02.115.019.193 0 .057-.008.11-.013.191-.052.837-1.605 7.087-1.605 7.087s-.092.366-.425.378c-.122.005-.27-.02-.445-.171-.654-.562-2.912-2.08-3.41-2.414a.095.095 0 0 1-.042-.067c-.007-.035.032-.079.032-.079s3.932-3.495 4.036-3.861c.008-.029-.022-.043-.063-.03-.261.095-4.789 2.954-5.288 3.27-.03.018-.112.006-.112.006Z"/>
                                        <defs>
                                            <linearGradient id="a" x1="9" x2="9" y1="18" y2="0"
                                                            gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#0093D4"/>
                                                <stop offset="1" stopColor="#00B1E5"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    Войти через Telegram
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
