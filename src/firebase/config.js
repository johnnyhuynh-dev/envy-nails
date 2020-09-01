import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC4Bce5xVOyxtUeN0auYQAE8BevSx3Uivw",
  authDomain: "envy-nails-and-lashes.firebaseapp.com",
  databaseURL: "https://envy-nails-and-lashes.firebaseio.com",
  projectId: "envy-nails-and-lashes",
  storageBucket: "envy-nails-and-lashes.appspot.com",
  messagingSenderId: "1043779005222",
  appId: "1:1043779005222:web:fa57434fc2d104c4042fe7",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Project storage
const projectStorage = firebase.storage();

// Project FireStore
const projectFirestore = firebase.firestore();

// Firebase server timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// export all three
export { projectStorage, projectFirestore, timestamp };
