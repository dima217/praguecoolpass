import * as React from "react";

interface StarRatingProps {
  rating: number;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <div key={index} className="text-xl text-amber-500">
          <img
           key={index}
               src={
                index < rating
                ? 'https://www.praguecoolpass.com/img/star-active.2039dc72.svg' : 'https://www.praguecoolpass.com/img/star.1a11cb79.svg'
                }
               alt={index < rating ? 'Active star' : 'Inactive star'}
               className="w-6 h-6 mr-[2px] last:mr-0"
          />
        </div>
      ))}
    </div>
  );
};
