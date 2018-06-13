import { combineReducers } from "redux";

// HELPERS
const stringifyErr = err => err.toString();

// UI
const itemsToShowReducer = (state = 10, action) => {
  switch (action.type) {
    case "UPDATE_ITEMS_TO_SHOW":
      return action.payload;
    default:
      return state;
  }
};

const isDarkThemeReducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return !state;
    default:
      return state;
  }
};

export const uiReducer = combineReducers({
  itemsToShow: itemsToShowReducer,
  isDarkTheme: isDarkThemeReducer
});
