import reducer from "./Reducer";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { getFirebase } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import { reactReduxFirebase } from "react-redux-firebase";
import firebaseConfig from "../firebase/firebase";

const rootReducer = combineReducers({
  reducer: reducer,
  firestore: firestoreReducer,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebaseConfig),
    reactReduxFirebase(firebaseConfig)
  )
);

export default store;
