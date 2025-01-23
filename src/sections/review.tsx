import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ReviewCard } from "../components/review-card";
import { StarRating } from "../components/ui/star-rating";
import { Typography } from "../components/ui/typography";

const reviews = [
  {
    rating: 4,
    title: "Un très bon investissement!",
    date: "September 25, 2019",
    content: (
      <p>
        De nombreuses activités deviennent gratuite grâce à cette carte :
        visites de musées, Château de Prague (ne pas manquer le palais
        Lobkowicz!), synagogues du quartier juif, Petrin Hi...
      </p>
    ),
    author: "Anne-Sophie",
    location: "France",
  },
  {
    rating: 4,
    title: "FATELA ASSOLUTAMENTE",
    date: "July 21, 2022",
    content: (
      <p>
        Mi era stata sconsigliata sia dall’agenzia viaggi che dalla reception in
        hotel ma caparbio e sicuro delle mie idee l’ho voluta fare Mai scelta
        migliore Ho visto una miriade di cose...
      </p>
    ),
    author: "Ciro",
    location: "Italia",
  },
  {
    rating: 4,
    title: "Find Sights Quickly in the App",
    date: "June 24, 2022",
    content: (
      <p>
        If you want to see a lot, the card is definitely worth it just because
        of the 2 boat tours and the 2-hour bus tour. If you download the app,
        the sights can also be found quickly.
      </p>
    ),
    author: "Marina",
    location: "Germany",
  },
  {
    rating: 3,
    title: "Çok hızlı bir tur yapmak gerekiyor",
    date: "November 20, 2022",
    content: (
      <p>
        Praga geldiyseniz güzel bir seçenek olabilir. Ama süre yetersiz kalır.
        Yani şöyle açıklamak gerekirse katedrali 1 günde gezeceksiniz. Bir günde
        ulusal müze. Bir günde başka bir tur...
      </p>
    ),
    author: "Yasin",
    location: "Türkiye",
  },
  {
    rating: 4,
    title: "Application très pratique",
    date: "March 01, 2023",
    content: (
      <p>
        Application très pratique qui permet d'économiser de l'argent d'une part
        (87e pour 3 jours alors que la somme de nos visites auraient coûté
        272e!) Et aussi de trouver facilement su...
      </p>
    ),
    author: "Stéphane",
    location: "France",
  },
  {
    rating: 4,
    title: "Buena pero ......",
    date: "November 13, 2018",
    content: (
      <p>
        La cantidad de sitios para visitar gratuitamente y alguna con descuentos
        es muy buena, el problema es que si se te llega a perder (como fue mi
        caso) o te la roban, no te hacen una ...
      </p>
    ),
    author: "Juan José González Rodríguez",
    location: "Gijón Asturias España",
  },
  {
    rating: 5,
    title: "Todo excepcional",
    date: "July 19, 2019",
    content: (
      <p>
        Todo excepcional, me ha gustado la tarjeta y el uso de ella, muy útil.
      </p>
    ),
    author: "Alicia",
    location: "Spain",
  },
  {
    rating: 3,
    title: "Worth it if you plan your experience well",
    date: "April 18, 2023",
    content: (
      <p>
        It was ok! Worth it if you plan your experience well to make the most
        out of your pass. I booked a two-day pass. I would opt for more if it
        was a bit cheaper.
      </p>
    ),
    author: "Kieu",
    location: "New Zealand",
  },
  {
    rating: 5,
    title: "Się opłaci",
    date: "March 29, 2023",
    content: (
      <p>
        Praga jest przepiękna, a z biletem była dla nas otwarta. Dzięki temu,
        jak wiele atrakcji było dostępnych zwiedziliśmy więcej, niż
        planowaliśmy. Cenowo za podstawowe zabytki bardzie...
      </p>
    ),
    author: "Katarzyna",
    location: "Poland",
  },
  {
    rating: 5,
    title: "Great!!",
    date: "April 21, 2018",
    content: (
      <p>
        It was simple and great. It's cheap and you can go around without
        problem. Just prepare your time and Energy to fill your day with
        something fun.
      </p>
    ),
    author: "Edwina Kris",
    location: "Erfurt, Germany",
  },
  {
    rating: 5,
    title: " 5 Sterne!!!",
    date: "March 23, 2024 ",
    content: (
      <p>
        Die Handhabung war toll, auch war es einfach interessante Orte zu finden
        und dort hin zu kommen. Vor Ort war der Ticketverkauf unkompliziert. Wir
        sind rundum zufrieden und würden d...
      </p>
    ),
    author: "Rocco",
    location: "Germany",
  },
  {
    rating: 5,
    title: "Viel zu sehen für wenig Geld",
    date: "August 05, 2019",
    content: (
      <p>
        Wir waren letzte Woche in Prag und haben uns für die 4Tageskarte
        entschieden. Es war super soviel kostenlos zu sehen. Nach 2Tagen hatte
        sich die Karte bereits rentiert und die Ausf...
      </p>
    ),
    author: "Miriam",
    location: "Germany",
  },
  {
    rating: 5,
    title: "Makkelijk te gebruiken",
    date: "November 11, 2024",
    content: (
      <p>
        De pas is heel makkelijk te gebruiken, de vele activiteiten zijn divers
        en verder staat er bij iedere activiteit duidelijke informatie
        (openingstijden, startpunt, enz.)
      </p>
    ),
    author: "C. - Netherlands",
    location: "Netherlands",
  },
  {
    rating: 5,
    title: "Comodissima per girare per Praga",
    date: "July 23, 2022",
    content: (
      <p>
        Comodissima per girare per Praga. Ha un sacco di attività incluse e
        musei e opere d'arte che abbiamo visto gratuitamente perché incluse nel
        pagamento effettuato prima, secondo me c...
      </p>
    ),
    author: "Francesca",
    location: "Italy",
  },
  {
    rating: 5,
    title: "Świetne rozwiązanie",
    date: "June 29, 2023",
    content: (
      <p>
        Świetne rozwiązanie jeśli chce się dużo zobaczyć w krótkim czasie. Nie
        napotkaliśmy żadnych problemów i zaoszczędziliśmy sporo na biletach
        wstępu.
      </p>
    ),
    author: "Mirella",
    location: "Poland",
  },
];

export const Review: React.FC = () => {
  const [activeSlide, setActiveSlide] = React.useState(1);

  return (
    <section className="mt-[40px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
          <Typography variant="title">
            WHAT OUR CUSTOMERS SAY ABOUT CooLPASS /PRAGUE CaRd
          </Typography>
          <div className="flex items-center mt-[19px] ml-[10px] font-bold lg:mt-0 lg:ml-0 flex flex-row-reverse lg:flex-row justify-end">
            <div className="text-xxl mx-[12px]">4.6</div>
            <StarRating rating={5} />
          </div>
        </div>

        <div className="flex relative">
          <button
            className={`hidden lg:block swiper-button-prv ${
              activeSlide === 1 ? "opacity-20" : ""
            }`}
          >
            <span className="h-[20px] w-[20px] flex justify-center items-center -ml-[40px] bg-no-repeat bg-center -scale-x-100">
              <svg
                width="16"
                height="24"
                viewBox="0 0 16 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.585204 2.83003L9.75517 12L0.585205 21.17L3.41514 24L15.4151 12L3.41514 -2.03105e-06L0.585204 2.83003Z"
                  fill="#DBDBDB"
                />
              </svg>
            </span>
          </button>
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            slidesPerGroup={1}
            className="relative"
            onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex + 1)}
            breakpoints={{
              768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              1140: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                navigation: {
                  nextEl: ".swiper-button-nxt",
                  prevEl: ".swiper-button-prv",
                },
              },
            }}
            navigation={false}
          >
            {reviews.map((review, index) => (
              <SwiperSlide className="relative !h-auto">
                <ReviewCard key={index} {...review} />
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            className={`hidden lg:block swiper-button-nxt ${
              activeSlide === 13 ? "opacity-20" : ""
            }`}
          >
            <span className="h-[20px] w-[20px] flex justify-center items-center">
              <svg
                width="16"
                height="24"
                viewBox="0 0 16 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.585204 2.83003L9.75517 12L0.585205 21.17L3.41514 24L15.4151 12L3.41514 -2.03105e-06L0.585204 2.83003Z"
                  fill="#DBDBDB"
                />
              </svg>
            </span>
          </button>
        </div>

        <div className="lg:hidden flex justify-center items-center mt-[15px] font-bold text-sm opacity-90 text-silver">
          <span className="text-primary">{activeSlide}</span> /
          <span className="swiper-pagination-total">{reviews.length}</span>
        </div>

        <div className="flex flex-col lg:flex-row justify-center lg:justify-end lg:gap-[12px] font-bold text-bg mt-[15px]">
          <a
            href="/"
            className="flex justify-center items-center mb-[12px] h-[48px] leading-[19px] text-center min-w-[190px] px-[20px] border border-bg rounded-[5px] uppercase"
          >
            SEE ALL REVIEWS
          </a>
          <button className="flex justify-center items-center h-[48px] leading-[19px] text-center min-w-[190px] px-[20px] border border-bg rounded-[5px] uppercase">
            WRITE YOUR REVIEW
          </button>
        </div>
      </div>
    </section>
  );
};
