import { Button } from "./ui/button";

export const Search = () => {
  return (
    <div className="flex flex-col md:flex-row items-center mt-[20px] container relative">
      <div className="flex items-center justify-start relative w-full md:w-[270px]">
        <label className="w-full">
          <div className="//autocomplete">
            <div className="rounded-[5px]">
              <div className="max-md:w-full">
                <input
                  placeholder="Search Attractions"
                  type="text"
                  autoComplete="off"
                  className="border w-full rounded-[5px] text-sm color-bg h-[37px] indent-[12px]"
                />
                <input type="hidden" />
              </div>
            </div>
            <ul
              className="//autocomplete__results"
              style={{ display: "none" }}
            ></ul>
          </div>
        </label>
        <div className="absolute w-[20px] h-[20px] cursor-pointer right-[18px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
              stroke="#DBDBDB"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.5 17.5L13.875 13.875"
              stroke="#DBDBDB"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <Button className="max-md:mt-[12px] md:ml-[21px] md:px-[20px] h-[37px] bg-primary text-white max-md:w-full">
        Let’s go
      </Button>
    </div>
  );
};
