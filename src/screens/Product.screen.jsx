import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCategory } from "../store/category.reducer";

import { Card } from "../components/Card";
import { MatButton } from "../components/Matbutton";
import { productData, categoryData } from "../constants/LocalDatas";

function ProductScreen() {
    const categoryState = useSelector(state => state.category.value);
    const dispatcher = useDispatch();

    return (
        <div className="p-3 h-[89vh] w-full overflow-x-hidden overflow-y-scroll">
            <div className="mb-8 flex gap-2">
                {
                    categoryData.map(data => {
                        return <MatButton
                            key={data.id}
                            name={data.name}
                            selected={categoryState === data.name ? true : false}
                            onClick={() => dispatcher(changeCategory(data.name))} />
                    })
                }
            </div>
            <div className="h-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    productData.map(data => {
                        return data.category === categoryState ?
                            <Card
                                key={data.id}
                                id={data.id}
                                name={data.name}
                                image={data.image}
                                description={data.description}
                                price={data.price}
                            /> : null
                    })
                }
            </div>
        </div>
    );
}

export { ProductScreen };