//config object
import firebase from "firebase/app";
import "firebase/firestore"; //for database
import "firebase/firebase-auth"; //for auth

const config = {
  apiKey: "AIzaSyCs10P1S8UNtqJb_sI0VeG6bu50DhhIt_g",
  authDomain: "e-commerce-reactpro.firebaseapp.com",
  projectId: "e-commerce-reactpro",
  storageBucket: "e-commerce-reactpro.appspot.com",
  messagingSenderId: "933264399133",
  appId: "1:933264399133:web:f65f874c138a7359db9ff4",
  measurementId: "G-RLXE8C2BWY",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error on created user')
    }
  }
  return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
