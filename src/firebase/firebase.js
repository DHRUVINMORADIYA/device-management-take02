import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDObyM1obsyiRgfcSvVb0_9l-qzHyQeuUM",
  authDomain: "device-management-fe6f4.firebaseapp.com",
  databaseURL: "https://device-management-fe6f4-default-rtdb.firebaseio.com",
  projectId: "device-management-fe6f4",
  storageBucket: "device-management-fe6f4.appspot.com",
  messagingSenderId: "18788817914",
  appId: "1:18788817914:web:6bbe146f8be126090de243",
  measurementId: "G-3P4S1L72V8",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
