import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
const filterSlice = createSlice({
  name: "filters",
  initialState: { name: "" },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload.toLowerCase();
    },
  },
});
// export const selectFilter = (state) => state.filters.name;
export const { changeFilter } = filterSlice.actions;
export default filterSlice.reducer;
export const selectNameFilter = (state) => state.filters.name;
