import { DownloadBtn } from "../components/download-btn";

const footerColumns = [
  [
    {
      link: "",
      label: "CoolPass / Prague Card",
    },
    {
      link: "",
      label: "Using CoolPass",
    },
    {
      link: "",
      label: "How You Save",
    },
    {
      link: "",
      label: "Getting Your Pass",
    },
    {
      link: "",
      label: "Sales & Collection Points",
    },
    {
      link: "",
      label: "Customer Reviews",
    },
  ],
  [
    {
      link: "",
      label: "ATTRACTIONS",
    },
    {
      link: "",
      label: "Sightseeing Tours",
    },
    {
      link: "",
      label: "Prague Areas",
    },
    {
      link: "",
      label: "Closures & Notices",
    },
    {
      link: "",
      label: "What's On",
    },
    {
      link: "",
      label: "Contact Us",
    },
  ],
  [
    {
      link: "faq",
      label: "Faq",
    },
    {
      link: "",
      label: "About Us",
    },
    {
      link: "",
      label: "Terms and Conditions",
    },
    {
      link: "",
      label: "Cancellation & Refund",
    },
  ],
];

export const Footer = () => {
  return (
    <footer className="flex justify-center h-auto mt-[70px] text-white bg-bg">
      <div className="container mt-[30px] px-[8px]">
        <div className="grid gap-10 grid-cols-[repeat(1,1fr)] md:grid-cols-[repeat(3,1fr)] xl:grid-cols-[repeat(5,1fr)]">
          {footerColumns.map((column) => (
            <ul className="ml-[8px]">
              {column.map((item, index) => (
                <li
                  key={index}
                  className={`${
                    item.link === "faq"
                      ? "bg-primary h-[48px] max-w-[157px] border border-primary w-auto text-center !mb-[12px] leading-[48px] rounded-[5px] uppercase"
                      : ""
                  } block text-sm font-semibold text-white mb-[10px] last:mb-0`}
                >
                  <a href={item.link}>{item.label}</a>
                </li>
              ))}
            </ul>
          ))}
          <div className="mb-[32px] ml-[8px]">
            <h3 className="mb-[12px] text-sm">DOWNLOAD</h3>
            <h3 className="mb-[12px] text-sm">Prague CoolPass App</h3>
            <div className="flex flex-col">
              <DownloadBtn image="/assets/images/appstore.9b997285.png" />
              <DownloadBtn image="/assets/images/googleplay.01cc5f25.png" />
            </div>
          </div>
          <div>
            <h3 className="text-sm mb-[13px]">NEWS & UPDATES</h3>
            <div className="w-full">
              <form className="w-[304px] min-w-[333px] flex items-center">
                <label>
                  <input
                    className="w-[304px] h-[48px] indent-[24px] rounded-[5px] border-0 pr-[106px] text-sm"
                    name="email"
                    type="email"
                    placeholder="Enter your e–mail"
                  />
                </label>
                <button
                  type="submit"
                  className="-ml-[106px] text-[15px] bg-primary border-2 border-primary h-[48px] min-w-[106px] rounded-r-[5px] px-[15px] font-semibold uppercase"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="font-Marselis font-bold text-[19px] mx-[8px] mt-[22px] mb-[10px]">
              CoolPass 2020-2025
            </div>
            <div className="font-Marselis font-bold text-[19px] mx-[8px]">
              Prague Card 1992-2025
            </div>
          </div>
        </div>
        <div className="text-xs w-[294px] text-left mt-[31px] mx-[8px] mb-[40px]">
          All rights reserved by Travel CoolPassLtd. & Prague Card s.r.o.
        </div>
      </div>
    </footer>
  );
};
