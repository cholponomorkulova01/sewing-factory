import { useEffect, useState } from "react";
import Header from "../components/Header";
import profile_bg from "../img/profile-bg.svg";
import profile_pic from "../img/profile-pic.svg";
import passport from "../img/паспорт.svg";
import { axiosInstantsUToken } from "../services/authApi";

const EmployeeProfile = () => {

  const [employee, setEmployee] = useState({
    first_name: "",
    last_name: "",
    username: "",
    role: "",
    phone_number: "",
    id: "",
    sewing_workshop: "",
  });

  useEffect(() => {
    const token = sessionStorage.getItem("access_token");

    const fetchUserProfile = async () => {
      try {
        const profileResponse = await axiosInstantsUToken.get(
          "/users/profile/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setEmployee(profileResponse.data);
      } catch (error) {
        console.error("Ошибка при получении профиля:", error);
      }
    };

    if (token) {
      fetchUserProfile();
    }
  }, []);

  return (
    <>
      <Header />

      <section className="relative overflow-hidden">
        <img
          src={profile_bg}
          alt="img"
          className="absolute top-0 left-0 w-full sm:h-[382px] h-[282px] object-cover z-20"
        />
        <div className="flex justify-center relative z-20">
          <div className="sm:w-[90%] w-[80%] 2xl:w-[63%] sm:h-[355px] h-[250px] bg-white border-[0.5px] border-black rounded-2xl mt-[10%] sm:mt-[190px] flex flex-col items-center">
            <img
              src={profile_pic}
              alt="img"
              className="border-[0.5px] border-gray-700 rounded-full p-[2px] mt-10 sm:w-[175px] w-[110px]"
            />
            <div className="flex gap-4">
              <h1 className="sm:text-[28px] text-medium font-500 mt-4">
                {employee?.first_name}
              </h1>
              <h1 className="sm:text-[28px] text-medium font-500 mt-4">
                {employee?.last_name}
              </h1>
            </div>
            <p className="text-gray-500 sm:text-secondary-medium text-medium font-regular">
              {employee?.role}
            </p>
          </div>
        </div>
      </section>

      <section className="lg:flex block padding-container max-container gap-12 mt-[150px]">
        <div className="sm:w-[100%] w-[100%] 2xl:w-[70%] lg:h-[584px] h-auto bg-white border-[0.5px] border-black rounded-2xl flex flex-col items-center py-12 lg:my-0 my-12">
          <h1 className="xs:text-[28px] text-[20px] font-medium">
            Данные сотрудника
          </h1>
          <div className="sm:py-12 py-6 leading-loose p-4" key={employee.id}>
            <h1 className="xs:text-[20px] text-medium text-gray-700 font-medium">
              Имя: {employee.first_name}
            </h1>
            <h1 className="xs:text-[20px] text-medium text-gray-700 font-medium">
              Фамилия: {employee.last_name}
            </h1>
            <h1 className="xs:text-[20px] text-medium text-gray-700 font-medium">
              ИНН: {employee.username}
            </h1>
            <img src={passport} alt="img" />
            <h1 className="xs:text-[20px] text-medium text-gray-700 font-medium">
              Название цеха: {employee.sewing_workshop.name}
            </h1>
            <h1 className="xs:text-[20px] text-medium text-gray-700 font-medium">
              Номер телефона: {employee.phone_number}
            </h1>
            <h1 className="xs:text-[20px] text-medium text-gray-700 font-medium">
              Должность: {employee.role}
            </h1>
            <button className="bg-primary-blue text-white py-2 px-4 rounded-lg text-[20px] font-medium duration-500 hover:btn_primary_border my-6 xs:block hidden">
              Изменить данные
            </button>
          </div>
        </div>

        <div className="sm:w-[100%] w-[100%] 2xl:w-[70%] lg:h-[584px] h-auto bg-white border-[0.5px] border-black rounded-2xl sm:flex block justify-center py-12 gap-12 p-4">
          <div className="xs:w-[212px] xs:h-[113px] w-[150px] h-[88px] bg-white border-[0.5px] border-black rounded-[6px] p-2 sm:mx-0 mx-auto">
            <h1 className="xs:text-secondary-medium text-medium font-regular">
              Зарплата
            </h1>
            <h1 className="xs:text-[36px] text-secondary-medium font-medium">
              12000 сом{" "}
            </h1>
          </div>
          <div className="xs:w-[212px] xs:h-[113px] w-[150px] h-[88px] bg-white border-[0.5px] border-black rounded-[6px] p-2 sm:mt-0 mt-8 sm:mx-0 mx-auto">
            <h1 className="xs:text-[20px] text-medium font-regular">
              Сделанные работы
            </h1>
            <h1 className="xs:text-[36px] text-secondary-medium font-medium">
              15 шт
            </h1>
          </div>
        </div>
        <button
          className="bg-primary-blue text-white w-[95%] h-[40px] rounded-lg text-[20px] font-medium duration-500 hover:btn_primary_border my-6 xs:hidden block">
          Изменить данные
        </button>
      </section>
    </>
  );
};

export default EmployeeProfile;
