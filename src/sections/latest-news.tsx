import { NewsCard } from "../components/news-card";
import { Button } from "../components/ui/button";
import { Typography } from "../components/ui/typography";

export const LatestNews = () => {
  return (
    <div className="container max-lg:p-0">
      <Typography variant="title">LATEST NEWS</Typography>
      <div className="gap flex flex-col gap-y-[30px]">
        <NewsCard
          image="/assets/images/small_ac49d512-6427-4d5c-b1b7-ede5f1c1fb48.jpg"
          title="PRAGUE IN MOTION - EXPLORE THE CITY AT YOUR OWN PACE WITH FREE CooLPASS TOURS"
          date="10.10.2024"
          content={
            <>
              Are you a first-time visitor in Prague? Or maybe you want to see
              the city from a different angle rather than just visiting museums
              and attractions? In any case, various free tours offered by
              CoolPass would be your best sightseeeing bet. Get a unique
              perspective of Prague while travelling across the water, by bus or
              on foot, and let these tours bring the city’s most iconic sights
              closer to you.
            </>
          }
        />
        <NewsCard
          image="/assets/images/small_281ab04b-ae1f-434e-9bf8-9345abd2337b.jpg"
          title="UNLOCK MORE SIGHTS AND TREASURES OF PRAGUE CASTLE WITH COOLPASS"
          date="21.08.2024"
          content={
            <>
              Prague Castle is undoubtedly the most famous landmark of the Czech
              capital and a true architectural wonder. In addition to its top
              attractions, such as St. Vitus Cathedral or Golden Lane (included
              free with CoolPass), you can now visit several other.
              <a
                href="https://praguecoolpass.com/attraction/prague-castle-permanent-exhibitions"
                rel="noopener noreferrer"
                target="_blank"
              >
                fascinating exhibitions
              </a>
              with 50% discount. Take a closer look at the treasures the Castle
              keeps and enjoy this perfect introduction into Czech history and
              cultural heritage:
            </>
          }
          side="end"
        />
      </div>
      <div className="container flex justify-end mt-[15px]">
        <Button className="bg-primary text-white self-end px-[20px] h-[48px] max-lg:w-full min-w-[228px] font-bold text-base">
          See all news
        </Button>
      </div>
    </div>
  );
};
