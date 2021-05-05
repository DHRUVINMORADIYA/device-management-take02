import initialData from "./initialData";
import { ADD_DEVICE_CARD, ADD_HOME_CARD } from "./Type";

const reducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_HOME_SUCCESS":
      console.log("home card added successfully");
      return state;
    case ADD_DEVICE_CARD:
      state.listHomes[action.homeID].listDevices.push({
        id: state.listHomes[action.homeID].listDevices.length,
        title: action.payload,
      });
      return state;
    case ADD_HOME_CARD:
      state.listHomes.push({
        id: state.listHomes.length,
        title: action.payload,
        listDevices: [],
      });
      return state;
    default:
      return state;
  }
};

export default reducer;
