import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart.reducer";

import { MatButton } from "./Matbutton";

function Card(props) {
    const dispatcher = useDispatch();
    const [count, setCount] = useState(0);

    function addcart() {
        if (count === 0) {
            return;
        }
        const data = {
            id: props.id,
            name: props.name,
            image: props.image,
            price: props.price,
            count: count,
            sum: props.price * count,
        }
        dispatcher(addToCart(data));
        setCount(0);
    }

    return (
        <section className="w-11/12 bg-white rounded-xl flex justify-between">
            <div className="w-[40%] flex flex-col p-2">
                <img className="h-32 rounded-xl" src={props.image} alt="" />
                <div className="flex justify-around items-center mt-3">
                    <Btn name="-" onClick={() => setCount(count > 1 ? count - 1 : 0)} />
                    <span>{count}</span>
                    <Btn name="+" onClick={() => setCount(count + 1)} />
                </div>
            </div>
            <div className="w-[60%] flex flex-col p-2 justify-between">
                <div className="block">
                    <p className="text-md font-bold text-slate-700">{props.name}</p>
                    <p className="text-[12px] h-20 capitalize text-slate-300 text-ellipsis overflow-hidden mb-3">{props.description}</p>
                    <p className="text-sm font-bold text-slate-500">₹ {props.price} /-</p>
                    <p className="text-[11px] text-slate-400">{props.price} x {count} = {props.price * count}</p>
                </div>
                <MatButton name="Add to cart" onClick={addcart} />
            </div>
        </section>
    );
}

function Btn(props) {
    return (
        <button
            className="border border-slate-300 w-7 h-7 rounded-md text-center font-bold text-slate-500 duration-300 hover:bg-slate-100"
            onClick={props.onClick}
        >
            {props.name}
        </button>
    );
}

export { Card };