import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Header } from "./components/header";
// Sections
import { Buy } from "./sections/buy";
import { Footer } from "./sections/footer";
import { Hero } from "./sections/hero";
import { HowToUse } from "./sections/HowToUse";
import { LatestNews } from "./sections/latest-news";
import { Review } from "./sections/review";
import { TopAttractions } from "./sections/top";
import { Experience } from "./sections/experience";
import { AllInclusive } from "./sections/all-inclusive";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <TopAttractions />
      <Experience />
      <AllInclusive />
      <HowToUse />
      <LatestNews />
      <Buy />
      <Review />
      <Footer />
    </>
  );
}

export default App;
