import { ADD_DEVISE_CARD, ADD_HOME_CARD } from "./Type";

export const addHomeCard = (title) => {
  return {
    type: ADD_HOME_CARD,
    payload: title,
  };
};

export const addDeviseCard = (title, homeID) => {
  return {
    type: ADD_DEVISE_CARD,
    homeID: homeID,
    payload: title,
  };
};
