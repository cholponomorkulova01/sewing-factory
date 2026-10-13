import { useState, useEffect } from "react";
import { productStatus } from "../constants";
import search_icon from "../img/Search.svg";
import hicon2 from "../img/Hicon2.svg";
import profile_pic from "../img/profile-pic.svg";
import menuMeatballs from "../img/Menu-Meatballs.svg";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, Link } from "react-router-dom";
import { axiosInstantsUToken } from "../services/authApi";
import Header from "../components/Header";

const TechProfile = () => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState();
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    axiosInstantsUToken.get("/users/profile/").then((res) => {
      // if(role === 'technologist'){
      //     navigate('/techProfile')
      // }
      setAdmin(res.data);
      console.log(res.data);
    });

    axiosInstantsUToken
      .get("/users/")
      .then((res) => {
        setEmployee(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        if (error.response) {
          console.error("Response error:", error.response.data);
          console.error("Status code:", error.response.status);
        } else if (error.request) {
          console.error("Request error:", error.request);
        } else {
          console.error("Error:", error.message);
        }
        console.error("Config:", error.config);
      });
  }, []);

  return (
    <>
      <Header />

      <div className="padding-container max-container">
        <div className="py-10">
          <h1 className="xs:text-secondary-medium text-[16px] font-medium">
            Добро пожаловать, {admin?.last_name}
          </h1>
          <h1 className="xs:text-secondary-medium text-[16px] font-medium">
            {admin?.first_name}
          </h1>
          <h1 className="xs:text-[32px] font-medium text-[20px] sm:mt-12 mt-6">
            Баланс
          </h1>
        </div>

        <div className="lg:flexStart lg:gap-12 sm:flexStart block gap-6">
          {productStatus?.map((item) => (
            <div className="xs:w-[353px] xs:h-[113px] w-[176px] h-[83px] bg-white border-[0.5px] border-black rounded-lg mx-auto sm:mx-0 xs:my-6 my-3 text-center p-2">
              <h1 className="lg:text-secondary-medium sm:text-[20px] text-medium font-regular">
                {item?.title}
              </h1>
              <h1 className="xs:text-[36px] text-[20px] font-medium">
                {item?.quantity}
              </h1>
            </div>
          ))}
        </div>

        <button className="w-[263px] h-[45px] bg-primary-blue text-white rounded-md text-[24px] duration-500 hover:btn_primary_border">
          История транзакций
        </button>

        <div className="mt-12">
          <h1 className="xs:text-[28px] text-[20px] font-medium">
            Список сотрудников
          </h1>

          <div className="560:flexBetween block border-[0.5px] border-[#555555] rounded-lg px-4 py-4 my-12">
            <div className="bg-white border-[0.5px] border-[#555555] 340:w-[260px] w-[230px] h-[40px] flexStart rounded-[6px] 560:mb-0 mb-4">
              <img src={search_icon} alt="#" className="p-4 cursor-pointer" />
              <input
                type="text"
                placeholder="Искать сотрудника по имени"
                className="outline-none w-full text-small font-regular"
              />
            </div>

            <div className="560:flexBetween flexStart gap-[6px]">
              <img src={hicon2} alt="icon" className="cursor-pointer" />
              <Link
                to="/register"
                className="flexBetween bg-primary-blue text-white text-medium font-medium py-2 px-6 xs:rounded-[6px] rounded-[4px] duration-500 hover:btn_primary_border cursor-pointer w-[150px]"
              >
                <FontAwesomeIcon icon={faPlus} />
                <button>Добавить</button>
              </Link>
            </div>
          </div>
        </div>

        <div>
          {employee?.map((item) => (
            <div
              className="border-[0.5px] border-[#555555] xs:rounded-lg rounded-[4px] px-4 py-4 my-10 flex flex-col xl:flex-row xl:items-center xl:justify-between"
              key={item?.id}
            >
              <div className="flex items-center mb-6 lg:mb-0 xs:gap-6 gap-3">
                <img
                  src={profile_pic}
                  alt="profile"
                  className="xs:w-[75px] xs:h-[75px] w-[48px] h-[48px] cursor-pointer border-[0.5px] border-gray-700 rounded-full p-[2px]"
                />
                <div>
                  <div className="340:flexBetween block gap-2">
                    <h1 className="cursor-pointer xs:text-secondary-medium text-medium font-regular">
                      {item?.last_name}
                    </h1>
                    <h1 className="cursor-pointer xs:text-secondary-medium text-medium font-regular">
                      {item?.first_name}
                    </h1>
                  </div>
                  <p className="cursor-pointer text-gray-600 xs:text-[20px] text-small font-regular">
                    {item?.username}
                  </p>
                </div>
              </div>

              <div className="flexCenter sm:gap-28 xs:gap-6 gap-4">
                <div className="text-center mb-6 lg:mb-0">
                  <h1 className="xs:text-secondary-medium text-medium font-medium">
                    {item?.role}
                  </h1>
                  <p className="text-gray-600 xs:text-[20px] text-small font-regular">
                    {item?.work_status}
                  </p>
                </div>

                <div className="h-[40px] xl:hidden block border-dashed border-[0.5px] border-black"></div>

                <div className="text-center mb-6 lg:mb-0">
                  <h1 className="xs:text-secondary-medium text-medium font-medium">
                    {item?.id}
                  </h1>
                  <p className="text-gray-600 xs:text-[20px] text-small font-regular">
                    {item?.work_status}
                  </p>
                </div>
              </div>

              <div className="flexBetween gap-24">
                {/* <div>
                    <Link to='/employeeProfile' className='bg-gray-100 py-3 px-4 xs:py-2 text-medium font-regular shadow-md rounded-lg'>Подробнее</Link>
                    <Link to={`/editEmployee${item.username}`} className='bg-green-700 text-white py-3 px-4 xs:py-2 text-medium font-regular shadow-md rounded-lg'>Изменить</Link>
                    <button onClick={() => handleDelete(item.username)} className='bg-red-700 text-white py-3 px-4 xs:py-2 text-medium font-regular shadow-md rounded-lg'>Удалить</button>
                </div> */}

                <div>
                  <img
                    src={menuMeatballs}
                    alt="icon"
                    className="cursor-pointer xs:w-[28px] h-[5px] w-[25px]"
                  />
                </div>
              </div>
            </div>
          ))}
          {/* {
                    products.map((item) => (
                    <>
                        <div className='px-4 py-4 my-6 flex flex-col lg:flex-row lg:items-center lg:justify-between' key={item.id}>
                            <div className='flex items-center mb-6 lg:mb-0 gap-6'>
                                <img src='' alt="product" className='xs:w-[75px] xs:h-[85px] w-[56px] h-[63px] cursor-pointer' />
                                <h1 className='cursor-pointer xs:text-secondary-medium text-[15px] font-regular'>{item.name}</h1>
                            </div>

                            <div className='flexCenter sm:gap-28 xs:gap-6 gap-4'>
                                <div className='text-center mb-6 lg:mb-0'>
                                    <h1 className='xs:text-secondary-medium text-[15px] font-regular'>{item.code}</h1>
                                </div>

                                <div className='h-[40px] lg:hidden block border-dashed border-[0.5px] border-black'></div>

                                <div className='text-center mb-6 lg:mb-0'>
                                    <h1 className='xs:text-secondary-medium text-[15px] font-regular'>{item.seamstress}</h1>
                                </div>
                            </div>

                            <div className='flexBetween gap-28'>
                                <div>
                                    <button className='bg-gray-100 w-[108px] xs:h-[43px] h-[37px] text-medium font-regular shadow-md rounded-lg'>Подробнее</button>
                                </div>

                                <div>
                                    <img src={menuMeatballs} alt="icon" className='cursor-pointer xs:w-[28px] h-[5px] w-[25px]' />
                                </div>
                            </div>
                        </div>
                        <div className='max-container padding-container h-[0.5px] bg-gray-700 my-4'></div>
                    </>
                ))
            } */}
        </div>
      </div>
    </>
  );
};

export default TechProfile;
