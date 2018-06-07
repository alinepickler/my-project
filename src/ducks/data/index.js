import { combineReducers } from "redux";
import itemsIds from "./itemIds";
import items from "./items";
import { mergeObjects, augmentSelectors } from "../../utils";

export const ns = "data-duck";
export const shape = mergeObjects([itemsIds.shape, items.shape]);
export const defaultState = mergeObjects([
  itemsIds.defaultState,
  items.defaultState
]);

const root = state => state[ns];
export const selectors = {
  root,
  ...augmentSelectors(root, itemsIds.ns, itemsIds.selectors),
  ...augmentSelectors(root, items.ns, items.selectors)
};

export const actions = mergeObjects([itemsIds.actions, items.actions]);

export const rawReducer = combineReducers({
  ...itemsIds.reducer,
  ...items.reducer
});

const reducer = {
  [ns]: rawReducer
};

export default {
  ns,
  shape,
  defaultState,
  selectors,
  actions,
  reducer
};
