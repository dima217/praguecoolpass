// @ts-nocheck
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu } from "./ui/menu";
import LanguageSelector, { Select } from "./ui/language-selector";

export const Header = ({ buyNow }) => {
  const [isOpen, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && !isOpen) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isOpen]);

  return (
    <header
      className={`flex items-center z-50 h-[43px] w-full text-white fixed transition-transform duration-300
       ${isOpen ? "bg-[#444959]" : "bg-bg/60"}
       ${isVisible ? "translate-y-0" : "-translate-y-full"}
     `}
    >
      <div className="container mx-auto flex flex-wrap items-center p-2 z-10">
        <div className="justify-start flex items-center z-30">
          <div
            className="xl:hidden relative w-[27px] h-[18px] flex flex-col justify-between cursor-pointer relative mr-[15px] z-10"
            onClick={toggleMenu}
          >
            <span
              className={`block h-0.5 bg-primary rounded absolute top-0 left-0 w-full transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-primary rounded absolute top-2 left-0 w-full transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-primary rounded absolute top-4 left-0 w-full transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
          <a href="/">
            <h1 className="font-Marselis text-xl font-bold">CoolPass</h1>
          </a>
        </div>
        {/* Desktop navigation */}
        <nav className="hidden space-x-6 xl:flex ml-[50px] mr-[40px] basis-auto grow text-sm">
          <a href="#" className="hover:text-primary transition-colors">
            COOLPASS/CARD
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            ATTRACTIONS
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            GET YOUR PASS
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            PLAN YOUR TRIP
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            CURRENT NEWS
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            FAQ
          </a>
        </nav>
        <div className="grow shrink basis-auto flex justify-end space-x-4">
          <Button
            className={`${
              isOpen ? "hidden" : "block"
            } bg-primary hover:bg-orange-700 min-w-[105px] h-[35px] text-[15px] transition-colors`}
          >
            {buyNow}
          </Button>
          <LanguageSelector/>
        </div>
      </div>
      
      <Menu open={isOpen}>
        <a
          className="text-white text-base mb-[14px] font-bold hover:text-primary transition-colors"
          href="#"
        >
          COOLPASS/CARD
        </a>
        <a
          className="text-white text-base mb-[14px] font-bold hover:text-primary transition-colors"
          href="#"
        >
          ATTRACTIONS
        </a>
        <a
          className="text-white text-base mb-[14px] font-bold hover:text-primary transition-colors"
          href="#"
        >
          GET YOUR PASS
        </a>
        <a
          className="text-white text-base mb-[14px] font-bold hover:text-primary transition-colors"
          href="#"
        >
          PLAN YOUR TRIP
        </a>
        <a
          className="text-white text-base mb-[14px] font-bold hover:text-primary transition-colors"
          href="#"
        >
          CURRENT NEWS
        </a>
        <a
          className="text-white text-base font-bold mb-[14px] hover:text-primary transition-colors"
          href="#"
        >
          FAQ
        </a>
        <Button className="bg-primary hover:bg-orange-700 min-w-[105px] h-[35px] text-[15px] transition-colors">
          BUY ONLINE
        </Button>
      </Menu>
    </header>
  );
};
