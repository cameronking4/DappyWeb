import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { getFirebase } from "react-redux-firebase";
import rootReducer from "./reducers/rootReducer";
import { firebaseConfig } from "./firebase";
import firebase from "./firebase";

const saveToLocalStorage = (state) => {
  const serialized = JSON.stringify(state);
  localStorage.setItem("state", serialized);
};

const checkLocalStorage = () => {
  const serialized = localStorage.getItem("state");
  if (serialized === null) return undefined;
  return {
    state: JSON.parse(serialized)
  };
};

export const store = createStore(
  rootReducer,
  checkLocalStorage(),

  composeWithDevTools(
    compose(
      applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
      reduxFirestore(firebase, firebaseConfig)
    )
  )
);

store.subscribe(() => saveToLocalStorage(store.getState()));
