import { OrderStatus } from "../shared/OrderStatus/OrderStatus";
import { useQuery } from "@tanstack/react-query";
import { fetchWorkOrders } from "../api/api";

const ProductInfo = () => {
  const { data } = useQuery({
    queryKey: ["workorder"],
    queryFn: fetchWorkOrders,
  });

  // const data = [
  //   { text: "Склад", id: 1, date: "1.12.2023" },
  //   { text: "Крой", id: 2, date: "01.12.2023" },
  //   { text: "Технолог", id: 3, date: "01.12.2023" },
  //   { text: "Швея/Фурнитура ", id: 4, date: "01.12.2023" },
  //   { text: "ОТК проверка  ", id: 5, date: "01.12.2023" },
  //   { text: "Утюг и Упаковка", id: 6, date: "01.12.2023" },
  // ];

  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-col-reverse md:flex-row-reverse md:items-center md:justify-between my-8">
        <div className="w-full md:w-1/2 ml-4 md:ml-0 order-first">
          <h1 className="text-2xl font-bold text-left md:text-left">
            Описание
          </h1>
          <ul className="text-gray-600 mt-4">
            <li className="border-b-4 py-[30px]">
              Вид:{" "}
              <strong className="border-2 border-solid border-black rounded-md p-1">
                Футболка
              </strong>
            </li>
            <li className="border-b-4 py-[30px]">
              Качество:
              <strong className="border-2 border-solid border-black rounded-md p-1">
                Хлопок
              </strong>
            </li>
            <li className="border-b-4 py-[30px]">
              Цвет:
              <ul className="flex">
                <li className="border-2 border-solid border-black border-opacity-80 rounded-md p-1 bg-black text-white">
                  Черный
                </li>
                <li className="border-2 border-solid border-black border-opacity-80 rounded-md p-1 ml-3">
                  Белый
                </li>
                <li className="border-2 border-solid border-blue-500 border-opacity-80 rounded-md p-1 bg-[#2489FF] text-white ml-3">
                  Синий
                </li>
              </ul>
            </li>
            <li className="border-b-4 py-[30px]">
              Размер:
              <ul className="flex">
                <li className="border-2 border-solid border-black border-opacity-80 rounded-md p-2 ml-3">
                  L
                </li>
                <li className="border-2 border-solid border-black border-opacity-80 rounded-md p-2 ml-3">
                  XL
                </li>
                <li className="border-2 border-solid border-black border-opacity-80 rounded-md p-2 ml-3">
                  XXL
                </li>
              </ul>
            </li>
            <li className="border-b-4 py-[30px]">
              Количество: <strong>300 шт</strong>
            </li>
          </ul>
        </div>
        <div className="border-solid border-black rounded-lg border-[1px] mb-4 mr:0 md:mr-4 md:mb-0 order-last">
          <img
            src="https://www.ozon.com.ua/upload/iblock/464/futbolka-zheltaya-podrobno1.png.webp"
            alt="Белая футболка"
            className="w-[50rem] h-[38rem] object-contain"
          />
        </div>
      </div>
      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between items-center py-8 md:py-[30px] gap-10">
          <div className="w-full md:w-1/2 flex justify-between items-center">
            <h2 className="text-2xl font-bold ml-4">Цена</h2>
            <p className="text-[#4A74EA] font-bold">400 сом</p>
            <div className="border-r border-dashed h-8 md:hidden"></div>
          </div>
          <div className="w-full md:w-1/2 flex justify-between items-center mt-4 md:mt-0">
            <h2 className="text-2xl font-bold hidden md:block">Дата</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <div className="mr-4">
            <ul>
              <li className="flex justify-between items-center">
                <span>Цена за технолога:</span>
                <strong className="text-[#000]">100 сом</strong>
              </li>
              <li className="flex justify-between items-center">
                <span>Цена за швею:</span>
                <strong className="text-[#000]">100 cом</strong>
              </li>
              <li className="flex justify-between items-center">
                <span>Цена за закройщика:</span>
                <strong className="text-[#000]">100 cом</strong>
              </li>
              <li className="flex justify-between items-center">
                <span>Цена за утюжника:</span>
                <strong className="text-[#000]">50 cом</strong>
              </li>
              <li className="flex justify-between items-center">
                <span>Цена за упаковщика:</span>
                <strong className="text-[#000]">50 cом</strong>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="justify-between items-center hidden md:flex">
                <span>Дата создания:</span>
                <strong className="text-[#000] hidden md:block">
                  01.04.2023
                </strong>
              </li>
              <li className="justify-between items-center hidden md:flex">
                <span>Срок завершения:</span>
                <strong className="text-[#000]">01.05.2023</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full mt-10">
        <h3 className="text-2xl font-bold hidden md:inline">Статус заказа</h3>
        <div className="items-center mt-4 hidden md:flex">
          {data?.map((item) => (
            <OrderStatus key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
