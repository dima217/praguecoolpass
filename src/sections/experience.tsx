// @ts-nocheck
import { useEffect, useState } from "react";
import { Typography } from "../components/ui/typography";
import { useSelector } from "react-redux";

export const Experience = ({title, benefitsData}) => {

  const selectedLanguage = useSelector((state) => state.language);

  const [activeSpoiler, setActiveSpoiler] = useState(1);
  const [benefits, setBenefits] = useState([]);

  useEffect(() => {
    const formatedBenefits = benefitsData.items;
    setBenefits(formatedBenefits);
  }, [selectedLanguage])

  return (
    <section className="relative">
      <div className="container">
        <Typography variant="title">
          {title}
        </Typography>
      </div>
      <div className="flex flex-col lg:flex-row w-full container p-0">
        <div className="flex mb-[11px] lg:ml-[67px] lg:order-2">
          <div
            className="w-[118px] lg:w-[195px] h-[246px] lg:h-[390px] ml-[40px] bg-no-repeat bg-cover lg:mt-[52px] z-10"
            style={{
              backgroundImage: 'url("/assets/images/mobile.87cdac93.png")',
            }}
          ></div>
          <div
            className="w-[172px] lg:w-[263px] h-[115px] lg:h-[176px] bg-no-repeat bg-cover mt-[106px] lg:mt-[188px] ml-[119px] lg:ml-[130px] absolute rounded-[10px]"
            style={{
              backgroundImage:
                'url("/assets/images/prague-card-image.670e8103.png")',
            }}
          ></div>
        </div>
        <div className="flex flex-col w-full lg:w-3/5">
          {benefits.map(({ title, text }, index) => (
            <div className="flex flex-col mt-0.5 first:mt-0">
              <div
                className="flex items-center h-[90px] w-full bg-bg cursor-pointer"
                onClick={() => setActiveSpoiler(index + 1)}
              >
                <h4 className="text-lg font-semibold text-white ml-[20px] text-uppercase">
                  {title.toUpperCase()}
                </h4>
              </div>
              <div
                className={`flex flex-col px-[20px] bg-secondary text-sm ${
                  activeSpoiler === (index + 1) ? "h-auto visible" : "h-0 invisible"
                }`} dangerouslySetInnerHTML={{ __html: text }}
              >
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
