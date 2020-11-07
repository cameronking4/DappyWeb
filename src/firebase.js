import firebase from "firebase";
// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDQP1Z-CDFguyomlVStNP7ar2U8lq_aqTg",
  authDomain: "swaptact-988da.firebaseapp.com",
  databaseURL: "https://swaptact-988da.firebaseio.com",
  projectId: "swaptact-988da",
  storageBucket: "swaptact-988da.appspot.com",
  messagingSenderId: "872574258487",
  appId: "1:872574258487:web:c30154944dda6153731eb2",
  measurementId: "G-RRPQ1YWCWP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
