import { useState } from "react";
import { Typography } from "../components/ui/typography";

const spoilers = [
  {
    id: 1,
    title: "Convenient Digital QR Code or Classic Smart Card",
    content: (
      <p className="my-[15px]">
        <p>
          Prague Card, the popular multi-attraction pass enjoyed by more than 1
          million visitors since 1992, is now coming up with its new mobile
          generation product - Prague CoolPass.
        </p>
        <p style={{ height: "15px" }}>
          <br />
        </p>
        <p>
          To access the best Prague attractions in a convenient way, you can
          choose between a digital QR Code in your mobile or a classic physical
          smart card.
        </p>
      </p>
    ),
  },
  {
    id: 2,
    title: "Free Access to 80+ Top Attractions",
    content: (
      <p className="my-[15px]">
        Visit Prague Castle with its splendid St. Vitus Cathedral, see
        world-famous Jewish Museum and its synagogues, top attractions like
        National Museum or the popular Prague ZOO, take a sightseeing bus tour
        and a romantic cruise along the Vltava river...&nbsp;All these and much
        more - 70+ attractions are available for free with CoolPass.&nbsp;
      </p>
    ),
  },
  {
    id: 3,
    title: "Exclusive Offers & Discounts up to 50% off",
    content: (
      <p className="my-[15px]">
        To add even more value to your trip, CoolPass includes cost-saving
        discounts on accessing other 60+ attractions, tours, cruises,
        entertainment shows, shopping and dining options.&nbsp;Pick your
        favourites and get some remarkable deals!
      </p>
    ),
  },
  {
    id: 4,
    title: "Free Mobile App",
    content: (
      <p className="my-[15px]">
        <>
          Download free our Prague CoolPass App where you can browse the
          attractions, filter them by their types, tourist areas or your
          interests. You can find the opening hours, nearest public transport
          stop, plan your own route by marking favourite places, be informed
          about closures and changes, use navigation to the attractions and much
          more. All information is available offline, and as an information and
          navigation source the App is free for everybody.
        </>
        <p style={{ height: "15px;" }}>
          <br />
        </p>
        <>
          In the App, you can also buy and download your CoolPass and use it on
          your smartphone to enter the included attractions.&nbsp;
        </>
      </p>
    ),
  },
];

export const Experience = () => {
  const [activeSpoiler, setActiveSpoiler] = useState(1);

  return (
    <section className="relative">
      <div className="container">
        <Typography variant="title">
          EXPERIENCE PRAGUE WITH COOLPASS BENEFITS
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
          {spoilers.map(({ id, title, content }, index) => (
            <div className="flex flex-col mt-0.5 first:mt-0">
              <div
                className="flex items-center h-[90px] w-full bg-bg cursor-pointer"
                onClick={() => setActiveSpoiler(index + 1)}
              >
                <h4 className="text-lg font-semibold text-white ml-[20px] text-uppercase">
                  {title}
                </h4>
              </div>
              <div
                className={`flex flex-col px-[20px] bg-secondary text-sm ${
                  activeSpoiler === id ? "h-auto visible" : "h-0 invisible"
                }`}
              >
                {content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
