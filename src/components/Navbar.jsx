import React from "react";

import searchIco from "../assets/svg/search.svg";

function Navbar() {
    return (
        <div className="w-full bg-white flex items-center p-3 shadow-sm border-b">
            <div className="mr-6">
                <span className="text-[16px] md:text-[22px] font-bold text-[#E88D72]">Purr</span>
                <span className="text-[18px] md:text-[24px] font-bold text-[#543855]"> Coffee</span>
            </div>
            <div className="ml-6 rounded-3xl bg-[#f2f2f2] flex items-center">
                <img src={searchIco} alt="search.svg" className="w-[20px] h-[20px] ml-2" />
                <input className="py-2 px-4 w-52 outline-none rounded-3xl bg-[#f2f2f2] text-sm" type="text" placeholder="Search ..." />
                <button className="py-2 px-4 outline-none rounded-3xl bg-[#E88D72] text-white text-sm duration-200 hover:bg-[#FF8882]" type="button">Search</button>
            </div>
        </div>
    );
}

export { Navbar };