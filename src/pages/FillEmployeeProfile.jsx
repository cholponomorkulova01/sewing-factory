import { useState, useEffect } from "react";
import profile_bg from "../img/profile-bg.svg";
import profile_pic from "../img/profile-pic.svg";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { axiosInstantsUToken } from "../services/authApi";

const FillEmployeeProfile = () => {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("first_name", employee.first_name);
  //   formData.append("last_name", employee.last_name);
  //   formData.append("username", employee.username);
  //   formData.append("role", employee.role);
  //   formData.append("phone_number", employee.phone_number);
  //   formData.append("id", employee.id);
  //   formData.append("sewing_workshop", employee.sewing_workshop);
  // };

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
        <section className="flex justify-center">
          <form
            className="sm:w-[90%] w-[96%] 2xl:w-[64%] lg:h-[687px] h-[50px] bg-white border-[0.5px] border-black rounded-2xl flex flex-col items-center mt-[50px]"
          >
            <h1 className="text-secondary-medium font-medium py-6">
              Ваш профиль
            </h1>

            <div className="lg:flex block gap-10 py-4">
              <div>
                <label
                  className="block text-gray-600 sm:text-medium text-[15px] font-medium mb-2"
                  htmlFor="firstname"
                >
                  Имя
                </label>
                <input
                  className="sm:w-[400px] w-[327px] h-[41px] border-[0.5px] border-black rounded-lg px-3 text-gray-900 font-medium text-small outline-none mb-4"
                  id="firstname"
                  type="text"
                  name="fisrtname"
                  placeholder="Введите имя"
                  required
                  onChange={(e) =>
                    setEmployee({ ...employee, first_name: e.target.value })
                  }
                  value={employee.first_name}
                />
              </div>

              <div>
                <label
                  className="block text-gray-600 sm:text-medium text-[15px] font-medium mb-2"
                  htmlFor="lastname"
                >
                  Фамилия
                </label>
                <input
                  className="sm:w-[400px] w-[327px] h-[41px] border-[0.5px] border-black rounded-lg px-3 text-gray-900 font-medium text-small outline-none"
                  id="lastname"
                  type="text"
                  name="lastname"
                  placeholder="Введите фамилию"
                  required
                  onChange={(e) =>
                    setEmployee({ ...employee, last_name: e.target.value })
                  }
                  value={employee.last_name}
                />
              </div>
            </div>

            <div>
              <label
                className="block text-gray-600 sm:text-medium text-[15px] font-medium mb-2"
                htmlFor="username"
              >
                ИНН
              </label>
              <input
                className="lg:w-[842px] sm:w-[400px] w-[327px] h-[41px] border-[0.5px] border-black rounded-lg px-3 text-gray-900 font-medium text-small outline-none"
                id="username"
                type="number"
                name="username"
                placeholder="Введите ИНН"
                required
                onChange={(e) =>
                  setEmployee({ ...employee, username: e.target.value })
                }
                value={employee?.username}
              />
            </div>

            <div className="lg:flex block gap-10 py-4">
              <div>
                <label
                  className="block text-gray-600 sm:text-medium text-[15px] font-medium mb-2"
                  htmlFor="sewing_workshop"
                >
                  Название цеха:
                </label>
                <input
                  className="sm:w-[400px] w-[327px] h-[41px] border-[0.5px] border-black rounded-lg px-3 text-gray-900 font-medium text-small outline-none  mb-4"
                  id="sewing_workshop"
                  type="text"
                  name="sewing_workshop"
                  placeholder="Введите название цеха"
                  required
                  onChange={(e) =>
                    setEmployee({
                      ...employee,
                      sewing_workshop: e.target.value,
                    })
                  }
                  value={employee?.sewing_workshop}
                />
              </div>

              <div>
                <label
                  className="block text-gray-600 sm:text-medium text-[15px] font-medium mb-2"
                  htmlFor="phone_number"
                >
                  Номер телефона
                </label>
                <input
                  className="sm:w-[400px] w-[327px] h-[41px] border-[0.5px] border-black rounded-lg px-3 text-gray-900 font-medium text-small outline-none"
                  id="phone_number"
                  type="number"
                  name="phone_number"
                  placeholder="Введите номер телефона"
                  required
                  onChange={(e) =>
                    setEmployee({ ...employee, phone_number: e.target.value })
                  }
                  value={employee?.phone_number}
                />
              </div>
            </div>

            <div className="lg:flex block gap-10 py-4">
              <div>
                <label
                  className="block text-gray-600 sm:text-medium text-[15px] font-medium mb-2"
                  htmlFor="role"
                >
                  Роль
                </label>
                <select
                  className="sm:w-[400px] w-[327px] h-[41px] border-[0.5px] border-black rounded-lg px-3 text-gray-900 font-medium text-small outline-none mb-4"
                  id="role"
                  name="role"
                  required
                  onChange={(e) =>
                    setEmployee({ ...employee, role: e.target.value })
                  }
                  value={employee?.role}
                >
                  <option id="technologist">technologist</option>
                  <option id="seamstress">seamstress</option>
                  <option id="iron_worker">iron_worker</option>
                  <option id="director">director</option>
                  <option id="button_attacher">button_attacher</option>
                  <option id="packer">packer</option>
                  <option id="Warehouseman">Warehouseman</option>
                  <option id="Cutter">Cutter</option>
                </select>
              </div>

              <div>
                <label
                  className="block text-gray-600 sm:text-medium text-[15px] font-medium mb-2"
                  htmlFor="passport"
                >
                  Загрузите фото паспорта
                </label>
                <input
                  className="sm:w-[400px] w-[327px] h-[41px] border-[0.5px] border-black rounded-lg px-3 text-gray-900 font-medium text-small outline-none text-hidden file:hidden"
                  id="passport"
                  type="file"
                  name="passport"
                  onChange={(e) =>
                    setEmployee({ ...employee, passport: e.target.files[0] })
                  }
                  value={employee?.passport}
                />
              </div>
            </div>

            <button className="bg-primary-blue text-white text-[20px] font-medium w-[85%] xs:w-[131px] py-2 rounded-lg hover:bg-white duration-500 hover:text-primary-blue hover:border-[0.5px] hover:border-primary-blue lg:mr-[700px] mr-0">
              Сохранить
            </button>
          </form>
        </section>
      </section>
    </>
  );
};

export default FillEmployeeProfile;
