import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { menuData } from "../constants/LocalDatas";

function SideMenu() {
    const navigate = useNavigate();
    const cartData = useSelector(state => state.cart);

    return (
        <div className="bg-white h-[89vh] p-3 rounded-tr-xl rounded-br-xl flex flex-col justify-between">
            <div>
                {
                    menuData.map(data => {
                        return <div key={data.id} className="flex items-center justify-start w-full px-3 my-3 rounded-md duration-500 hover:bg-[#ffc4b2]"
                            onClick={() => navigate(data.path)}>
                            <img src={data.ico} alt="ico" className="h-8 w-8 pr-2" />
                            <span className="text-[12px]">{data.name}</span>
                            {
                                data.name === "Cart" ?
                                    <div className="ml-2 px-2 h-6 w-6 flex justify-center items-center rounded-2xl text-sm text-white bg-[#E88D72]">{cartData.cart.length}</div>
                                    : null
                            }
                        </div>
                    })
                }
            </div>
            <div className="flex justify-center items-center">
                <span className="w-full px-3 text-center rounded-md duration-500 hover:bg-[#ffc4b2]">Log Out</span>
            </div>
        </div>
    );
}

export { SideMenu };