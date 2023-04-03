import React from "react";
import { useDispatch } from "react-redux";

import { deleteCart } from "../store/cart.reducer";
import deleteIco from "../assets/svg/delete.svg";

function Cartcard(props) {
    const dispatcher = useDispatch();
    return (
        <section className="w-full flex justify-between items-center bg-white rounded-xl p-2 mb-3 text-slate-500 text-sm">
            <img className="w-12 h-12 rounded-xl" src={props.image} alt="img" />
            <p className="w-32">{props.name}</p>
            <p className="w-10">{props.price}</p>
            <p className="w-10">{props.count}</p>
            <div className="flex">
                <p className="w-20">₹ {props.sum} /-</p>
                <img src={deleteIco} alt="delete" className="cursor-pointer" onClick={() => dispatcher(deleteCart(props.id))} />
            </div>
        </section>
    );
}

export { Cartcard };