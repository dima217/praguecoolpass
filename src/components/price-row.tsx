import * as React from 'react';

interface PriceRowProps {
  label: string;
  price: number;
  count: number;
  priceLabel: string;
  onIncrement: () => void;
  onDecrement: () => void;
}

export const PriceRow: React.FC<PriceRowProps> = ({
  label,
  price,
  count,
  priceLabel,
  onIncrement,
  onDecrement,
}) => {
  return (
    <div className="flex justify-between items-center w-full relative first:mt-[22px] mb-[15px]">
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center w-full">
          <p className="w-[64px] min-w-[64px] break-words font-base font-bold text-sm">
            {label}
          </p>

          {label === "Adult" && (
            <p className="hidden text-lg lg:block absolute top-[-22px] left-[94px]">
              {priceLabel}
            </p>
          )}
        
        <div className="hidden md:block ml-4 w-20 text-center font-bold">
          {price} EUR
        </div>

        <div className="flex items-center ml-auto">
          <button
             className="flex justify-center items-center w-12 h-12 bg-white"
            onClick={onDecrement}
            disabled={count === 0}
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 12h14"
                />
              </svg>
          </button>

           <div className="flex justify-center items-center h-12 w-16 bg-white mx-1">
              <p className="font-bold text-lg">{count}</p>
            </div>

          <button
            className="flex justify-center items-center w-12 h-12 bg-white"
            onClick={onIncrement}
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
          </button>
        </div>
      </div>

      <div className="flex md:hidden text-sm flex-col items-end md:items-center text-sm lg:text-base">
          <div className="flex items-center">
            <span className="lg:hidden mr-[4px]"> {priceLabel} </span>
            <p className="lg:w-[90px] font-semibold">{price} EUR</p>
          </div>
        </div>
    </div>
  </div>
  );
};