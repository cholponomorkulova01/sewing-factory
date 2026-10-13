import React, { useState } from 'react'
import { axiosInstantsUToken } from '../services/authApi'
import { Link, useNavigate } from 'react-router-dom'
import form_bg_center from '../img/form-bg-center.svg'
import form_bg_regis_right from '../img/form-bg-regis-right.svg'

const AddClient = () => {

    const navigate = useNavigate()

    const token = sessionStorage.getItem("access_token");

    const [clientData, setClientData] = useState({
		full_name: '',
		phone_number: '',
		address: '',
		warehouse: '',
	})

    const handleFormSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const clientResponse = await axiosInstantsUToken.post('/client/create/', clientData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
    
            setClientData(clientResponse.data);
            navigate('/clientList');
            console.log('Product created:', clientResponse.data);
        } catch (error) {
            console.error('Product creation failed:', error);
        }
    };

    return (
        <>
        <section className='relative overflow-hidden'>
            <img
                src={form_bg_center}
                alt='img'
                className='absolute top-0 left-0 w-full h-full object-cover z-20'
            />
            <div className='flex justify-center relative z-30'>
                <form className='bg-white sm:w-[584px] sm:h-auto w-[351px] h-auto border-[0.5px] border-black sm:rounded-2xl rounded-lg flex flex-col items-center mt-[150px]'
                    onSubmit={handleFormSubmit} >
                    <h2 className='sm:text-large text-[20px] font-medium sm:mt-12 mt-6'>
                        Добавить клиента
                    </h2>
                    <div>
                        <label
                            className='block text-gray-600 sm:text-medium text-[15px] font-medium mb-2 mt-4'
                            htmlFor='full_name'
                        >
                            ФИО
                        </label>
                        <input
                            className={`sm:w-[416px] w-[327px] h-[41px] border-[0.5px] border-black rounded-lg px-3 text-gray-900 font-medium text-small outline-none`}
                            id='full_name'
                            type='text'
                            name='full_name'
                            placeholder='Введите ФИО'
                            required
                            onChange={(e) =>
                                setClientData({ ...clientData, full_name: e.target.value })
                              }
                            value={clientData.full_name}
                        />
                    </div>
                    <div>
                        <label
                            className='block text-gray-600 sm:text-medium text-[15px] font-medium mb-2 mt-4'
                            htmlFor='phone_number'
                        >
                            Номер телефона
                        </label>
                        <input
                            className={`sm:w-[416px] w-[327px] h-[41px] border-[0.5px] border-black rounded-lg px-3 text-gray-900 font-medium text-small outline-none`}
                            id='phone_number'
                            type='number'
                            name='phone_number'
                            placeholder='Введите номер телефона'
                            required
                            onChange={(e) =>
                                setClientData({ ...clientData, phone_number: e.target.value })
                              }
                            value={clientData.phone_number}
                        />
                    </div>
                    <div>
                        <label
                            className='block text-gray-600 sm:text-medium text-[15px] font-medium mb-2 mt-4'
                            htmlFor='address'
                        >
                            Адрес
                        </label>
                        <input
                            className={`sm:w-[416px] w-[327px] h-[41px] border-[0.5px] border-black rounded-lg px-3 text-gray-900 font-medium text-small outline-none mb-4`}
                            id='address'
                            type='text'
                            name='address'
                            placeholder='Введите адрес'
                            required
                            onChange={(e) =>
                                setClientData({ ...clientData, address: e.target.value })
                              }
                            value={clientData.address}
                        />
                    </div>

                    <div>
                        <label
                            className='block text-gray-600 sm:text-medium text-[15px] font-medium mb-2'
                            htmlFor='warehouse'
                        >
                            Склад
                        </label>
                        <input
                            className='sm:w-[416px] w-[327px] h-[41px] border-[0.5px] border-black rounded-lg px-3 text-gray-900 font-medium text-small outline-none mb-4'
                            id='warehouse'
                            type='text'
                            name='warehouse'
                            placeholder='Введите склад'
                            required
                            onChange={(e) =>
                                setClientData({ ...clientData, warehouse: e.target.value })
                              }
                            value={clientData.warehouse}
                        />
                    </div>
                    <button
                        className='btn_primary_blue_regis hover:btn_primary_border cursor-pointer'
                        type='submit'
                    >
                        Добавить
                    </button>
                </form>
            </div>
            <img
                src={form_bg_regis_right}
                alt='img'
                className='absolute top-0 right-0 sm:w-[1000px] sm:h-[1100px] w-[600px] h-[600px] object-cover z-10'
            />
        </section>
    </>
    )
}

export default AddClient