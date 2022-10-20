import { createSlice } from "@reduxjs/toolkit";
import data from "../Data/data";

const HeroStore = createSlice({
  name: "HeroStore",
  initialState: {
    items: data,
    favList: []
  },
  reducers: {
    RemoveHero(state, action) {
      state.items.push(action.payload);
      state.favList = [
        ...state.favList.filter((hero) => hero.id !== action.payload.id)
      ];
    },
    AddHero(state, action) {
      if (state.favList.length === 5) {
        return;
      }
      state.favList.push(action.payload);
      state.items = [
        ...state.items.filter((hero) => hero.id !== action.payload.id)
      ];
    }
  }
});
const HeroReducer = HeroStore.reducer;
const HeroActions = HeroStore.actions;
export { HeroReducer };
export default HeroActions;
