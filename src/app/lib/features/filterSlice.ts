import { PetFilter } from "@/app/models/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface FilterState {
  applied: PetFilter[];
}

const initialState: FilterState = {
  applied: [],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterAdded(state, action: PayloadAction<PetFilter>) {
      state.applied = state.applied.concat(action.payload); // Redux uses immer
    },
    filterRemoved(state, action: PayloadAction<PetFilter>) {
      state.applied = state.applied.filter(
        (flt) =>
          flt.key === action.payload.key && flt.value === action.payload.value
      );
    },
  },
});

export const { filterAdded, filterRemoved } = filterSlice.actions;

export const selectAppliedFilters = (state: RootState) =>
  state.filters.applied as PetFilter[];

export default filterSlice.reducer;
