import { createStore } from "redux";
import { cardReducer } from "./cardSection/cardSection.reducer";

export const store = createStore(cardReducer);
