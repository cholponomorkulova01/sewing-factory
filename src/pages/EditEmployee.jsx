import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import form_bg_center from "../img/form-bg-center.svg";
import form_bg_regis_right from "../img/form-bg-regis-right.svg";
import { axiosInstantsUToken } from "../services/authApi";

const EditEmployee = () => {
  const navigate = useNavigate();

  const { username } = useParams();

  const [values, setValues] = useState({
    phone_number: "",
    role: "",
    first_name: "",
    last_name: "",
  });

  useEffect(() => {
    axiosInstantsUToken.get(`/users/${username}`).then((res) => {
      setValues({
        ...values,
        phone_number: res.data[0].phone_number,
        role: res.data[0].role,
        first_name: res.data[0].fisrt_name,
        last_name: res.data[0].last_name,
      });
      console.log(res.data);
    });
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    axiosInstantsUToken.put(`/users/${username}`, values).then((res) => {
      navigate("/employee");
      console.log(res.data);
    });
  };

  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src={form_bg_center}
          alt="img"
          className="absolute top-0 left-0 w-full h-full object-cover z-20"
        />
        <div className="flex justify-center relative z-30">
          <form
            className="bg-white sm:w-[584px] sm:h-auto w-[351px] h-auto border-[0.5px] border-black sm:rounded-2xl rounded-lg flex flex-col items-center mt-[150px]"
            onSubmit={handleFormSubmit}
          >
            <h2 className="sm:text-large text-[20px] font-medium sm:mt-12 mt-6">
              Изменить сотрудника
            </h2>
            <div>
              <label
                className="block text-gray-600 sm:text-medium text-[15px] font-medium mb-2 mt-4"
                htmlFor="first_name"
              >
                Имя
              </label>
              <input
                className={`sm:w-[416px] w-[327px] h-[41px] border-[0.5px] border-black rounded-lg px-3 text-gray-900 font-medium text-small outline-none`}
                id="first_name"
                type="number"
                name="first_name"
                placeholder="Введите имя"
                required
                minLength={14}
                onChange={(e) => {
                  setValues({ ...values, first_name: e.target.value });
                }}
                value={values.first_name}
              />
            </div>
            <div>
              <label
                className="block text-gray-600 sm:text-medium text-[15px] font-medium mb-2 mt-4"
                htmlFor="last_name"
              >
                Фамилия
              </label>
              <input
                className={`sm:w-[416px] w-[327px] h-[41px] border-[0.5px] border-black rounded-lg px-3 text-gray-900 font-medium text-small outline-none`}
                id="last_name"
                type="number"
                name="last_name"
                placeholder="Введите фамилию"
                required
                minLength={14}
                onChange={(e) => {
                  setValues({ ...values, last_name: e.target.value });
                }}
                value={values.last_name}
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
                className="sm:w-[416px] w-[327px] h-[41px] border-[0.5px] border-black rounded-lg px-3 text-gray-900 font-medium text-small outline-none mb-4"
                id="phone_number"
                type="number"
                name="phone_number"
                placeholder="Введите номер телефона"
                required
                onChange={(e) =>
                  setValues({ ...values, phone_number: e.target.value })
                }
                value={values.phone_number}
              />
            </div>

            <div>
              <label
                className="block text-gray-600 sm:text-medium text-[15px] font-medium mb-2"
                htmlFor="role"
              >
                Роль
              </label>
              <select
                className="sm:w-[416px] w-[327px] h-[41px] border-[0.5px] border-black rounded-lg px-3 text-gray-900 font-medium text-small outline-none mb-4"
                id="role"
                name="role"
                required
                onChange={(e) => setValues({ ...values, role: e.target.value })}
                value={values.role}
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

            <button
              className="btn_primary_blue_regis hover:btn_primary_border cursor-pointer"
              type="submit"
            >
              Изменить
            </button>
          </form>
        </div>
        <img
          src={form_bg_regis_right}
          alt="img"
          className="absolute top-0 right-0 sm:w-[1000px] sm:h-[1100px] w-[600px] h-[600px] object-cover z-10"
        />
      </section>
    </>
  );
};

export default EditEmployee;
