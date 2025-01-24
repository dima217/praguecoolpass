// @ts-nocheck
import { useEffect, useState } from "react";
import { AllInclusiveCard } from "../components/all-inclusive-card";
import { Typography } from "../components/ui/typography";
import { useSelector } from "react-redux";

export const AllInclusive = ({title, offersContent, offersText}) => {

  const [offer, setOffer] = useState([]);
  const [offerContent, setOfferContent] = useState([]);
  const selectedLanguage = useSelector((state) => state.language);

  useEffect(() => {

    const formatedOffers = offersText.items;
    const formatedOffersContent = offersContent.offers.app_images;
    
    setOffer(formatedOffers);
    setOfferContent(formatedOffersContent);

  }, [selectedLanguage])

  return (
    <section className="relative">
      <div className=" container max-lg:p-0">
        <Typography variant="title">
          {title}
        </Typography>
        <div className="grid gap-[20px] grid-cols-1 lg:grid-cols-2">
          {offer.map((offer, index) => (
            <AllInclusiveCard {...offer} 
            image={offerContent[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
