import React from "react";
import { useSelector } from "react-redux";

import { Cartcard } from "../components/Cartcard";
import { MatButton } from "../components/Matbutton";

function CartScreen() {
    const cartData = useSelector(state => state.cart);

    function grandTotal() {
        let total = 0;
        cartData.cart.forEach(data => {
            total += data.sum;
        });
        return total;
    }

    return (
        <div className="w-full h-[89vh] p-4 overflow-x-hidden overflow-y-visible">
            <span className="my-2 text-md font-bold text-slate-500">My Cart</span>
            <div className="mt-2">
                {
                    cartData.cart.map(data => {
                        return <Cartcard
                            key={data.id}
                            id={data.id}
                            name={data.name}
                            image={data.image}
                            count={data.count}
                            sum={data.sum}
                        />
                    })
                }
            </div>
            <hr />
            <div className="mt-4 block">
                <div className="w-full flex justify-end items-center">
                    <div className=" text-slate-500 text-sm">
                        <div className="flex justify-between items-center w-52">Total <span>₹{grandTotal()}/-</span></div>
                        <div className="flex justify-between items-center w-52">Shipping <span>₹0/-</span></div>
                        <div className="flex justify-between items-center w-52 mb-3">Tax <span>0 %</span></div>
                        <hr />
                        <div className="flex justify-between items-center w-52 my-2">Grant total <span>₹{grandTotal()}/-</span></div>
                        <hr />
                    </div>
                </div>
                <div className="w-full flex justify-end items-center mt-3 gap-3">
                    <MatButton name="Cancel" />
                    <MatButton name="Place Order" />
                </div>
            </div>

        </div>
    );
}

export { CartScreen };