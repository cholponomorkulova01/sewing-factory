export const adminNavLinks = [
	{
		text: 'Главная',
		href: '/main',
		key: 0,
	},
	{
		text: 'Профиль',
		href: '/adminProfile',
		key: 1,
	},
	{
		text: 'Склад',
		href: '/stock',
		key: 2,
	},
	{
		text: 'Список сотрудников',
		href: '/employee',
		key: 3,
	},
	{
		text: 'Добавить сотрудника ',
		href: '/register',
		key: 4,
	},
	{
		text: 'Список товаров',
		href: '/productList',
		key: 5,
	},
	{
		text: 'Выход',
		href: '/',
		key: 6,
	},
]

export const productStatus = [
	// {
	//     title: 'Сделанные работы',
	//     quantity: '120 шт'
	// },
	// {
	//     title: 'В процессе',
	//     quantity: '320 шт'
	// },
	// {
	//     title: 'Нужно сделать',
	//     quantity: '440 шт'
	// }
	{
		title: 'Баланс на данный момент',
		quantity: '12000 сом',
	},
]

export const filterButtons = [
	{
		id: 0,
		title: 'Все',
	},
	{
		id: 1,
		title: 'Технолог',
	},
	{
		id: 2,
		title: 'Швея',
	},
	{
		id: 3,
		title: 'Закройщик',
	},
	{
		id: 4,
		title: 'Утюжник',
	},
	{
		id: 5,
		title: 'Упаковщик',
	},
]

export const statisticsBtns = [
	{
		title: 'Все',
	},
	{
		title: 'За неделю',
	},
	{
		title: 'За месяц',
	},
	{
		title: 'За год',
	},
]

export const productDetails = [
	{
		title: 'Фото',
	},
	{
		title: 'Вид',
	},
	{
		title: 'Цена',
	},
	{
		title: 'Количество',
	},
	{
		title: 'Подробнее',
	},
]

export const balanceDetails = [
	{
		title: 'Дата',
	},
	{
		title: 'Код заказа',
	},
	{
		title: 'Модель',
	},
	{
		title: 'Количество',
	},
	{
		title: 'Сумма',
	},
]

export const balance = [
	{
		date: '1.11.2023',
		code: '#12',
		model: 'Футболка',
		amount: '12 шт',
		total: '1200 сом',
	},
]

export const products = [
	{
		img: '../img/t-shirt.svg',
		title: 'Футболка',
		price: '250 сом',
		amount: '50 шт',
	},
	{
		img: '../img/t-shirt.svg',
		title: 'Футболка',
		price: '250 сом',
		amount: '50 шт',
	},
	{
		img: '../img/t-shirt.svg',
		title: 'Футболка',
		price: '250 сом',
		amount: '50 шт',
	},
	{
		img: '../img/t-shirt.svg',
		title: 'Футболка',
		price: '250 сом',
		amount: '50 шт',
	},
	{
		img: '../img/t-shirt.svg',
		title: 'Футболка',
		price: '250 сом',
		amount: '50 шт',
	},
	{
		img: '../img/t-shirt.svg',
		title: 'Футболка',
		price: '250 сом',
		amount: '50 шт',
	},
]

export const employeeInfo = [
	{
		firstname: 'Адэля',
		lastname: 'Картанбаева',
		INN: 12345678901234,
		birthday: '12.06.1998',
		phone: '+996 700 100 445',
		job: 'Швея',
		gender: 'Женский',
		password: '********',
	},
]

export const productInfo = [
	{
		title: 'Футболка',
		quality: 'Хлопок',
	},
]

export const productPrices = [
	{
		job: 'Цена за швею',
		price: '100 cом',
	},
	{
		job: 'Цена за закройщика',
		price: '100 cом',
	},
	{
		job: 'Цена за утюжника',
		price: '50 cом',
	},
	{
		job: 'Цена за упаковщика',
		price: '50 cом',
	},
]
