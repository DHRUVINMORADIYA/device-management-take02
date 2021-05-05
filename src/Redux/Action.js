import { getFirestore } from "redux-firestore";
import firebase from "firebase/app";

export const addHomeCard = (title) => {
  return (dispatch) => {
    const firestore = getFirestore();
    firestore
      .collection("homes")
      .add({
        title: title,
      })
      .then(() => {
        dispatch({ type: "ADD_HOME_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "ADD_HOME_ERROR" }, err);
      });
  };
  // return {
  //   type: ADD_HOME_CARD,
  //   payload: title,
  // };
};

export const addDeviceCard = ({ id, title }) => {
  return (dispatch) => {
    const firestore = getFirestore();
    firestore
      .collection("homes")
      .doc(id)
      .update({ devices: firebase.firestore.FieldValue.arrayUnion(title) })
      .then(() => {
        dispatch({ type: "ADD_DEVICE_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "ADD_DEVICE_ERROR" }, err);
      });
  };
  // return {
  //   type: ADD_DEVICE_CARD,
  //   homeID: homeID,
  //   payload: title,
  // };
};
