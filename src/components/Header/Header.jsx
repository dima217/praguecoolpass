import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-carbon-light bg-opacity-75 fixed w-full z-10">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="text-2xl font-bold text-white">CoolPass</div>
                 
                 <nav className="hidden md:flex space-x-6">
                     <NavLink to="/" className="hover:text-gray-300">CoolPass/Card</NavLink>
                     <NavLink to="/attractions" className="hover:text-gray-300">Attractions</NavLink>
                     <NavLink to="/get-your-pass" className="hover:text-gray-300">Get Your Pass</NavLink>
                     <NavLink to="/plan-your-trip" className="hover:text-gray-300">Plan Your Trip</NavLink>
                     <NavLink to="/current-news" className="hover:text-gray-300">Current News</NavLink>
                     <NavLink to="/faq" className="hover:text-gray-300">FAQ</NavLink>
                 </nav>

        <div className="flex space-x-4">
          <button className="bg-orange-600 px-4 py-2 rounded-md hover:bg-orange-500">
            Buy Online
          </button>
          <select className="bg-gray-800 px-2 py-1 text-sm rounded-md">
            <option>English</option>
            <option>Čeština</option>
            <option>Deutsch</option>
            {/* Подтягивайте данные языков через API */}
          </select>
        </div>
            </div>
        </header>
    );
}

export default Header;