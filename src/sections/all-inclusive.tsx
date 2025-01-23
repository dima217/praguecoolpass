import { AllInclusiveCard } from "../components/all-inclusive-card";
import { Typography } from "../components/ui/typography";

const offers = [
  {
    id: 1,
    image: "small_816c7b24-528c-49b7-a2b8-d78373951cac.jpg",
    title: "MUSEUMS AND OTHER SIGHTS",
    description:
      "From the historical Prague Castle and Jewish Quarter with its synagogues to the world-famous Prague ZOO, CoolPass will give you access to almost every must-see sight in Prague. Entry to most attractions is free with CoolPass, others can be visited with a substantial discount.",
    btn: "SEE MUSEUMS",
  },
  {
    id: 2,
    image: "small_bd3dde92-e556-4038-a57a-6ae816f9f8e0.jpg",
    title: '"PRAGUE HISTORICAL CITY" - FREE BUS TOUR',
    description:
      "This fantastic tour will show you all the Prague top landmarks. As you sit back and relax in a comfortable bus seat, best views of the Golden City will be passing in front of your eyes – Old Town, Lesser Town, Jewish Quarter and many more. Plus it is a convenient way to reach the Prague Castle area, where you can use the bus in Hop-On Hop-Off way. The tour is free with CoolPass.",
    btn: "SEE TOUR",
  },
  {
    id: 3,
    image: "small_39d99d84-0e14-4928-ba41-adbe2f0db233.jpg",
    title: "FREE CRUISES ON THE VLTAVA RIVER",
    description:
      "What can be better than admiring the elegant postcard views of Prague from water. Should it be your first acquaintance with the city, or a way to chill after a busy sightseeing walk, the pleasure is equal. You can choose one of the 4 cruises by Prague Boats to enjoy for free with CoolPass, as well as a romantic Prague Venice cruise. Other cruises with 25% discount include great dining options.",
    btn: "SEE CRUISES",
  },
  {
    id: 4,
    image: "small_5742190a-de3d-40c0-9902-78e9daa80af8.jpg",
    title: "CONCERTS, SHOWS, ENTERTAINMENT",
    description:
      "Prague has fantastic opportunities for leisure time. Taste local cuisine and watch folk performances, enjoy exquisite classical music concerts in authentic surroundings or visit a unique Black light theatre. You will find all of these and more in cost-saving deals for Prague CoolPass holders.",
    btn: "SEE ENTERTAINMENT OFFERS",
  },
];

export const AllInclusive = () => {
  return (
    <section className="relative">
      <div className=" container max-lg:p-0">
        <Typography variant="title">
          ALL-INCLUSIVE OFFER FOR YOUR PRAGUE SIGHTSEEING
        </Typography>
        <div className="grid gap-[20px] grid-cols-1 lg:grid-cols-2">
          {offers.map((offer) => (
            <AllInclusiveCard {...offer} />
          ))}
        </div>
      </div>
    </section>
  );
};
