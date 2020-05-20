import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAUCR105gXu8kxz_J9sJahaSBv0Qpb2aT0",
  authDomain: "roar-tech-db.firebaseapp.com",
  databaseURL: "https://roar-tech-db.firebaseio.com",
  projectId: "roar-tech-db",
  storageBucket: "roar-tech-db.appspot.com",
  messagingSenderId: "799975663490",
  appId: "1:799975663490:web:72f6d14d7297699e8a919b",
  measurementId: "G-MGDGGHXF9X",
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
