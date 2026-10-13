import { useEffect, useState } from "react";
import search_icon from "../img/Search.svg";
import hicon2 from "../img/Hicon2.svg";
import Header from "../components/Header";
import menuMeatballs from "../img/Menu-Meatballs.svg";
import { filterButtons } from "../constants";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstantsUToken } from "../services/authApi";

const Employee = () => {
  const navigate = useNavigate();

  const [activeButtonIndex, setActiveButtonIndex] = useState(null);
  const [employee, setEmployee] = useState([]);

  const handleButtonClick = (index) => {
    setActiveButtonIndex(index === activeButtonIndex ? null : index);
  };

  useEffect(() => {
    const token = sessionStorage.getItem("access_token");

    const fetchUserProfile = async () => {
      try {
        const profileResponse = await axiosInstantsUToken.get("/users/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setEmployee(profileResponse.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchUserProfile(); // Call fetchUserProfile inside useEffect

    // Ensure you're closing the useEffect hook properly
  }, []);

  const handleDelete = (username) => {
    axiosInstantsUToken.delete(`/users/${username}`).then((res) => {
      window.location.reload();
      navigate("/employee");
    });
  };

  return (
    <>
      <Header />

      <div className="padding-container max-container">
        <div className="mt-12">
          <h1 className="sm:text-[28px] text-secondary-medium font-medium">
            Список сотрудников
          </h1>

          <section className="560:flexBetween block">
            <div className="flex flex-col 560:flex-row gap-[12px] py-8">
              {filterButtons.map((button, index) => (
                <button
                  key={index}
                  className={`py-[8px] px-[10px] rounded-[4px] text-[14px] duration-500 ${
                    activeButtonIndex === index
                      ? "btn_primary_border"
                      : "bg-primary-blue text-white"
                  }`}
                  onMouseDown={() => handleButtonClick(index)}
                >
                  {button.title}
                </button>
              ))}
            </div>

            <div>
              <img src={hicon2} alt="icon" className="cursor-pointer" />
            </div>
          </section>

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
              {/* <img src={hicon2} alt="icon" className='cursor-pointer' /> */}
              <Link
                to="/register"
                className="flexBetween bg-primary-blue text-white text-medium font-medium py-2 px-6 rounded-lg duration-500 hover:btn_primary_border cursor-pointer w-[150px]"
              >
                <FontAwesomeIcon icon={faPlus} />
                <button>Добавить</button>
              </Link>
            </div>
          </div>
        </div>

        <div>
          {employee.map((item) => (
            <div
              className="border-[0.5px] border-[#555555] xs:rounded-lg rounded-[4px] px-4 py-4 my-10 flex flex-col xl:flex-row xl:items-center xl:justify-between"
              key={item.id}
            >
              <div className="flex items-center mb-6 lg:mb-0 xs:gap-6 gap-3">
                <img
                  src={item.photo}
                  alt="profile"
                  className="xs:w-[75px] xs:h-[75px] w-[48px] h-[48px] cursor-pointer border-[0.5px] border-gray-700 rounded-full p-[2px]"
                />
                <div>
                  <div className="340:flexBetween block gap-2">
                    <h1 className="cursor-pointer xs:text-secondary-medium text-medium font-regular">
                      {item.last_name}
                    </h1>
                    <h1 className="cursor-pointer xs:text-secondary-medium text-medium font-regular">
                      {item.first_name}
                    </h1>
                  </div>
                  <p className="cursor-pointer text-gray-600 xs:text-[20px] text-small font-regular">
                    {item.username}
                  </p>
                </div>
              </div>

              <div className="flexCenter sm:gap-28 xs:gap-6 gap-4">
                <div className="text-center mb-6 lg:mb-0">
                  <h1 className="xs:text-secondary-medium text-medium font-medium">
                    {item.role}
                  </h1>
                  <p className="text-gray-600 xs:text-[20px] text-small font-regular">
                    {item.work_status}
                  </p>
                  <h1>{item.sewing_workshop}</h1>
                </div>

                {/* <div className='h-[40px] xl:hidden block border-dashed border-[0.5px] border-black'></div> */}

                {/* <div className='text-center mb-6 lg:mb-0'>
                                    <h1 className='xs:text-secondary-medium text-medium font-medium'>{item.id}</h1>
                                    <p className='text-gray-600 xs:text-[20px] text-small font-regular'>{item.work_status}</p>
                                </div> */}
              </div>

              <div className="flexBetween gap-24">
                <div>
                  <Link
                    to="/employeeProfile"
                    className="bg-gray-100 py-3 px-4 xs:py-2 text-medium font-regular shadow-md rounded-lg"
                  >
                    Подробнее
                  </Link>
                  <Link
                    to={`/editEmployee${item.username}`}
                    className="bg-green-700 text-white py-3 px-4 xs:py-2 text-medium font-regular shadow-md rounded-lg"
                  >
                    Изменить
                  </Link>
                  <button
                    onClick={() => handleDelete(item.username)}
                    className="bg-red-700 text-white py-3 px-4 xs:py-2 text-medium font-regular shadow-md rounded-lg"
                  >
                    Удалить
                  </button>
                </div>

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
        </div>
      </div>
    </>
  );
};

export default Employee;
