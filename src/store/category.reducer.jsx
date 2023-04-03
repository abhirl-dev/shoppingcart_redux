import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    value: "coffee",
};

const categorySlice = createSlice({
    name: 'category',
    initialState: initialValue,
    reducers: {
        changeCategory: change,
    },
});

function change(state, action) {
    state.value = action.payload;
}


export default categorySlice.reducer;
export const { changeCategory } = categorySlice.actions;
