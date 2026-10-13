import { useState, useEffect } from "react";
import profile_bg from "../img/profile-bg.svg";
import Header from "../components/Header";
import { axiosInstantsUToken } from "../services/authApi";
import { statisticsBtns, balanceDetails, balance } from "../constants";
import menuMeatballs from "../img/Menu-Meatballs.svg";
import t_shirt from "../img/t-shirt.svg";

const Balance = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(null);

  const handleButtonClick = (index) => {
    setActiveButtonIndex(index === activeButtonIndex ? null : index);
  };

  const [category, setCategory] = useState([]);
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    axiosInstantsUToken
      .get("/category/")
      .then((result) => {
        setCategory(result.data);
      })
      .catch((err) => console.log(err));
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
          <div className="sm:w-[90%] w-[80%] 2xl:w-[63%] sm:h-[747px] h-[250px] bg-white border-[0.5px] border-black rounded-2xl mt-[10%] sm:mt-[190px] flex flex-col p-20">
            <h1 className="text-[28px] font-medium">
              Ваш баланс на данный момент
            </h1>

            <div className="lg:flexStart lg:gap-12 sm:flexStart block gap-6">
              <div className="xs:w-[212px] xs:h-[68px] w-[176px] h-[83px] bg-white border-[0.5px] border-black rounded-lg mx-auto sm:mx-0 xs:my-6 my-3 text-center p-2">
                <h1 className="xs:text-[36px] text-[20px] font-medium text-primary-blue">
                  12000 сом
                </h1>
              </div>
              <div className="xs:w-[212px] xs:h-[68px] w-[176px] h-[83px] bg-primary-blue rounded-lg mx-auto sm:mx-0 xs:my-6 my-3 text-center p-2">
                <h1 className="xs:text-[36px] text-[20px] font-medium text-white">
                  12000 сом
                </h1>
              </div>
            </div>

            <div className="h-[1px] border-dashed border-[1px] border-black"></div>

            <h1 className="text-[28px] font-medium">История</h1>

            <div className="flex flex-col 560:flex-row gap-[12px] py-8">
              {statisticsBtns.map((button, index) => (
                <button
                  key={index}
                  className={`py-[8px] px-[10px] rounded-[4px] text-[14px] duration-500 hover:btn_primary_border ${
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
              <div className="flex flex-col lg:flex-row lg:gap-[148px] gap-8 mt-12">
                {balanceDetails.map((item) => (
                  <h1 className="xs:text-[18px] text-[12px] text-gray-600">
                    {item.title}
                  </h1>
                ))}
              </div>
              <div className="max-container padding-container h-[1px] bg-gray-700 my-4"></div>
              {balance.map((item) => (
                <>
                  <div className="px-4 py-4 my-6 flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex items-center mb-6 lg:mb-0 gap-6">
                      <h1 className="cursor-pointer xs:text-secondary-medium text-[15px] font-regular">
                        {item.date}
                      </h1>
                    </div>

                    <div className="flexCenter sm:gap-28 xs:gap-6 gap-4">
                      <div className="text-center mb-6 lg:mb-0">
                        <h1 className="xs:text-secondary-medium text-[15px] font-regular">
                          {item.code}
                        </h1>
                      </div>

                      <div className="h-[40px] lg:hidden block border-dashed border-[0.5px] border-black"></div>

                      <div className="text-center mb-6 lg:mb-0">
                        <h1 className="xs:text-secondary-medium text-[15px] font-regular">
                          {item.model}
                        </h1>
                      </div>
                    </div>

                    <div className="flexCenter sm:gap-28 xs:gap-6 gap-4">
                      <div className="text-center mb-6 lg:mb-0">
                        <h1 className="xs:text-secondary-medium text-[15px] font-regular">
                          {item.amount}
                        </h1>
                      </div>

                      <div className="h-[40px] lg:hidden block border-dashed border-[0.5px] border-black"></div>

                      <div className="text-center mb-6 lg:mb-0">
                        <h1 className="xs:text-secondary-medium text-[15px] font-regular">
                          {item.total}
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="max-container padding-container h-[0.5px] bg-gray-700 my-4"></div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Balance;
