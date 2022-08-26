import { async } from "@firebase/util";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const googleSignIn = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    return {
      ok: false,
      error: error.message,
    };
  }
};

export const registerUserWithEmail = async (email, password, displayName) => {
  try {
    const result = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    // Todo: add displayName to user profile
    await updateProfile( FirebaseAuth.currentUser, { displayName });

    return {
      ok: true,
      uid: result.user.uid, 
      displayName: result.user.displayName, 
      email: result.user.email, 
      photoURL: result.user.photoURL,
      error: null,
    };
  } catch (error) {
    return {
      ok: false,
      error: error.message,
    };
  }
};

export const loginUserWithEmail = async (emailrecibe, password) => {
  try {
    const result = await signInWithEmailAndPassword(FirebaseAuth, emailrecibe, password);
    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    return {
      ok: false,
      error: error.message,
    };
  }
}

export const logoutFirebase = async () => {
  try {
    const result = await signOut(FirebaseAuth)
    return {
      ok: true
    }
  } catch (error) {
    return {
      ok: false,
      error: error.message,
    };
  }
}