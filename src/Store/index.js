import { configureStore } from "@reduxjs/toolkit";
import { HeroReducer } from "./HeroStore";

const store = configureStore({
  reducer: {
    heroList: HeroReducer
  }
});
export default store;
