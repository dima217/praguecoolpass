import * as React from "react";
import { PriceRow } from "./price-row";

interface PassCardProps {
  days: number;
  price: {
    adult: number;
    student: number;
  };
  isSelected?: boolean;
}

export const PassCard: React.FC<PassCardProps> = ({ days, price }) => {
  const [adultCount, setAdultCount] = React.useState(0);
  const [studentCount, setStudentCount] = React.useState(0);

  const totalPrice = adultCount * price.adult + studentCount * price.student;

  return (
    <div className="flex flex-col w-full overflow-hidden">
      <div className="flex flex-col justify-center items-center bg-bg text-white h-[96px] w-full rounded-t-xl">
        <div className="font-bold text-[26px]">{days} DAY PASS</div>
        <div className="mt-[4px] text-sm font-semibold">
          Buying Prague CoolPass
        </div>
      </div>
      <div className="w-full pl-[25px] md:py-[8px] pr-[28px] bg-secondary">
        <PriceRow
          label="Adult"
          price={price.adult}
          count={adultCount}
          onIncrement={() => setAdultCount((prev) => prev + 1)}
          onDecrement={() => setAdultCount((prev) => Math.max(0, prev - 1))}
        />
        <PriceRow
          label="Student Child"
          price={price.student}
          count={studentCount}
          onIncrement={() => setStudentCount((prev) => prev + 1)}
          onDecrement={() => setStudentCount((prev) => Math.max(0, prev - 1))}
        />
        <div className="flex items-center justify-end md:justify-center w-full text-center mb-[10px] mt-[15px]">
          <p className="text-sm md:text-lg mr-[5px]">Your price:</p>
          <p className="font-bold text-base md:text-lg uppercase">
            {totalPrice.toFixed(2)} EUR
          </p>
        </div>
      </div>

      <button
        className="h-[60px] font-semibold text-[15px] md:text-lg leading-[19px] bg-primary text-white rounded-b-xl p-0"
        aria-label="Complete booking"
      >
        COMPLETE YOUR BOOKING
      </button>
    </div>
  );
};
