import { Swiper, SwiperSlide } from "swiper/react";
import { TopCard } from "../components/top-card";
import { Typography } from "../components/ui/typography";

const slides = [
  {
    link: "/",
    image: "small_c757f3d2-c948-430c-89d1-ea4cd45b4634.jpg",
    title: "OLD ROYAL PALACE",
    description: "Impressive medieval residence of Bohemian kings",
  },
  {
    link: "/",
    image: "small_7311e70d-d382-400a-92a4-fae87bb917a8.jpg",
    title: "NATIONAL MUSEUM",
    description: "The oldest and largest Czech museum founded in 1818",
  },
  {
    link: "/",
    image: "small_e355f6ab-122a-44d0-b907-8e5abe0fc447.jpg",
    title: "PRAGUE ZOO",
    description: "The fourth most popular zoo in the world",
  },
  {
    link: "/",
    image: "small_6a08d963-b128-4bb1-8462-6b4c70e9cb5a.jpg",
    title: "STEEL ART MUSEUM",
    description:
      "Exceptionally detailed and fun exhibits made from recycled metal",
  },
  {
    link: "/",
    image: "small_397ef1fc-8a9e-4337-8d77-49f13fbddbda.jpg",
    title: "JEWISH MUSEUM IN PRAGUE",
    description: "One of the largest collections of Judaica in the world",
  },
  {
    link: "/",
    image: "small_d013e18e-681c-4b0a-a813-e436a5d91f14.jpg",
    title: "ILLUSION ART MUSEUM",
    description:
      "The Czech Republic’s first museum dedicated to illusion and trick art",
  },
  {
    link: "/",
    image: "small_6b334ea9-eb8e-46d1-b434-a253802b1204.jpg",
    title: "PILSNER URQUELL EXPERIENCE - THE ORIGINAL TOUR",
    description:
      "Interactive adventure telling the story of the world's first golden beer",
  },
  {
    link: "/",
    image: "small_97cca5a8-ddf8-4bce-b9e6-807232d68f15.jpg",
    title: "HARD ROCK CAFE PRAGUE",
    description: "Europe's largest Hard Rock Cafe",
  },
  {
    link: "/",
    image: "small_7620d433-1d5e-4ed8-a4c9-cd3fc7cfd208.jpg",
    title: 'BUS TOUR " PRAGUE - HISTORICAL CITY"',
    description:
      "Let yourself be enchanted by the history of Prague during a sightseeing tour with Martin Tour",
  },
  {
    link: "/",
    image: "small_999665f4-58b9-421f-b30f-f23c22944650.jpg",
    title: "PRAGUE VENICE CRUISE",
    description: "See the best of historical Prague in 45 minutes",
  },
  {
    link: "/",
    image: "small_373457e3-4ae3-4afd-8b84-c84ad9e19b8e.jpg",
    title: "PRAGUE GRAND CRUISE",
    description:
      "One of the four cruises with Prague Boats, from which you can choose one for free with CoolPass",
  },
  {
    link: "/",
    image: "small_2b381de5-54b8-4394-864b-df5046eb0adc.jpg",
    title: "SCHWARZENBERG PALACE",
    description:
      "Old Masters - permanent exhibition by National Gallery in Prague",
  },
  {
    link: "/",
    image: "small_4b0e6599-1bdd-4a15-8105-ce42f77b7e05.jpg",
    title: "CONVENT OF SAINT AGNES",
    description:
      "One of the oldest Gothic buildings in Prague Exhibition of Medieval Art in Bohemia and Central Europe (National Gallery Prague)",
  },
  {
    link: "/",
    image: "small_7b637824-8370-4da4-b13b-8c7ae45067d1.jpg",
    title: "VYŠEHRAD CASEMATES",
    description: "Monumental underground hall Gorlice ",
  },
  {
    link: "/",
    image: "small_e085f66e-7af9-4b9c-99cb-2c065e98b6d1.jpg",
    title: "MUSEUM OF BRICKS",
    description: "The world's largest LEGO museum",
  },
];

export const TopAttractions = () => {
  return (
    <section className="relative">
      <div className="container">
        <Typography variant="title">
          TOP PRAGUE ATTRACTIONS INCLUDED IN COOLPASS
        </Typography>
        <Swiper
          slidesPerView={1.1}
          spaceBetween={20}
          className="relative"
          breakpoints={{
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            1140: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
          }}
        >
          {slides.map(({ link, title, image, description }) => (
            <SwiperSlide>
              <TopCard
                link={link}
                title={title}
                image={image}
                description={description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
