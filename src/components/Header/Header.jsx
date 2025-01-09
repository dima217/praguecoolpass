import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-carbon-light bg-opacity-75 fixed w-full h-12 z-50">
            <div className="container mx-auto px-4 h-full flex items-center justify-center">
                <div className="text-2xl font-bold text-white mr-20">CoolPass</div>

                <nav className="hidden md:flex space-x-6">
                    <NavLink to="/" className="text-white hover:text-gray-300">CoolPass/Card</NavLink>
                    <NavLink to="/attractions" className="text-white hover:text-gray-300">Attractions</NavLink>
                    <NavLink to="/get-your-pass" className="text-white hover:text-gray-300">Get Your Pass</NavLink>
                    <NavLink to="/plan-your-trip" className="text-white hover:text-gray-300">Plan Your Trip</NavLink>
                    <NavLink to="/current-news" className="text-white hover:text-gray-300">Current News</NavLink>
                    <NavLink to="/faq" className="text-white hover:text-gray-300">FAQ</NavLink>
                </nav>
                
                <div className="flex items-center space-x-4 ml-20">
                    <button className="bg-orange-600 px-4 py-2 rounded-md hover:bg-orange-500 text-white">
                        Buy Online
                    </button>
                    <select className="bg-gray-800 px-2 py-1 text-sm rounded-md text-white">
                        <option>English</option>
                        <option>Čeština</option>
                        <option>Deutsch</option>
                    </select>
                </div>
            </div>
        </header>
    );
};

export default Header;