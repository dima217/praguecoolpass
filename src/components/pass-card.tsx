import * as React from 'react';
import { PriceRow } from './price-row';
import { useNavigate } from 'react-router-dom';

interface PassCardProps {
  numberOfDays: number;
  priceAdult: number;
  priceStudent: number;
  adultLabel: string;
  studentLabel: string;
  priceLabel: string;
  totalPriceLabel: string;
  buttonLabel: string;
  buyPassText: string;
  dayText: string;
  namePass: string;
  adultCount: number;
  studentCount: number;
  onAdultIncrement: () => void;
  onAdultDecrement: () => void;
  onStudentIncrement: () => void;
  onStudentDecrement: () => void;
}

export const PassCard: React.FC<PassCardProps> = ({
  numberOfDays,
  priceAdult,
  priceStudent,
  adultLabel,
  studentLabel,
  priceLabel,
  totalPriceLabel,
  buttonLabel,
  buyPassText,
  dayText,
  namePass,
  adultCount,
  studentCount,
  onAdultIncrement,
  onAdultDecrement,
  onStudentIncrement,
  onStudentDecrement,
}) => {
  const totalPrice = adultCount * priceAdult + studentCount * priceStudent;

  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <div className="flex flex-col justify-center items-center bg-bg text-white h-[112px] w-full rounded-t-xl">
        <div className="text-[26px] font-bold pt-[17px]">
          {numberOfDays} {dayText} {namePass}
        </div>
        <div className="text-sm font-semibold mt-[3px]">
          {buyPassText}
        </div>
      </div>
      
      <div className="w-full h-[226px] px-4 py-2 bg-[#F9F9FB]">
        <PriceRow
          label={adultLabel}
          price={priceAdult}
          count={adultCount}
          priceLabel={priceLabel}
          onIncrement={onAdultIncrement}
          onDecrement={onAdultDecrement}
        />
        <PriceRow
          label={studentLabel}
          price={priceStudent}
          count={studentCount}
          priceLabel={priceLabel}
          onIncrement={onStudentIncrement}
          onDecrement={onStudentDecrement}
        />
        
        <div className="flex items-center justify-end w-full text-center my-4">
          <span className="text-sm mr-2">{totalPriceLabel}</span>
          <span className="font-bold text-lg">
            {totalPrice.toFixed(2)} EUR
          </span>
        </div>
      </div>

      <button
        className="h-[60px] font-semibold text-[15px] md:text-lg leading-[19px] bg-primary text-white rounded-b-xl p-0"
        aria-label="Complete booking"
        onClick={() => navigate('/eshop')}
      >
        {buttonLabel.toUpperCase()}
      </button>
    </div>
  );
};