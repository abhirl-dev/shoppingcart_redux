import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cart.reducer";
import categoryReducer from "./category.reducer";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        category: categoryReducer,
    }
});

export { store };