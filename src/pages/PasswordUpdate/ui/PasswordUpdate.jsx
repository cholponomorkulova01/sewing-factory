import logobg from "../../../img/logoBg.png";
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {PasswordUpdateRequest} from "../model/PasswordUpdateRequest";
import logo from "../../../img/logo.svg";

export const PasswordUpdate = () => {

    const navigate = useNavigate()
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data) => {
        PasswordUpdateRequest(data, navigate)
    };

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
                        <h1 className="text-3xl font-semibold mb-6 text-black text-left">Создать новый пароль</h1>
                        <h2 className="text-sm font-semibold mb-6 text-gray-500 text-left">Пожалуйста введите новый
                            пароль, который отличается от предыдущего.</h2>
                        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label htmlFor="password"
                                       className="block text-sm font-medium text-gray-700">Старый пароль</label>
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
                                <label htmlFor="password"
                                       className="block text-sm font-medium text-gray-700">Подтвердите пароль</label>
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
                                <button type="submit"
                                        className="w-full bg-[#459CED] text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">Отправить
                                    код востановления
                                </button>
                            </div>
                        </form>
                        <div className="flex items-center justify-center mt-5">
                            <svg className="w-4 h-4 mr-1.5 stroke-current" viewBox="0 0 19 18"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.688 9H3.312M8.375 14.063 3.312 9l5.063-5.063" stroke="#459CED"
                                      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <Link to="/login" className="text-[#459CED]">Вернуться на окно входа</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}