import * as React from "react";

interface StepCardProps {
  number: string;
  description: string;
  content: React.ReactNode;
}

export const StepCard: React.FC<StepCardProps> = ({
  number,
  description,
  content,
}) => {
  return (
    <div className="flex flex-col items-center h-full w-full">
      <div className="flex justify-center items-center bg-secondary w-full">
        {content}
      </div>
      <div className="flex flex-col text-center">
        <div
          className="self-center text-xxl font-bold"
          aria-label={`Step ${number}`}
        >
          {number}
        </div>
        <p className="w-[288px] mt-[7px] text-sm">{description}</p>
      </div>
    </div>
  );
};
